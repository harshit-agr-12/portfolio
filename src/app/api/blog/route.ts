import Blog , {BlogType} from "@/models/Blog";
import { NextRequest  , NextResponse} from "next/server";
import { dbConnect } from "@/lib/mongodb";

export function GET(req : NextRequest){
    return NextResponse.json({message : "Hello from Blog API GET route"});
}

export async function POST(req : NextRequest){
    dbConnect();
    const body = await req.json();
    const {title , content , author }= body;
    console.log(body);
    try{
        const blog = await Blog.create({
            author,
            title,
            content, 
        })
    
        if(blog){
            return NextResponse.json({
                message : "blog is created",
            })
        }
    }
    catch(error){
        console.log("Error while blog creation",error);
        NextResponse.json({message : error});
    }


    return NextResponse.json({message : "blog content is not available"});
}

export async function PUT():Promise<void>{
    
}
