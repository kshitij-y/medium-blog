import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile.svg';
import followers from '../assets/followers.svg';
import setting from '../assets/setting.svg';
import signout from '../assets/signout.svg';
import Cookies from 'js-cookie';

export const SidePlate = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        Cookies.remove("name");
        Cookies.remove("token");
        navigate('/');

    }
    
    return (
        <div className="flex flex-col text-white h-screen sticky top-0 w-full px-2" style={{ backgroundColor: '#3F4E4F' }}>

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