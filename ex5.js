var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var firstName = process.argv[2]
var lastName = process.argv[3]

MongoClient.connect(url, function(err,db){
        if (err) throw err
        var collection = db.collection('docs')
        collection.insert({
            firstName: process.argv[2]
            , lastName: process.argv[3]
            }, function(err, data) {
                if (err) throw err
//                console.log(JSON.stringify(data, null, 4))
                console.log(JSON.stringify(data.ops[0]))
                db.close()
                })
        })
