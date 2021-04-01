const {Schema, model}= require('mongoose')

const userSchema = new Schema({
    
    firstName:{ type:String, required:true},

    lastName:{ type:String},

    userName:{ type:String, required:true},

    email:{ type:String, required:true, unique:true},

    phone:{ type:String},

    password:{ type:String},

    date: { type: Date, default: Date.now },//yyyy-mm-dd

})

const User = model('User',userSchema)

module.exports = User