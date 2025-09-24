# My Node.js App with CI/CD 🚀

This is a simple Node.js web application with an automated CI/CD pipeline using **GitHub Actions** and **DockerHub**.

## Features
- Simple Express server
- Dockerized application
- GitHub Actions pipeline for:
  - Installing dependencies
  - Running tests
  - Building Docker image
  - Pushing image to DockerHub

## Project Structure
```
my-node-app/
 ├── app.js
 ├── package.json
 ├── Dockerfile
 └── .github/
     └── workflows/
         └── main.yml
```

## Setup
1. Clone this repo.
2. Create DockerHub account.
3. In GitHub repo → Settings → Secrets → Actions → add:
   - `DOCKER_USERNAME`
   - `DOCKER_PASSWORD`
4. Push changes to `main` branch.

## Run Locally
```bash
docker run -p 3000:3000 your-dockerhub-username/my-node-app:latest
```
Open: [http://localhost:3000](http://localhost:3000)
