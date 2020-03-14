all: install

install: check
	python3 -m venv .venv
	.venv/bin/pip install --upgrade pip
	.venv/bin/pip install -r requirements.txt
	@echo "\033[32mInstall is successful\033[0m"
	@echo "Usage: .venv/bin/python app.py"

check:
	@echo "pass"

test:
	@echo "pass"

clean:
	@echo "\033[33mClean this project\033[0m"
	find . | grep -E "(__pycache__|\.pyc|\.pyo$$)" | xargs rm -rf
