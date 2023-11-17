// here we just store the data but we actually insert it using default.js

import mongoose from "mongoose";

export const Connection = async() => {
    const URL = 'mongodb://samarthhapse97:samarthhapse97@ac-jlq6j7z-shard-00-00.rqwoy0o.mongodb.net:27017,ac-jlq6j7z-shard-00-01.rqwoy0o.mongodb.net:27017,ac-jlq6j7z-shard-00-02.rqwoy0o.mongodb.net:27017/?ssl=true&replicaSet=atlas-iym0wj-shard-0&authSource=admin&retryWrites=true&w=majority'
    // not used username and password passed from index.js, auhentication error
    try{
        // connect is function in mongoose used to connect with mongoDB
        // functon accepte 2 things
        // 1.URL
        // 2.object
        //   here we can pass some values 
        //   eg. useUnifiedTopology={true} => mongoDB uses a monitoring engine internally
        await mongoose.connect(URL,{ useUnifiedTopology:true , useNewUrlParser:true });
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error while connecting with DB",error.message);
    }
}
export default Connection;