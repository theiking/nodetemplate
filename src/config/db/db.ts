import * as mongoose from "mongoose";

export const connect = mongoose.connect('mongodb+srv://foodapp:823082@cluster0.onxxk.mongodb.net/foodapp?retryWrites=true&w=majority',{ 
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

