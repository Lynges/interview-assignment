.PHONY : all

run:
	FLASK_ENV=development FLASK_APP=src/app.py flask run
