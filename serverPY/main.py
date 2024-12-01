import asyncio
from pyais import decode
from aisdb.database.dbconn import PostgresDBConn
from aisdb.database import sqlfcn

async def receive_ais_data():
    # Пример использования UDP сокета
    loop = asyncio.get_event_loop()
    transport, protocol = await loop.create_datagram_endpoint(
        lambda: AISProtocol(),
        local_addr=('0.0.0.0', 12345)  # Замените на нужный порт
    )
    try:
        await asyncio.sleep(3600)  # Работать в течение часа
    finally:
        transport.close()

class AISProtocol:
    def datagram_received(self, data, addr):
        message = data.decode('utf-8').strip()
        try:
            ais_message = decode(message)
            save_to_database(ais_message)
        except Exception as e:
            print(f"Ошибка при обработке сообщения: {e}")

def save_to_database(ais_message):
    with PostgresDBConn(
        hostaddr='127.0.0.1',
        port=7777,
        user='oleks11',
        password='your_password',
        dbname='aisData'
    ) as dbconn:
        # Преобразуйте ais_message в формат, совместимый с AISdb
        sqlfcn.insert_dynamic(dbconn, ais_message)

if __name__ == '__main__':
    asyncio.run(receive_ais_data())