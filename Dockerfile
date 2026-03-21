# Use official Bun image
FROM oven/bun:1

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --production

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Run the server
CMD ["bun", "run", "src/server.ts"]