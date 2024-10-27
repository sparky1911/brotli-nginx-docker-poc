FROM michaelknightdriver/docker-nginx-brotli

# Copy the custom nginx.conf file to the container
COPY nginx/nginx.conf /etc/nginx/nginx.conf
