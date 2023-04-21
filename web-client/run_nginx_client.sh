docker run --name nginx-web-client \
  -v "C:/Users/Vitok/IdeaProjects/MyMicroserviceApp/web-client/build/":/usr/share/nginx/html:ro \
	-v "C:/Users/Vitok/IdeaProjects/MyMicroserviceApp/web-client/conf/nginx.conf":/etc/nginx/nginx.conf:ro \
	-P -d -p 3000:80 nginx:1.14.2
