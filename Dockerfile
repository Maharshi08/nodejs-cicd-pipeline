# Use Node.js LTS as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
