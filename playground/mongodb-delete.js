// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID}=require('mongodb')
let obj=new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
       return console.log('Unable to connect MongoDb server')
    }
    console.log('Connected to MongoDb server')
    const db=client.db('TodoApp')

    //deleteMany
    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
        console.log(result)
    })

    //deletOne
    db.collection('Todos').deleteOne({text:'eat dinner'}).then((result)=>{
        console.log(result)
    })

    //findOneanddelete
    db.collection('Todos').findOneAndDelete({text:'walk the dog'}).then((result)=>{
        console.log(result)
    })


  
})