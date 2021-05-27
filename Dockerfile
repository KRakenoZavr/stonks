FROM golang:1.14.6
WORKDIR /usr/src/app
COPY . .

EXPOSE 3030
CMD ["make","all"]
