from unicodedata import category
from flask import Blueprint, render_template, request, flash, jsonify, redirect, url_for


views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def main():
    return render_template("home.html")

@views.route('/en', methods=['GET', 'POST'])
def en():
    return render_template("en.html")

@views.route('/jp', methods=['GET', 'POST'])
def jp():
    return render_template("jp.html")

