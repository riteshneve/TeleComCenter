from pymongo import MongoClient
client = MongoClient
db = client.teledb
details = db.teleDetails
