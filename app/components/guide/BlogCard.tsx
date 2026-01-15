import Image, { StaticImageData } from "next/image";
import ManImage from "@/public/images/man.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
interface BlogContent {
  title: string;
  subtitle: string;
  slug: string;
  image?: string | StaticImageData | undefined;
  data: string;
}

const BlogCard = ({ content }: { content: BlogContent }) => {
  return (
    <div>
      <Link href={`guide/${content.slug}`}>
        <div className="w-full hover:bg-gray-300 trasnition-all duration-300 h-full p-3 bg-gray-100 rounded-2xl pb-15">
          <div className="w-full h-90 relative">
            {content.image && (
              <Image
                src={content.image}
                alt="blog image"
                fill
                className="object-cover rounded-2xl object-center "
              />
            )}
          </div>
          <div className="mt-5 space-y-2 px-3">
            <p className="text-gray-500 ">{content.data}</p>
            <h2 className="text-2xl font-bold py-5">{content.title}</h2>

            <h5 className="text-gray-500 mb-6">{content.subtitle}</h5>

            <div className="flex gap-2 items-center text-blue-600 cursor-pointer font-semibold ">
              Read More <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
