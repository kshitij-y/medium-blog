import { MiniCard } from "./MiniCard";

export const SidePlate = () => {
    const blogs = [
        {
            authorName: "Peach Villacarlos",
            title: "Planning our 2024 Tour du Mont Blanc Adventure",
            content: "How a Gen X couple from the SF Bay Area planned the most amazing adventure of their life — a journey on foot through 3 countries, over 105 miles, with 66,000' of elevation change!",
            publishDate: "Sep 4, 2024",
            likes: "30",
            diskes: "10",
            saves: "12"
        },
        {
            authorName: "John Doe",
            title: "Exploring the Andes Mountains",
            content: "An exhilarating journey through one of the longest mountain ranges in the world.",
            publishDate: "Aug 22, 2024",
            likes: "30",
            diskes: "10",
            saves: "12"
        },
        {
            authorName: "Jane Smith",
            title: "Cycling Across Europe",
            content: "A thrilling adventure cycling through some of Europe’s most beautiful landscapes.",
            publishDate: "Jul 15, 2024",
            likes: "30",
            diskes: "10",
            saves: "12"
        },
        {
            authorName: "Peach Villacarlos",
            title: "Planning our 2024 Tour du Mont Blanc Adventure",
            content: "How a Gen X couple from the SF Bay Area planned the most amazing adventure of their life — a journey on foot through 3 countries, over 105 miles, with 66,000' of elevation change!",
            publishDate: "Sep 4, 2024",
            likes: "30",
            diskes: "10",
            saves: "12"
        },
        {
            authorName: "Jane Smith",
            title: "Cycling Across Europe",
            content: "A thrilling adventure cycling through some of Europe’s most beautiful landscapes.",
            publishDate: "Jul 15, 2024",
            likes: "30",
            diskes: "10",
            saves: "12"
        },
        {
            authorName: "Peach Villacarlos",
            title: "Planning our 2024 Tour du Mont Blanc Adventure",
            content: "How a Gen X couple from the SF Bay Area planned the most amazing adventure of their life — a journey on foot through 3 countries, over 105 miles, with 66,000' of elevation change!",
            publishDate: "Sep 4, 2024",
            likes: "30",
            diskes: "10",
            saves: "12"
        }
    ];
    return (
        <div className="flex flex-col min-w-[90%] h-fit ">
            <div>
                <div className="py-2 border-b border-gray-200 my-4 font-bold">
                    From Followings...
                </div>
                <div className="px-4">
                    {blogs.map((blog, index) => (
                        <MiniCard
                            key={index}
                            authorName={blog.authorName}
                            title={blog.title}
                            content={blog.content}
                            publishDate={blog.publishDate}
                            likes={blog.likes}
                            diskes={blog.diskes}
                            saves={blog.saves}
                        />
                    ))}
                </div>
                <div className="text-green-600 font-semibold px-4">
                    <p>see full list</p>
                </div>
            </div>
            <div>
                {/* <div className="py-2 border-b border-gray-200 my-4 font-bold">
                    Recemended Topics
                </div> */}
            </div>
            <div>
                <div className="py-2 border-b border-gray-200 my-4 font-bold">
                    Reading list
                </div>
                <div className="px-4">
                    {blogs.map((blog, index) => (
                        <MiniCard
                            key={index}
                            authorName={blog.authorName}
                            title={blog.title}
                            content={blog.content}
                            publishDate={blog.publishDate}
                            likes={blog.likes}
                            diskes={blog.diskes}
                            saves={blog.saves}
                        />
                    ))}
                </div>
                <div className="text-green-600 font-semibold px-4">
                    <p>see full list</p>
                </div>
            </div>
        </div>
    );
}