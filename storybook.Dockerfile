FROM node:8-slim
WORKDIR /app

# --cap-add=SYS_ADMIN
# https://docs.docker.com/engine/reference/run/#additional-groups

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install

# Bundle app source
COPY . .