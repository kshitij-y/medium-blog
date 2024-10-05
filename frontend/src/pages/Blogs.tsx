import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard"
import { SidePlate } from "../components/SidePlate";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios';


export const Blogs = () => {
    const [blogs, setBlogs] = useState<any[]>([]);
    const backend_api = import.meta.env.VITE_API;

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res: AxiosResponse<any> = await axios.get(`${backend_api}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setBlogs(res.data.blog);
                console.log(res.data.blog);
            } catch (error) {
                console.error("Error fetching the blog:", error);
            }
        };
        
        fetchBlog();
    },[]);

    return (
        <div className="flex flex-col w-[99vw] bg-[#DCD7C9]" >
          {/* Appbar with toggleSidePlate */}
          <div className="w-full">
            <Appbar />
          </div>
    
          {/* Main content and SidePlate */}
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center w-full lg:w-[82%] px-12">
              {blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  authorName={blog.authorId}
                  title={blog.title}
                  content={blog.content}
                  publishDate={blog.publishDate}
                  likes={blog.likes}
                  diskes={blog.diskes}
                  saves={blog.saves}
                />
              ))}
            </div>
    
            <div className="hidden lg:flex flex justify-center relative w-[18%]">
              <SidePlate />
            </div>
    
          </div>
        </div>
    );
    
    
    
    
}
