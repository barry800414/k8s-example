
## Deployment
#### Create a new deployment
`kubectl create -f deployment.yaml --record`

#### List deployment
`kubectl get deployment`

#### List Pods
`kubectl get pods`

#### try to delete a pod, and observe the change
`kubectl delete pod [name]`


## Rolling update
`while true; do curl [url] && sleep 0.5; done`
`kubectl set image deployment demo-server-deployment demo-server=barry800414/demo-server:v2`

