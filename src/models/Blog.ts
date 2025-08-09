import mongoose , {Schema , model} from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author : {
        type: String,
        required: true,
    },
    date :{ 
        type : Date,
        default : Date.now,
    },
    bannerImg : {
        type : String,
    },
    authorImg :{
        type : String,
    },
    ReadTime : {
        type : String,
    }
},{timestamps : true});

const Blog = model('Blog', blogSchema);
export default Blog;
export type BlogType = {
    title: string;
    content: string;
    author : string;
    date : Date;
    bannerImg : string;
    authorImg ?: string;
    ReadTime : string;
}