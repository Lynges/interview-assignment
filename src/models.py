from peewee import (
    SqliteDatabase,
    Model,
    CharField,
    DateField,
    IntegerField,
    DecimalField,
    ForeignKeyField,
    TextField,
)

from config import DB_FILENAME

db = SqliteDatabase(DB_FILENAME)


class BaseModel(Model):
    class Meta:
        database = db


class Category(BaseModel):
    name = CharField(max_length=80)


class Product(BaseModel):
    name = CharField(max_length=80)
    price = DecimalField(decimal_places=2)
    description = TextField()
    category = ForeignKeyField(Category)
    image_url = CharField(max_length=512)
    stock_count = IntegerField()
    expected_restocking = DateField()
