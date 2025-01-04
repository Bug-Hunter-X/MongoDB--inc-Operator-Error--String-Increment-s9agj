```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("6518d1a76518d1a76518d1a7")}, {"$inc": {"counter": 1}});
```