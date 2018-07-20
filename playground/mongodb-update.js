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

    db.collection('Todos').findOneAndUpdate({
        _id:new ObjectID('5b51d564cc7e8636f3e7acf0')
    },{
        //	Sets the value 
        $set:{
            text : 'hanya sesaaat'
        },
        // Increments the value 
        $inc: {
            age:1
        }
    },{
        returnOriginal:true
    }).then((result)=>{
        console.log(result)
    })


  
})