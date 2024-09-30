import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard"
import { SidePlate } from "../components/SidePlate";


export const Blogs = () => {
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
        }
    ];

    return (
        <div className="flex flex-col">
            <div className="w-full">
                <Appbar />
            </div>
    
            <div className="container flex flex-row w-[90vw] mx-auto justify-center">
                <div className="flex flex-col w-[60%] justify-center ">
                    {blogs.map((blog, index) => (
                        <BlogCard
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

                <div className="w-[40%] flex justify-center sticky top-0 h-fit " >
                    <SidePlate />
                </div>
            </div>

        </div>
    );
    
    
    
}
