# frontend/Dockerfile

# ---- Stage 1: Build React ----
    FROM node:18 AS build-stage

    WORKDIR /app
    COPY package.json package-lock.json ./
    RUN npm install
    
    COPY . . 
    # Собираем продакшен-сборку (предположим, скрипт называется build)
    RUN npm run build
    
    # ---- Stage 2: Nginx with static files ----
    FROM nginx:stable-alpine
    
    # Удаляем дефолтный конфиг (не обязательно, но обычно полезно)
    RUN rm /etc/nginx/conf.d/default.conf
    
    # Копируем наш конфиг (он будет лежать рядом, в frontend/nginx.conf)
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Копируем собранные статические файлы из Stage 1
    COPY --from=build-stage /app/build /usr/share/nginx/html
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]