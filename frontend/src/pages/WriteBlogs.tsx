import { useNavigate } from "react-router-dom";
import React from 'react';
import { BlogEditor } from '../components/BlogEditor';
import medium from '../assets/logo.svg';
import threeLine from '../assets/threeLine.svg'
import { SidePlate } from "../components/SidePlate";
import { useState } from "react";
import Cookies from 'js-cookie';

export const WriteBlogs: React.FC = () => {
    const navigate = useNavigate();
    const name = Cookies.get("name") || "User";
    const fChar = name[0].toUpperCase();
    const [toggleSide, setToogleside] = useState(false)
    const handleSide = () => {
        setToogleside(!toggleSide)
    };
    function SideBar() {
        if(!toggleSide) return null;
        return (
            <div className="fixed top-[60px] right-0 z-50 bg-black bg-opacity-50 flex justify-center items-center w-[250px] ">
                <SidePlate />
            </div>

        )
    }

    return (
        <div style={{ backgroundColor: '#DCD7C9' }} className='h-screen'>
            <div className="border-b border-black w-full py-2 justify-between flex flex-row px-10 bg-[#DCD7C9]" >
                <div className="flex flex-row w-[50%]">
                    <div className="pt-1">
                        <img src={medium} onClick={()=>{navigate('/blogs')}}/>
                    </div>
                </div>
        
                <div className="flex flex-row justify-center items-center">
                    <div className="mx-4 border rounded-full w-8 h-8 flex items-center justify-center text-center bg-red-400 text-white">
                    {fChar}
                    </div>
        
                    <div className=" ml-4 cursor-pointer" >
                        <img src={threeLine} onClick={handleSide}/>
                    </div>

                </div>
                

            </div>
            <div className="">
                    <SideBar />
                </div>

            <div>
                <BlogEditor />
            </div>
        </div>
    );
};
