FROM nginx:stable

COPY ./dist/ /usr/share/nginx/html

COPY conf/* /etc/nginx/conf.d/

COPY ./public /usr/share/nginx/html/public

CMD nginx -g 'daemon off;'
