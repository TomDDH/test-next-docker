# Use Node.js LTS (Long Term Support) version
FROM node:hydrogen-alpine3.20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
# Expose the port the app runs on
EXPOSE 3080



# Start the application
CMD ["npm", "start"]
