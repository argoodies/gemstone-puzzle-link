# 静态托管营销/隐私/支持主页（中英日）。
FROM nginx:1.27-alpine
COPY public/ /usr/share/nginx/html/
EXPOSE 80
