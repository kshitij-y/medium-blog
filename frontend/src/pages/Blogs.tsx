import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard"
import { SidePlate } from "../components/SidePlate";
import { useState } from "react";

export const Blogs = () => {
    const [isSidePlateVisible, setSidePlateVisible] = useState(false);
    const blogs = [
        {
            authorName: "Peach Villacarlos",
            title: "Planning our 2024 Tour du Mont Blanc Adventure",
            content: "How a Gen X couple from the SF Bay Area planned the most amazing adventure of their life — a journey on foot through 3 countries, over 105 miles, with 66,000' of elevation change! How a Gen X couple from the SF Bay Area planned the most amazing adventure of their life — a journey on foot through 3 countries, over 105 miles, with 66,000' of elevation change!",
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
        <div className="flex flex-col w-[99vw] bg-[#DCD7C9]" >
          {/* Appbar with toggleSidePlate */}
          <div className="w-full">
            <Appbar toggleSidePlate={() => setSidePlateVisible(!isSidePlateVisible)} />
          </div>
    
          {/* Main content and SidePlate */}
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center w-full lg:w-[82%] px-12">
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
    
            {/* SidePlate hidden on smaller screens, visible on lg+ */}
            <div className="hidden lg:flex flex justify-center relative w-[18%]">
              <SidePlate toggleSidePlate={() => setSidePlateVisible(!isSidePlateVisible)}/>
            </div>
    
            {/* SidePlate for mobile, toggled visibility */}
            {isSidePlateVisible && (
              <div className="fixed top-0 right-0 w-[250px] h-full bg-white z-50 shadow-lg lg:hidden">
                <SidePlate toggleSidePlate={() => setSidePlateVisible(!isSidePlateVisible)}/>
              </div>
            )}
          </div>
        </div>
    );
    
    
    
    
}
