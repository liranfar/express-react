#!/bin/bash
let services = ["server","mongo","client"]
# for a in $@ ; do
#       if [[ a == "build"]]:

#       fi
#     done
#     echo

docker-compose -f docker-compose.yml up -d --build server

docker-compose -f docker-compose.yml up -d --build mongo

# docker-compose -f docker-compose.yml up -d --build client

# docker-compose logs --follow  server

# docker exec -it mongo bash

# docker-compose -f docker-compose.yml restart server