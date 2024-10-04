import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile.svg';
import followers from '../assets/followers.svg';
import setting from '../assets/setting.svg';
import signout from '../assets/signout.svg';

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
        <div className="flex flex-col text-white h-screen sticky top-0 w-full px-2" style={{ backgroundColor: '#3F4E4F' }}>
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
                    <img src={profile} className='w-[25px] h-[25px]'/>

                    <div className='pb-1 px-2'>Profile</div>
                </div>
                <div className="cursor-pointer flex p-2">
                    <img src={followers} className='w-[22px] h-[22px]'/>
                    <div className='pb-1 px-2 pt-[2px]'>followers</div>
                    
                </div>
                <div className="cursor-pointer flex p-2">
                    <img src={followers} className='w-[22px] h-[22px]'/>
                    <div className='pb-1 px-2 pt-[2px]'>followings</div>
                </div>
                <div className="cursor-pointer flex p-2">
                    <img src={setting} className='w-[22px] h-[22px]'/>
                    <div className='pb-1 px-2 pt-[1px]'>Setting</div>
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
            <div className="cursor-pointer flex border-b border-b-gray-200 p-4" >
                <div className="cursor-pointer flex p-2" onClick={handleLogOut}>
                    <img src={signout} />
                </div>
                <div className="pt-[6px] px-1" onClick={handleLogOut}>
                    Sign Out
                </div>
            </div>
        </div>
    );
}