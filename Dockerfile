# Build Stage
FROM node:18-bullseye-slim AS build-stage

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN echo "Checking architecture: $(arch)"

# Install dependencies
RUN npm install --verbose

# Copy the rest of the application
COPY . .

# Build the Angular Universal app
RUN npm run build

# Serve Stage
FROM node:18-bullseye-slim

WORKDIR /app

# Copy built app from the build stage
COPY --from=build-stage /app/dist ./dist

# Expose port 4000
EXPOSE 4000

# Start the Angular Universal server
CMD ["node", "dist/angular-basic/server/server.mjs"]
