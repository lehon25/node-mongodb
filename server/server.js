let mongoose = require('mongoose')


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

// let Todo = mongoose.model('Todo', {
//     text:{
//         type:String,
//         required: true,
//         minlength: 1,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:fallse
//     },
//     completedAt:{
//         type:Number,
//         default:null
//     }
// })


    // let otherTodo=new Todo({
    //     text:' Edit this video '
    // })

    // otherTodo.save().then((doc)=>{
    //     console.log(JSON.stringify(doc,undefined, 2))
    // }, (e)=>{
    //     console.log('Unable to save', e)
    // })

    let User=mongoose.model('User',{
        email:{
            type:String,
            required:true,
            trim: true,
            minlength:1
        }
    })

    let user=new User({
        email:'lehon_25@yahoo.com'
    })
    user.save().then((doc)=>{
        console.log('User saved',doc)
    },(e)=>{
        console.log('Unable to save User',e)
    })