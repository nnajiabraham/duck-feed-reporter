# Duck-Feed-Reporter

## App StartUp

To start up application service, ensure you have docker and docker-compose installed and running then
run in the root directory `sh startup.sh`

## Project Structure

This project is divided into three submodule applications:

- FrontEnd (Create React App)
  - Can run locally independently
- BackEnd (NestJS)
  - Can run locally independently
- Infrastructure (Docker)
  - Handles the build and packaging of all apps into a docker service
