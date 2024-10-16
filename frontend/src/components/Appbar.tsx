import { useNavigate } from "react-router-dom";
import { Search } from "./Search"
import medium from '../assets/logo.svg';
import write from '../assets/write.svg';
import threeLine from '../assets/threeLine.svg'
import { SidePlate } from "./SidePlate";
import { useState } from "react";
import Cookies from 'js-cookie';

export const Appbar = () => {
    const name = Cookies.get("name")?.toUpperCase() || "User";
    const fChar = name[0];
    const navigate = useNavigate();
    const [toggleSide, setToogleside] = useState(false)
    const WriteBlogs = () => {
        navigate("/blogs/WriteBlogs")
    }
    const handleSide = () => {
        setToogleside(!toggleSide)
    };
    function SideBar() {
        if(!toggleSide) return null;
        return (
            <div className="fixed top-[60px] right-0 z-50 bg-black bg-opacity-50 flex justify-center items-center w-[250px] lg:hidden">
                <SidePlate />
            </div>

        )
    }

    return (
        <>
            <div className="border-b border-black w-full py-2 justify-between flex flex-row px-10" style={{ backgroundColor: '#DCD7C9' }}>
                <div className="flex flex-row w-[50%]">
                    <div className="pt-1">
                        <img src={medium} onClick={() => {navigate('/blogs')}}/>
                    </div>
                    <div className="w-full">
                        <Search />
                    </div>
                </div>
        
                <div className="flex flex-row justify-center items-center">

                    <div className="cursor-pointer">
                        <img src={write} />
                    </div>

                    <div className="mx-1 cursor-pointer text-gray-800" onClick={WriteBlogs}>
                        Write
                    </div>
        
                    <div className="mx-4 border rounded-full w-8 h-8 flex items-center justify-center text-center bg-red-400 text-white">
                    {fChar}
                    </div>
        
                    <div className="lg:hidden ml-4 cursor-pointer" >
                        <img src={threeLine} onClick={handleSide}/>
                    </div>

                </div>

            </div>
            <div className="">
                <SideBar />
            </div>
        </>
    );
}