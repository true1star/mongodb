var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db){
        if (err) throw err
        var collection = db.collection('prices')
        collection.aggregate([
                 { $match : { size: process.argv[2] }}
               , { $group: {
                   _id: 'avgPrice'
                  , average: {
                    $avg: '$price'
                   }
                 }}
               ]).toArray(function(err, results) {
                   if (err) throw err
                   if (!results.length) throw new Error('No results found')
                   results = results[0].average.toFixed(2)
                   console.log(results)
                   db.close()
                   })
        })
