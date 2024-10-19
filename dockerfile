# Use an official nginx image
FROM nginx:alpine

# Copy HTML files to the nginx directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
