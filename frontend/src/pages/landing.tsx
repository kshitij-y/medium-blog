import { useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

export const Landing = () => {
    const [isLoginOpen, setLogin] = useState(false);
    const openLogin = () => {setLogin(true);}
    const closeLogin = () => {setLogin(false);}

    const[isSignUpOpen, setSignUp] = useState(false);
    const openSignup = () => {setSignUp(true);}
    const closeSignUp = () => {setSignUp(false);}

    const navToSignin = () => {
        setSignUp(false);
        setLogin(true);
    }

    const navToSigup = () => {
        setLogin(false);
        setSignUp(true);
    }

    return <div className="h-screen flex bg-pink-50 flex-col bg-[#DCD7C9]" >
        <div className="border-b border-black w-full py-2 justify-between flex flex-row px-40 bg-[#DCD7C9]" >
            <div className="pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="none" viewBox="0 0 719 160"><path fill="#242424" d="m174.104 9.734.215-.047V8.02H130.39L89.6 103.89 48.81 8.021H1.472v1.666l.212.047c8.018 1.81 12.09 4.509 12.09 14.242V137.93c0 9.734-4.087 12.433-12.106 14.243l-.212.047v1.671h32.118v-1.665l-.213-.048c-8.018-1.809-12.089-4.509-12.089-14.242V30.586l52.399 123.305h2.972l53.925-126.743V140.75c-.687 7.688-4.721 10.062-11.982 11.701l-.215.05v1.652h55.948v-1.652l-.215-.05c-7.269-1.639-11.4-4.013-12.087-11.701l-.037-116.774h.037c0-9.733 4.071-12.432 12.087-14.242m25.555 75.488c.915-20.474 8.268-35.252 20.606-35.507 3.806.063 6.998 1.312 9.479 3.714 5.272 5.118 7.751 15.812 7.368 31.793zm-.553 5.77h65.573v-.275c-.186-15.656-4.721-27.834-13.466-36.196-7.559-7.227-18.751-11.203-30.507-11.203h-.263c-6.101 0-13.584 1.48-18.909 4.16-6.061 2.807-11.407 7.003-15.855 12.511-7.161 8.874-11.499 20.866-12.554 34.343q-.05.606-.092 1.212a50 50 0 0 0-.065 1.151 85.807 85.807 0 0 0-.094 5.689c.71 30.524 17.198 54.917 46.483 54.917 25.705 0 40.675-18.791 44.407-44.013l-1.886-.664c-6.557 13.556-18.334 21.771-31.738 20.769-18.297-1.369-32.314-19.922-31.042-42.395m139.722 41.359c-2.151 5.101-6.639 7.908-12.653 7.908s-11.513-4.129-15.418-11.63c-4.197-8.053-6.405-19.436-6.405-32.92 0-28.067 8.729-46.22 22.24-46.22 5.657 0 10.111 2.807 12.236 7.704zm43.499 20.008c-8.019-1.897-12.089-4.722-12.089-14.951V1.309l-48.716 14.353v1.757l.299-.024c6.72-.543 11.278.386 13.925 2.83 2.072 1.915 3.082 4.853 3.082 8.987v18.66c-4.803-3.067-10.516-4.56-17.448-4.56-14.059 0-26.909 5.92-36.176 16.672-9.66 11.205-14.767 26.518-14.767 44.278-.003 31.72 15.612 53.039 38.851 53.039 13.595 0 24.533-7.449 29.54-20.013v16.865h43.711v-1.746zM424.1 19.819c0-9.904-7.468-17.374-17.375-17.374-9.859 0-17.573 7.632-17.573 17.374s7.721 17.374 17.573 17.374c9.907 0 17.375-7.47 17.375-17.374m11.499 132.546c-8.019-1.897-12.089-4.722-12.089-14.951h-.035V43.635l-43.714 12.551v1.705l.263.024c9.458.842 12.047 4.1 12.047 15.152v81.086h43.751v-1.746zm112.013 0c-8.018-1.897-12.089-4.722-12.089-14.951V43.635l-41.621 12.137v1.71l.246.026c7.733.813 9.967 4.257 9.967 15.36v59.279c-2.578 5.102-7.415 8.131-13.274 8.336-9.503 0-14.736-6.419-14.736-18.073V43.638l-43.714 12.55v1.703l.262.024c9.459.84 12.05 4.097 12.05 15.152v50.17a56.3 56.3 0 0 0 .91 10.444l.787 3.423c3.701 13.262 13.398 20.197 28.59 20.197 12.868 0 24.147-7.966 29.115-20.43v17.311h43.714v-1.747zm169.818 1.788v-1.749l-.213-.05c-8.7-2.006-12.089-5.789-12.089-13.49v-63.79c0-19.89-11.171-31.761-29.883-31.761-13.64 0-25.141 7.882-29.569 20.16-3.517-13.01-13.639-20.16-28.606-20.16-13.146 0-23.449 6.938-27.869 18.657V43.643L545.487 55.68v1.715l.263.024c9.345.829 12.047 4.181 12.047 14.95v81.784h40.787v-1.746l-.215-.053c-6.941-1.631-9.181-4.606-9.181-12.239V66.998c1.836-4.289 5.537-9.37 12.853-9.37 9.086 0 13.692 6.296 13.692 18.697v77.828h40.797v-1.746l-.215-.053c-6.94-1.631-9.18-4.606-9.18-12.239V75.066a42 42 0 0 0-.578-7.26c1.947-4.661 5.86-10.177 13.475-10.177 9.214 0 13.691 6.114 13.691 18.696v77.828z"></path></svg>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="cursor-pointer" onClick={openLogin}>Write</div>
                <div className="mx-6 cursor-pointer" onClick={openLogin}>Sign in</div>
                <button className="bg-[#2C3639] text-white py-2 px-4 rounded-3xl font-bold hover:bg-[#3F4E4F]" onClick={openSignup}>Get started</button>
            </div>
        </div>

        <div className="flex flex-row flex-grow border-b border-black pl-40 justify-between bg-[#DCD7C9]">
            <div className="min-w-max">
                <div className="z-index-1 font-serif font-bold text-8xl w-full pt-48 leading-none text-gray-800">
                    Human <br /> Stories & Ideas
                </div>
                <div className="py-8 text-2xl">
                    A place to read, write, and deepen your understanding
                </div>
                <div>
                    <button className="bg-[#2C3639] text-white py-2 px-8 rounded-3xl font-bold hover:bg-[#3F4E4F]" onClick={openLogin}>
                        Start reading..
                    </button>
                </div>
            </div>
            <div className="pt-10 flex-shrink-0">
                <img
                    className="fixed-size-img"
                    alt="Brand image"
                    src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
                    width="460"
                    height="600"
                    loading="eager"
                />
            </div>
        </div>

        <div className="border-t border-gray-300 py-4 text-sm text-gray-600 bg-[#DCD7C9]">
            <div className="flex justify-center space-x-4">
                <a className="hover:underline">Help</a>
                <a className="hover:underline">Status</a>
                <a className="hover:underline">About</a>
                <a className="hover:underline">Careers</a>
                <a className="hover:underline">Press</a>
                <a className="hover:underline">Blog</a>
                <a className="hover:underline">Privacy</a>
                <a className="hover:underline">Terms</a>
                <a className="hover:underline">Text to speech</a>
                <a className="hover:underline">Teams</a>
            </div>
        </div>
        <div>
            <Signin isOpen={isLoginOpen} onClose={closeLogin} navSignup={navToSigup}/>
        </div>
        <div>
            <Signup isOpen={isSignUpOpen} onClose={closeSignUp} navSignin={navToSignin} />
        </div>
    </div>
}