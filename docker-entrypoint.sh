#!/bin/sh
set -e

# Start Node.js backend on internal port 5000 in background
echo "Starting Node.js backend on port 5000..."
PORT=5000 node /app/server.js &

# Start Nginx in foreground
echo "Starting Nginx on ports 80 and 3000..."
exec nginx -g "daemon off;"
