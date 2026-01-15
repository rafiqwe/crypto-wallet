import { BlogData } from "../../data/BlogData";
import  BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {BlogData.map((blog, idx) => {
        return <BlogCard key={idx} content={blog} />;
      })}
    </div>
  );
};

export default Blogs;
