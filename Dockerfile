FROM node:10-alpine AS alpine

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install
EXPOSE 3000
# Finally runs the application
CMD [ "npm", "start" ]

# NOTE: Docker works better on lunix distributions 

# Use only the Dockerfile if you'd like to just build the image of your app via the command:
# $ docker build -t your_image_name .
# $ docker run -dp 3000:3000 your_image_name

# Use the docker-compose.yml for hot-reloading feature
# Hot reloading for nodeJS could be achieved using nodemon
