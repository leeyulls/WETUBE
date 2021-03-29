import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type : String,
        require : "Text is required"
    },
    createdAt: {
        type : Date,
        default : Date.now
    }
    //video: {
    //    type : mongoose.Schema.Types.ObjectId,
    //    ref : "Vedeo"
   // }
});

const comment = mongoose.model("Comment",CommentSchema);

export default comment;