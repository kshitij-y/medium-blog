//@ts-ignore
export const Signup = ({isOpen, onClose, navSignin}) => {
    if(!isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">

                <div>
                    <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
                        <svg width="29" height="29"><path fill-rule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
                    </button>
                </div>
                <div className="justify-center text-center my-10 text-3xl font-medium font-serif ">
                    Join Medium.
                </div>
                <div className="flex flex-col">
                    {/* //<label className="block mx-24 py-2 px-2">Email:</label> */}
                    <input className="text-gray py-2 px-4 mx-24 rounded-3xl font-normal border border-black" placeholder="Enter your name"/>
                    <input className="text-gray py-2 px-4 my-4 mx-24 rounded-3xl font-normal border border-black " placeholder="Enter your email"/>
                    <input className="text-gray py-2 px-4 mx-24 rounded-3xl font-normal border border-black" placeholder="Enter your password"/>

                    <button className="bg-black text-white py-2 px-4 mx-24 my-4 rounded-3xl font-bold hover:bg-gray-700">
                        Sign Up
                    </button>

                </div>
                <div className="flex flex-row py-2 px-4 mx-24 my-6 justify-center items-center">
                    <div>
                        Already have an account? 
                    </div>
                    <div className="text-green-500 font-bold px-1 underline cursor-pointer" onClick={navSignin}>
                        Sign in
                    </div>
                </div>
                
            </div>
        </div>
    )
}
