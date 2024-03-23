# Use an official Node.js runtime as a parent image
FROM node:14-slim

# Create a directory for our application in the container and set it as the working directory
WORKDIR /usr/src/backend

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the backend application source code
COPY . .

# If your .env file is not supposed to be added to version control,
# you should use Docker's environment variable feature or a secret manager.
# COPY .env .env

# Set the environment variable for the application's port
ENV PORT 5000

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["npm", "start"]