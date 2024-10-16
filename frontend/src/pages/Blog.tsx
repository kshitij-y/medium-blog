import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import axios, { AxiosResponse } from 'axios';

export const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<any>(null);
    const backend_api = import.meta.env.VITE_API;

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res: AxiosResponse<any> = await axios.get(`${backend_api}/api/v1/blog/single/${id}`, {withCredentials: true});
                setBlog(res.data);  // Set the blog data in state
                console.log(res);
            } catch (error) {
                console.error("Error fetching the blog:", error);
            }
        };
        
        fetchBlog();
    }, [id, backend_api]);

    return (
        <div className="w-full bg-[#DCD7C9] min-h-screen">
            <Appbar />
            <div className="max-w-4xl mx-auto px-12 bg-[#DCD7C9] h-full min-h-sreen py-10">
                {blog ? (
                    <div className="bg-[#DCD7C9]">
                        <h1 className="text-4xl font-bold text-gray-800 py-4 bg-[#DCD7C9]">{blog.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} className="text-xl bg-[#DCD7C9]"/>
                    </div>
                ) : (
                    <p>Loading blog...</p>
                )}  
            </div>
        </div>
    );
    
};
