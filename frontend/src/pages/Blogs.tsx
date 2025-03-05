import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"


export const Blogs=()=>{
    return <div>
    <AppBar/>
    
    <div className="flex justify-center">
        <div className="max-w-xl">
            <BlogCard authorName={"Kushal"} 
                    title={"title of the blog"} 
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                    publishedDate={"2nd Feb 2024"}
            />
            <BlogCard authorName={"Kushal"} 
                    title={"title of the blog"} 
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                    publishedDate={"2nd Feb 2024"}
            />
            <BlogCard authorName={"Kushal"} 
                    title={"title of the blog"} 
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                    publishedDate={"2nd Feb 2024"}
            />
            
        </div>
    </div>
    </div>
}