import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from "react-router-dom";

export const BlogEditor: React.FC = () => {
    const navigate = useNavigate();
    const [editorHtml, setEditorHtml] = useState<string>('');
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (html: string) => {
        setEditorHtml(html);
    };

    const handleSubmit = async () => {
        const backend_api = import.meta.env.VITE_API;
        
        try {
            const res: AxiosResponse<{
                message: string
                id: string
            }> = await axios.post(`${backend_api}/api/v1/blog`, {
                title: title,
                content: editorHtml
            },{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
    
            setMessage(res.data.message);
            if (res.status === 200) {
                navigate(`/blog/single/${res.data.id}`);
            }
        } catch (error) {
            //@ts-ignore
            setMessage(error.response?.data?.message || "An error occurred while submitting the blog.");
        }
    };
    

    return (
        <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg mt-4" >
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Write Your Blog</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                className="w-full p-3 border border-gray-300 rounded mb-4 text-gray-800"
            />
            <ReactQuill 
                value={editorHtml} 
                onChange={handleChange} 
                modules={{
                    toolbar: [
                        [{ 'header': [1, 2, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        ['link', 'image'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['clean'], // remove formatting button
                    ],
                }} 
                placeholder="Write your blog content here..."
                className="h-96" // Set height for the editor
            />
            <div className='mt-16 justify-center flex flex-col'>
                    <button className=" bg-[#2C3639] text-white py-2 px-8 px-auto rounded-3xl font-bold hover:bg-[#3F4E4F]" onClick={handleSubmit}>
                        Submit
                    </button>
                    {message && <p className="text-red-500 flex flex-row mx-24 justify-center items-center">{message}</p>}
            </div>
        </div>
    );
};