const mongoose = require('mongoose')



function RunServer() {
    try{
        mongoose.connect(process.env.MONGO_URL) //in mongoDB atlas you will get connect link
    console.log('mongoDB connected😎')
    }catch (error) {
        console.log("not connected😒")

    }
}
module.exports = RunServer;