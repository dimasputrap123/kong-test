.PHONY : build run-docker clean

build:
	docker build -t employee-service-kong .

run-docker:
	docker run -d --rm --name employee-service-kong \
	--network=docker-kong-js-pdk-main_default \
	-p 8003:8003 \
	employee-service-kong

clean:
	docker rmi -f employee-service-kong