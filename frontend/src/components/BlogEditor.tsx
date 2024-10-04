import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const BlogEditor: React.FC = () => {
    // Define the type for the editorHtml state
    const [editorHtml, setEditorHtml] = useState<string>('');
    const [title, setTitle] = useState("");

    // Function to handle changes in the editor
    const handleChange = (html: string) => {
        setEditorHtml(html);
    };

    const handleSubmit = () => {
        
        console.log(editorHtml);
        
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
            <div className='mt-16 justify-center flex'>
                    <button className=" bg-[#2C3639] text-white py-2 px-8 px-auto rounded-3xl font-bold hover:bg-[#3F4E4F]" onClick={handleSubmit}>
                        Submit
                    </button>
            </div>
        </div>
    );
};