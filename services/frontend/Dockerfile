# syntax=docker/dockerfile:1.4

# Create image based on the official Node image from dockerhub
FROM node:lts-buster AS development

# Create app directory
WORKDIR /usr/src/data_tool

# Copy dependency definitions
COPY package.json /usr/src/data_tool
COPY package-lock.json /usr/src/data_tool

# Install dependecies
RUN npm set progress=false \
    && npm config set depth 0 \
    && npm i install
RUN npm ci

# Get all the code needed to run the app
COPY . /usr/src/data_tool

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]

FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]