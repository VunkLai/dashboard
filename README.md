Dashboard
=========

Requirements
------------
System requires the following:
- Python 3.7 or later
- pip
- MySQL 8.0+ or MariaDB 10.1+

You may need to install the Python and MySQL development headers and libraries like so:
- Debian / Ubuntu
    - `sudo apt-get install python3-dev default-libmysqlclient-dev`
- Red Hat / CentOS
    - `sudo yum install python3-devel mysql-devel`
- MacOS (Homebrew)
    - `brew install mysql-client`

The following packages are __required__:
- Django 3.0+
- Django REST Framework

The following packages are __optional__:
- TBD.

Installation
------------
Clone this project from GitHub and install using `pip`.

It's recommended to use a virtual environment manager: venv for Python3.
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Quickstart
----------
This is the fastest way to get up and running.
```bash
make install
```

Development
-----------
For development, you may install following packages for help.
- ipython


Test
----
To run the tests, clone the repository, and then:
```
make test
```
