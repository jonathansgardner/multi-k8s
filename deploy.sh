docker build -t jonathansgardner/multi-client:latest -t jonathansgardner/multi-client:$GIT_SHA -f ./client/Dockerfile ./client
docker build -t jonathansgardner/multi-api:latest -t jonathansgardner/multi-api:$GIT_SHA -f ./api/Dockerfile ./api
docker build -t jonathansgardner/multi-worker:latest -t jonathansgardner/multi-worker:$GIT_SHA -f ./worker/Dockerfile ./worker

docker push jonathansgardner/multi-client:latest
docker push jonathansgardner/multi-api:latest
docker push jonathansgardner/multi-worker:latest

docker push jonathansgardner/multi-client:$GIT_SHA
docker push jonathansgardner/multi-api:$GIT_SHA
docker push jonathansgardner/multi-worker:$GIT_SHA

kubectl apply -f k8s
kubectl set image deployments/client-deployment client=jonathansgardner/multi-client:$GIT_SHA
kubectl set image deployments/api-deployment api=jonathansgardner/multi-api:$GIT_SHA
kubectl set image deployments/worker-deployment worker=jonathansgardner/multi-worker:$GIT_SHA
