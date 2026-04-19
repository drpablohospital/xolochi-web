#!/bin/bash

# Script para subir Xolochi a GitHub
# Uso: ./push-to-github.sh TU_USERNAME TU_TOKEN

cd /home/xiu/.openclaw/workspace/xolochi-web

# Verificar argumentos
if [ $# -lt 1 ]; then
    echo "Uso: ./push-to-github.sh GITHUB_USERNAME [TOKEN]"
    echo ""
    echo "Si no tienes token, genera uno en:"
    echo "https://github.com/settings/tokens"
    echo ""
    echo "El token necesita permisos: repo (full)"
    exit 1
fi

USERNAME="$1"
TOKEN="${2:-}"

echo "🦘 Subiendo Xolochi a GitHub..."
echo "Usuario: $USERNAME"
echo ""

# Configurar remote con token si se proporciona
if [ -n "$TOKEN" ]; then
    REMOTE_URL="https://${USERNAME}:${TOKEN}@github.com/${USERNAME}/xolochi-web.git"
else
    REMOTE_URL="https://github.com/${USERNAME}/xolochi-web.git"
fi

# Eliminar remote anterior si existe
git remote remove origin 2>/dev/null || true

# Agregar nuevo remote
git remote add origin "$REMOTE_URL"

# Cambiar a rama main
git branch -M main

echo "🚀 Haciendo push..."

# Intentar push
if git push -u origin main 2>&1; then
    echo ""
    echo "✅ ¡Éxito! Repositorio subido a GitHub"
    echo ""
    echo "📎 URL: https://github.com/${USERNAME}/xolochi-web"
else
    echo ""
    echo "❌ El push falló. Posibles soluciones:"
    echo ""
    echo "1. Crea el repositorio primero en GitHub:"
    echo "   https://github.com/new"
    echo "   Nombre: xolochi-web"
    echo "   Público o privado (tu elección)"
    echo ""
    echo "2. Si usas token, verifica que tenga permisos 'repo'"
    echo ""
    echo "3. Intenta manualmente:"
    echo "   cd /home/xiu/.openclaw/workspace/xolochi-web"
    echo "   git remote add origin https://github.com/${USERNAME}/xolochi-web.git"
    echo "   git push -u origin main"
fi
