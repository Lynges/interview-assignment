import os
import json

import requests
import unidecode
from peewee import chunked

from config import DB_FILENAME
from models import db, Category, Product

MOCKDATA_FILENAME = 'mockproducts.json'


def get_mockdata():
    # see if mock data file is present, if not get it.
    if not os.path.isfile(MOCKDATA_FILENAME):
        print('Fetching mock data. Please wait.')
        r = requests.get(
            'https://api.mockaroo.com/api/605bede0?count=1000&key=8dea9550')
        if not r.status_code == 200:
            print(
                '''failed to retrieve mock data,
                this was the repsonse given: {0}'''.format(r))
            return False

        print('Create file for mock data')
        with open(MOCKDATA_FILENAME, 'w') as mdf:
            mdf.write(r.text)

        return r.json()
    else:
        with open(MOCKDATA_FILENAME, 'r') as rfile:
            return json.loads(rfile.read())


def create_categories(data):
    category_names = []
    for product in data:
        category_names.append(product['category'])
    category_names = set(category_names)

    categories = []

    for category_name in category_names:
        categories.append({'name': category_name})
    with db.atomic():
        for batch in chunked(categories, 100):
            Category.insert_many(batch).execute()

    result = {}
    for cat in Category.select():
        result[cat.name] = cat.id
    return result


if not os.path.isfile(DB_FILENAME):
    db.connect()
    db.create_tables([Category, Product])

    mockdata = get_mockdata()

    categories = create_categories(mockdata)

    raw_products = []

    for product in mockdata:
        raw_products.append({
            'name': product['name'],
            'price': product['price'],
            "description": product['description'],
            "category": categories[product['category']],
            "image_url":
                'https://dummyimage.com/260x100/ccc/000&text={:.7}'.format(
                    unidecode.unidecode(product['name'])),
            "stock_count": product['stockcount'],
            "expected_restocking": product['expectedstocking'],
        })
    with db.atomic():
        for batch in chunked(raw_products, 100):
            Product.insert_many(batch).execute()

    print('Inserted {0} products. Closing db.'.format(len(raw_products)))
    db.close()
else:
    print('db file already exists, no work done.')
