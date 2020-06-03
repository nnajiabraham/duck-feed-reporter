FROM node:12

WORKDIR /usr/src/app

# Install dependencies
COPY . .
RUN npm install 


EXPOSE 7000
# Default command
CMD ["npm", "start"]