
## Ingress

#### Enable ingress on minikube
`minikube addons enable ingress`
`kubectl get pods -n kube-system`

#### create an ingress
`kubectl create -f ingress.yaml`

#### When you use ingress on your local computer
- `sudo vim /etc/hosts`  
- add [IP address] [domain name] mapping