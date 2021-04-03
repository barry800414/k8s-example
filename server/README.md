
## Prerequisite
- install docker on your computer: https://docs.docker.com/docker-for-mac/install/


## Commands
#### build image
`docker build -t barry800414/demo-server .`

#### optional
```
docker run --name demo-server-container -p 8080:8080 -d barry800414/demo-server
docker exec -it demo-server-container bash
(inside container) ps -aux
docker stop demo-server-container
docker rm demo-server-container
```

#### push to docker registry
```
docker push barry800414/demo-server
```

#### build newer version and push to docker registry
```
docker build -t barry800414/demo-server:v2 .
docker push barry800414/demo-server:v2
```
