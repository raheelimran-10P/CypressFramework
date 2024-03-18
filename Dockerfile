FROM cypress/browsers:latest

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

# RUN $(npm bin)/cypress verify

CMD ["npm", "run", "cypress:all"]