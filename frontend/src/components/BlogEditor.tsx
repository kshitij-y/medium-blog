import React, { useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.css';

export const BlogEditor: React.FC = () => {
    const navigate = useNavigate();
    const [editorHtml, setEditorHtml] = useState<string>('');
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleModelChange = (html: string) => {
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
            },{withCredentials: true});
    
            setMessage(res.data.message);
            if (res.status === 200) {
                navigate(`/blog/${res.data.id}`);
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
            <FroalaEditor
    model={editorHtml}
    onModelChange={handleModelChange}
    config={{
        placeholderText: 'Write your blog content here...',
        charCounterCount: true,
        heightMin: 300,
        toolbarButtons: [
            'bold', 'italic', 'underline', 'strikeThrough', '|',
            'paragraphFormat', 'align', 'formatOL', 'formatUL', '|',
            'insertLink', 'insertImage', '|',
            'fontFamily', 'fontSize', 'textColor', 'backgroundColor', '|',
            'insertTable', 'emoticons', 'specialCharacters', '|',
            'undo', 'redo', 'html'
        ],
        fontFamily: {
            "Arial,Helvetica,sans-serif": 'Arial',
            "Georgia,serif": 'Georgia',
            "Impact,Charcoal,sans-serif": 'Impact',
            "'Times New Roman',Times,serif": 'Times New Roman',
            "'Courier New',Courier,monospace": 'Courier New'
        },
        fontSize: ['8', '10', '12', '14', '18', '22', '24', '30', '36', '48', '60', '72'],
        colorsBackground: ['#61bd6d', '#1abc9c', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c'],
        colorsText: ['#61bd6d', '#1abc9c', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c'],
        imageUpload: true, // Allows image uploads
        imageUploadURL: `${import.meta.env.VITE_API}/upload_image`, // Backend API to handle the image upload
        // Other optional configurations for toolbar and plugins
    }}
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
