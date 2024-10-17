# Stage 1: Build frontend
FROM node:18 AS frontend-builder

WORKDIR /app/frontend

COPY ./frontend/package*.json ./
RUN npm install

COPY ./frontend ./
RUN npm run build

# Stage 2: Build backend and prepare public folder
FROM node:18 AS backend

WORKDIR /app/backend

COPY ./backend/package*.json ./
RUN npm install

# Copy backend source code
COPY ./backend ./

# Copy frontend build to backend public folder
COPY --from=frontend-builder /app/frontend/dist ./public

EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
