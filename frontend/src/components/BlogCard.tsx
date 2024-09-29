import { useState } from "react";
import { Avtar } from "./Avtar";

interface BlogProps {
    authorName: string,
    title: string,
    content: string,
    publishDate: string,
    diskes: string,
    likes: string,
    saves: string
}

export const BLogCard = ({
    authorName,
    title,
    content,
    publishDate,
    likes,
    diskes,
    saves
}: BlogProps) => {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        if (disliked) setDisliked(false);
    };

    const handleDislike = () => {
        setDisliked(!disliked);
        if (liked) setLiked(false);
    };
    const handleSave = () => {
        setSaved(!saved);
    };

    return (
        <div className="flex flex-col w-[80%] mx-auto border-t border-b border-gray-200 px-4 py-6">
            <div className="flex flex-row">
                <Avtar name={authorName} />
                <div className="mx-4">{authorName},</div>
                <div className="">{publishDate}</div>
            </div>
            <div className="font-bold text-2xl my-2">
                {title}
            </div>
            <div className="text-gray-600">
                {content}
            </div>
            <div className="text-gray-600 flex flex-row justify-between">
                <div className="flex flex-row items-center">
                    <div className="mr-2 cursor-pointer" onClick={handleLike}>
                        <svg
                            width="27px"
                            height="27px"
                            viewBox="0 0 24 24"
                            fill={liked ? "#0000FF" : "none"}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
                                stroke={liked ? "none" : "#0000FF"}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="mr-4">
                        {likes}
                    </div>
                    <div className="mr-2 cursor-pointer" onClick={handleDislike}>
                        <svg width="27px" height="27px" viewBox="0 0 24 24" fill={disliked ? "red" : "none"} xmlns="http://www.w3.org/2000/svg"><path d="M8 14V4M8 14L4 14V4.00002L8 4M8 14L13.1956 20.0615C13.6886 20.6367 14.4642 20.884 15.1992 20.7002L15.2467 20.6883C16.5885 20.3529 17.1929 18.7894 16.4258 17.6387L14 14H18.5604C19.8225 14 20.7691 12.8454 20.5216 11.6078L19.3216 5.60779C19.1346 4.67294 18.3138 4.00002 17.3604 4.00002L8 4" stroke={disliked ? "none" : "red"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="">
                        {diskes}
                    </div>
                    
                </div>
                <div className="flex flex-row">
                    <div onClick={handleSave} className="cursor-pointer ">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill={!saved ? "gray" : "none"} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill={!saved ? "gray" : "none"} stroke={!saved ? "none" : "gray"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <div className=" py-1 justify-center items-center">
                        {saves}
                    </div>
                </div>
            </div>
        </div>
    );
};
