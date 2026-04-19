#!/bin/bash

# Script para iniciar el proyecto Xolochi
# Uso: ./launch.sh

echo "🦘 Iniciando Xolochi..."
echo ""

# Verificar si ya están instaladas las dependencias
if [ ! -d "node_modules" ] || [ ! -d "client/node_modules" ] || [ ! -d "server/node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm run install:all
fi

# Verificar .env en server
if [ ! -f "server/.env" ]; then
    echo "⚠️  Creando archivo .env desde ejemplo..."
    cp .env.example server/.env
    echo "⚠️  IMPORTANTE: Edita server/.env con tus credenciales de Stripe"
fi

echo "🚀 Iniciando servidor y cliente..."
echo "   - Frontend: http://localhost:5173"
echo "   - Backend:  http://localhost:3001"
echo ""

npm run dev