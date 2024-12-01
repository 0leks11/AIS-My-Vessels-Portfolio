import asyncio
from pyais import decode
from database import SessionLocal
from models import AISDynamic
from datetime import datetime

class AISProtocol(asyncio.DatagramProtocol):
    def datagram_received(self, data, addr):
        message = data.decode('utf-8').strip()
        try:
            ais_message = decode(message)
            save_to_database(ais_message)
        except Exception as e:
            print(f"Ошибка при обработке сообщения: {e}")

def save_to_database(ais_message):
    db = SessionLocal()
    try:
        # Извлекаем данные из ais_message
        mmsi = ais_message.get('mmsi')
        time = datetime.utcnow()
        longitude = ais_message.get('x')
        latitude = ais_message.get('y')
        sog = ais_message.get('sog')
        cog = ais_message.get('cog')
        heading = ais_message.get('heading')
        nav_status = ais_message.get('nav_status')

        # Создаём объект модели
        ais_dynamic = AISDynamic(
            mmsi=mmsi,
            time=time,
            longitude=longitude,
            latitude=latitude,
            sog=sog,
            cog=cog,
            heading=heading,
            nav_status=nav_status,
            src='receiver'
        )

        db.add(ais_dynamic)
        db.commit()
    except Exception as e:
        print(f"Ошибка при сохранении в базу данных: {e}")
    finally:
        db.close()

async def main():
    loop = asyncio.get_running_loop()
    print("Запуск приема данных AIS...")
    transport, protocol = await loop.create_datagram_endpoint(
        lambda: AISProtocol(),
        local_addr=('0.0.0.0', 12345)  # Замените на нужный порт
    )
    try:
        await asyncio.sleep(3600)  # Работать в течение часа
    finally:
        transport.close()

if __name__ == '__main__':
    asyncio.run(main())