import { useNavigate } from 'react-router-dom';

interface props {
    toggleSidePlate: () => void
} 
export const SidePlate = ({ toggleSidePlate }: props) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        navigate('/');

    }
    
    return (
        <div className="flex flex-col h-screen sticky top-0 w-full px-2" style={{ backgroundColor: '#8AAAE5' }}>
            {/*Three lines for hidding the side button*/}
            <div className="lg:hidden cursor-pointer pl-48 py-2 border-b border-b-white" onClick={toggleSidePlate}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
            </div>

            <div className='p-4 border-b border-b-white-100'>
                <div className="cursor-pointer flex p-2">
                    Recommended topics

                </div>
            </div>

            {/*Section 1*/}
            <div className='p-4 border-b border-b-white-100'>
                <div className="cursor-pointer flex p-2">
                    profile
                </div>
                <div className="cursor-pointer flex p-2">
                    followers
                </div>
                <div className="cursor-pointer flex p-2">
                    followings
                </div>
                <div className="cursor-pointer flex p-2">
                    Setting
                </div>
            </div>

            {/*Section 2*/}
            <div className='p-4 border-b border-b-blue-200'>
                <div className="cursor-pointer flex p-2">
                    Reading lists
                </div>
                <div className="cursor-pointer flex p-2">
                    Library
                </div>
                
            </div>
            

            {/*Bottom most*/}
            <div className="cursor-pointer flex border-b border-b-gray-200" >
                <div className="mx-4 py-2" onClick={handleLogOut}>
                    Sign Out
                </div>
                <div className="py-2" onClick={handleLogOut}>
                    <svg fill="black" height="20px" width="20px" version="1.1"  id="Capa_1"  xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.971 384.971" ><g><g id="Sign_Out"><path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"/><path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/></g></g> </svg>
                </div>
            </div>
        </div>
    );
}