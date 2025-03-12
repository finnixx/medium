import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog =({blog}:{blog:Blog})=>{

    return <div>
        <AppBar/>
        <div className="justify-center flex">
            <div className="grid grid-cols-2 px-10 w-full pt-200 max-h-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabond">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2 ">
                        Post on 2nd Dec
                    </div>
                    <div className="pt-2">
                        {blog.content}
                    </div>

                </div>
                <div className="grid-cols-4">
                    <div className="flex w-full">
                        <div className="text-slate-6 00 text-lg">
                            Author
                        </div>
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.authorName||"Anonymous"}/>
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.authorName||"Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-200">
                                Random catch phrase about author's abilityRandom catch phrase about author's abilityRandom catch phrase about author's abilityRandom catch phrase about author's ability
                            </div>
                        </div>
                    </div>
                    {blog.authorName||"Anonymous"}
                </div>
                <div className="">
                    Random catch phrase about author's ability
                </div>
            </div>
        </div>
    </div>
}