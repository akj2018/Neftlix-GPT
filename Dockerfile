# Use the slim version of the node 14 image as our base
FROM node:14-slim

# Create a directory for our application in the container and set it as the working directory
WORKDIR /usr/src/frontend

# First, copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install all the node modules required by the React app
RUN npm install

# Install 'serve', a static file serving package globally in the container
RUN npm install -g serve

# Using ARG in Dockerfile for Build-time Variables:
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

# Then, copy the rest of your application's source code
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable for the application's port
# (Be sure to replace '4200' with your application's specific port number if different)
ENV PORT 3000

# Serve the 'build' directory on port 4200 using 'serve'
CMD ["serve", "-s", "-l", "3000", "./build"]
