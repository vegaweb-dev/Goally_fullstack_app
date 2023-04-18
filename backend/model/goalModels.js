const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text:{
        type:String,
        required:[true,'Please enter value']
    }},
    {
        timestamps:true
    }
    
)

module.exports=mongoose.model('goalModel',goalSchema)