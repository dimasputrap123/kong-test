.PHONY : build run-docker clean

build:
	docker build -t product-service-kong .

run-docker:
	docker run -d --rm --name product-service-kong \
	--network=docker-kong-js-pdk-main_default \
	-p 8004:8004 \
	product-service-kong

clean:
	docker rmi -f product-service-kong