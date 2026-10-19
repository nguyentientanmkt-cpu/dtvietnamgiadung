# Stage 1: Build application using Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy dependency definitions
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy application source code
COPY . .

# Build production bundle
RUN bun run build

# Stage 2: Serve with lightweight NGINX
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
