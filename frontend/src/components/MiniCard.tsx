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

export const MiniCard = ({
    authorName,
    title,
    content,
    publishDate,
    likes,
    diskes,
    saves
}: BlogProps) => {

    return (
        <div className="flex flex-col mx-auto px-1 mb-4">
            <div className="flex">
                <Avtar name={authorName} />
                <div className="mx-4">{authorName},</div>
                <div className="">{publishDate}</div>
            </div>
            <div className="font-extrabold text-sm my-2">
                {title}
            </div>
        </div>
    );
};
