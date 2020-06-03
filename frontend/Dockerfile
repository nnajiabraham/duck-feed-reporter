# stage1 - build react app first 
FROM node:12 as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY . ./
RUN npm install 

# build command
RUN npm run build 
RUN ls -la

# stage 2 - build the final image and copy the react build files
FROM nginx:1.17.8-alpine
RUN ls -la
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]