import { BACKEND_URL } from "../config";
import { useState,useEffect } from "react";
import axios from "axios";

export interface Blog {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization:localStorage.getItem('token')
            }
        }).then(response =>{
            setBlogs(response.data.blogs as Blog[]);
            setLoading(false);
        }).catch(() => setLoading(false));
    },[])
    return {
        loading,
        blogs
    }

}

export const useBlog = ({id}:{id:string})=>{
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization:localStorage.getItem('token')
            }
        }).then(response =>{
            setBlog(response.data.blog as Blog);
            setLoading(false);
        }).catch(() => setLoading(false));
    },[id])
    return {
        loading,
        blog
    }}