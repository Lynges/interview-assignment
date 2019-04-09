from flask.views import MethodView
from flask import jsonify, render_template, Blueprint

from models import Product, Category

PRODUCT_LIMIT = 4 * 4

products = Blueprint('products', __name__, template_folder='templates')


class ProductAPI(MethodView):

    def get(self, product_ids):
        ids = []
        for product_id in product_ids.split(','):
            ids.append(int(product_id))

        print(product_ids)
        if product_ids:
            products = list((Product.select().where(
                Product.id.in_(ids)).dicts()))
        else:
            products = list((Product.select().dicts()))
        return jsonify(products)

    def post(self):
        pass


@products.route('/', defaults={'cat': 'all', 'page': 1})
@products.route('/kategori/<string:cat>/', defaults={'page': 1})
@products.route('/kategori/<string:cat>/<int:page>')
def show_products(cat, page):
    categories = Category.select().execute()
    products_query = Product.select()
    if cat != 'all':
        current_cat = Category.select().where(Category.name == cat).get()
        products_query = products_query.where(
            Product.category == current_cat.id)

    products = products_query.order_by(Product.id).offset(
        PRODUCT_LIMIT * (page-1)
    ).limit(PRODUCT_LIMIT + 1).execute()

    # set the page buttons
    prevpage = None
    nextpage = None
    if len(products) > PRODUCT_LIMIT:
        nextpage = page + 1
    if page > 1:
        prevpage = page - 1

    products = products[:-1]
    return render_template(
        'products/productlist.html',
        products=products,
        categories=categories,
        current_cat=cat,
        page=page,
        prevpage=prevpage,
        nextpage=nextpage,
    )


@products.route('/<int:product_id>')
def single_product(product_id):
    product = Product.select().where(Product.id == product_id).get()
    return render_template('products/single_product.html', product=product)
