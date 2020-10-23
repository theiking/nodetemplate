import * as mongoose from "mongoose";

export const connect = mongoose.connect('mongodb://localhost:27017/elearning',{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    ,(err: any)=>{
    if(err){
        console.log("Opps");
    } else {
        console.log("Mongo connected....");
    }
});

