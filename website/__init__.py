from flask import Flask
from os import path


def create_app():
    application = Flask(__name__)
    from .views import views
    application.register_blueprint(views, url_prefix='/')
    return application
