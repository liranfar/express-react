FROM nginx:1.13.8

RUN rm /etc/nginx/conf.d/default.conf
COPY /dev.conf /etc/nginx/conf.d

## PRODUCTION CONFIG - after running deploy.sh
# COPY /prod.conf /etc/nginx/conf.d
# COPY static /srv/www/static/
