# Stage 1: Build application using Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy dependency definitions
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install

# Copy application source code
COPY . .

# Build production bundle
RUN bun run build

# Stage 2: Serve with lightweight NGINX and Node API
FROM nginx:alpine

# Install Node.js for backend API
RUN apk add --no-cache nodejs

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy backend files and dependencies
WORKDIR /app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY server.js ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose HTTP ports (both 80 and 3000)
EXPOSE 80 3000

CMD ["/docker-entrypoint.sh"]
