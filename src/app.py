from flask import Flask, render_template

from blueprints.products.products import ProductAPI, products
from models import Product, Category

app = Flask(__name__)

app.register_blueprint(products)

product_view = ProductAPI.as_view('product_view')


app.add_url_rule('/api/products/', defaults={'product_ids': None},
                 view_func=product_view, methods=['GET', ])
app.add_url_rule('/api/products/<string:product_ids>',
                 view_func=product_view, methods=['GET', ])
