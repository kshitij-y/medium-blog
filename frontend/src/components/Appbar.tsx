import { useNavigate } from "react-router-dom";
import { Search } from "./Search"
import medium from '../assets/logo.svg';
import write from '../assets/write.svg';
import threeLine from '../assets/threeLine.svg'
interface props {
    toggleSidePlate: () => void
}
export const Appbar = ({ toggleSidePlate }: props) => {
    const name = localStorage.getItem("name") || "User";
    const fChar = name[0];
    const navigate = useNavigate();

    const WriteBlogs = () => {
        navigate("/blogs/WriteBlogs")
    }

    return (
        <div className="border-b border-black w-full py-2 justify-between flex flex-row px-10 bg-white" style={{ backgroundColor: '#DCD7C9' }}>
            <div className="flex flex-row w-[50%]">
                <div className="pt-1">
                    <img src={medium} />
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
    
                <div className="lg:hidden ml-4 cursor-pointer" onClick={toggleSidePlate}>
                    <img src={threeLine} />
                </div>

            </div>
        </div>
    );
}