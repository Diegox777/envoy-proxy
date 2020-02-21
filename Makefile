front_envoy:
	@ kubectl delete configmap front-envoy-config;exit 0
	@ kubectl create configmap front-envoy-config --from-file=envoy-config=./front_envoy/envoy-config.yaml
	@ kubectl delete -f ./front_envoy/k8s_deployment.yaml;exit 0
	@ kubectl create -f ./front_envoy/k8s_deployment.yaml

service_a:
	@ kubectl delete configmap service-a-envoy-config;exit 0
	@ kubectl create configmap service-a-envoy-config --from-file=envoy-config=./service_a/envoy-config.yaml
	@ kubectl delete -f ./service_a/k8s_deployment.yaml;exit 0
	@ kubectl create -f ./service_a/k8s_deployment.yaml

service_b:
	@ kubectl delete configmap service-b-envoy-config;exit 0
	@ kubectl create configmap service-b-envoy-config --from-file=envoy-config=./service_b/envoy-config.yaml
	@ kubectl delete -f ./service_b/k8s_deployment.yaml;exit 0
	@ kubectl create -f ./service_b/k8s_deployment.yaml

service_c:
	@ kubectl delete configmap service-c-envoy-config;exit 0
	@ kubectl create configmap service-c-envoy-config --from-file=envoy-config=./service_c/envoy-config.yaml
	@ kubectl delete -f ./service_c/k8s_deployment.yaml;exit 0
	@ kubectl create -f ./service_c/k8s_deployment.yaml

service_d:
	@ kubectl delete configmap service-d-envoy-config;exit 0
	@ kubectl create configmap service-d-envoy-config --from-file=envoy-config=./service_d/envoy-config.yaml
	@ kubectl delete -f ./service_d/k8s_deployment.yaml;exit 0
	@ kubectl create -f ./service_d/k8s_deployment.yaml

.PHONY: front_envoy service_a service_b service_c service_d