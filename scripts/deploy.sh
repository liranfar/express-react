cd ../services/client

echo "building client side code..."
npm run build

echo "copying output to nginx static directory..."
cp -rf . ../nginx

echo "running docker services..." # TODO: create docker-compose file for production
cd ../..
docker-compose -f docker-compose-prod.yml up -d --build



