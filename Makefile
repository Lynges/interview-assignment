.PHONY : all

run:
	python src/dbsetup.py
	FLASK_ENV=development FLASK_APP=src/app.py flask run
