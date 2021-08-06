all:
	@echo 'Usage: make [check|build|run]'

check:
	npm audit --production
	# CI=true npm test -- --coverage

build: check
	docker build -t dashboard:latest .

run: build
	docker run -d --rm -p 3000:80 dashboard:latest
