FROM cypress/browsers:chrome67

WORKDIR /app

# --cap-add=SYS_ADMIN
# https://docs.docker.com/engine/reference/run/#additional-groups

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
COPY cypress.json ./

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install

# Bundle app source
COPY ./cypress ./cypress