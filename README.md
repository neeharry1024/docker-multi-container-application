# Project 3 - Docker Multi-Container Application

## Project Overview

A multi-container application built with **Docker Compose**.

### Architecture

``` text
Frontend (Nginx)
      |
Backend API (Node.js + Express)
     / \
 MySQL  Redis
```

## Features

-   Multi-container architecture
-   Docker Compose orchestration
-   Custom Dockerfile for backend
-   Nginx frontend
-   MySQL database
-   Redis cache
-   Docker bridge network
-   Persistent Docker volume
-   Environment variables using `.env`

## Project Structure

``` text
docker-multi-container-app/
├── backend/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   └── nginx.conf
├── mysql/
│   └── init.sql
├── .env
├── docker-compose.yml
└── README.md
```

## Run

``` bash
docker-compose up --build -d
```

## Verify

``` bash
docker ps
docker-compose logs
docker network ls
docker volume ls
```

## Stop

``` bash
docker-compose down
```

## Skills Demonstrated

-   Docker
-   Docker Compose
-   Networking
-   Volumes
-   Environment Variables
-   MySQL
-   Redis
-   Nginx
-   Node.js
-   Git & GitHub

## Author

Neelam Saini
