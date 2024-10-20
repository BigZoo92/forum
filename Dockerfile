# Stage 1: Build frontend
FROM node:18 AS frontend-builder

WORKDIR /app/frontend

# Copier les fichiers nécessaires pour construire le frontend
COPY ./frontend/package*.json ./
RUN npm install

COPY ./frontend ./
RUN npm run build

# Stage 2: Build backend and prepare public folder
FROM node:18 AS backend

WORKDIR /app/backend

# Copier les fichiers nécessaires pour construire le backend
COPY ./backend/package*.json ./
RUN npm install

# Copier le code source du backend
COPY ./backend ./

# Donner les bonnes permissions au script d'entrée si nécessaire
RUN ["chmod", "+x", "/usr/local/bin/docker-entrypoint.sh"]

# Copier le build du frontend dans le dossier public du backend
COPY --from=frontend-builder /app/frontend/dist ./public

# Exposer le port 3000
EXPOSE 3000

# Démarrer le serveur backend
CMD ["npm", "start"]

