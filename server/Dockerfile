FROM node:10

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install

# If you are building your code for production
# RUN yarn install --only=production

# Bundle app source
COPY . .

EXPOSE 4200
