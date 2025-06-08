# Proyecto Web Estático con Docker

Este proyecto sirve archivos HTML estáticos usando la imagen oficial de NGINX y Docker.

## Requisitos

- Docker Desktop

## Instrucciones

1. Construir la imagen Docker (Docker desktop debe estar en ejecución para ello):

```
docker build -t mi-web .
```

2. Ejecutar el contenedor:

```
docker run -d -p 8080:80 mi-web
```

3. Ir a [http://localhost:8080](http://localhost:8080)
