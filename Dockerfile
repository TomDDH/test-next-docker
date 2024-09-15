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
ADD https://neoxr.s3.dualstack.us-east-2.amazonaws.com/test/test-app-edf74-7aba881f4835.json google-cloud-key.json

# Set the environment variable
ENV GOOGLE_APPLICATION_CREDENTIALS=/app/google-cloud-key.json


# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
# Expose the port the app runs on
EXPOSE 3080

ENV PORT 3000

# Start the application
CMD ["npm", "start"]
