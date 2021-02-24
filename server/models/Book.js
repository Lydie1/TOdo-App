import validator from "validator";
import mongoose from "mongoose";

    const bookSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true
    },
    
    Description:{
        type:String,
        required:true,
       
    },
    Priority:{
        type: String,
        required:true
    },
    CreateDate:{
        type: String,
        required:false
    },
    ModifiedDate: {
        type: String,
        required:false
    }

})


const Book = mongoose.model("Book", bookSchema);
export default Book;