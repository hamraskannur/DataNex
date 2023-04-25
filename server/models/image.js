const mongoose = require('mongoose')    


const Schma=mongoose.Schema


const image = new Schma({
    image:{
        type:"string"
    }

})

module.exports=mongoose.model("images",image)