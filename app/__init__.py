from flask import Flask
from flask import request
from pymongo import MongoClient

# Connection to Mongo DB
try:
	client=MongoClient()
	db = client.teledb
	details = db.teleDetails
	print "Connected successfully!!!"
except pymongo.errors.ConnectionFailure, e:
	print "Could not connect to MongoDB: %s" % e

app = Flask(__name__)

@app.route("/test")
def test():
	return "connection successful!"

@app.route('/getHistory')
def data():
	user = request.args.get('user')
	return "get"

@app.route('/getOffers')
def data():
	user = request.args.get('user')
	return "get"

app.run()
