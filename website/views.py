from unicodedata import category
from flask import Blueprint, render_template, request, flash, jsonify, redirect, url_for
import json
import time


views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def main():
    return render_template("en.html")


# @views.route('/home', methods=['GET', 'POST'])
# def home():
#     time.sleep(0.1)
#     return render_template("en.html")

