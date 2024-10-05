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
                const res: AxiosResponse<any> = await axios.get(`${backend_api}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setBlog(res.data);  // Set the blog data in state
            } catch (error) {
                console.error("Error fetching the blog:", error);
            }
        };
        
        fetchBlog();
    }, [id, backend_api]);

    return (
        <div className="w-full bg-[#DCD7C9]">
            <Appbar toggleSidePlate={() => {}}/>
            <div className="max-w-4xl mx-auto px-12 bg-[#DCD7C9]">
                {blog ? (
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 py-4">{blog.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} className="text-xl"/>
                    </div>
                ) : (
                    <p>Loading blog...</p>
                )}
            </div>
        </div>
    );
};
