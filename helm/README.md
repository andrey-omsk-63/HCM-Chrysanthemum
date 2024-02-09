- if [ -z "$DOTENV_DEV" ]; then echo "DOTENV_DEV var EMPTY" ; else cp $DOTENV_DEV envfile.env ; fi
kubectl create configmap hcm-frontend-env-configmap --from-env-file=envfile.env -n default
helm upgrade -n default --install hcm-frontend . --set envFrom=envfile.env
