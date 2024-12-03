import { format } from "date-fns";
import ShareButton from "./ShareButton";


const blogs = [
  {
    title: "Exploring Next.js 13",
    description:
      "An in-depth look at Next.js 13 and its powerful features for modern web development.",
    slug: "exploring-nextjs-13",
    date: "2024-11-06",
    author: "Jane Doe",
    image: "/blog1.webp",
    fullContent: "Full content of the blog goes here.",
  },
  {
    title: "The Future of Web Development",
    description:
      "Discover trends that are shaping the future of web development. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    slug: "future-of-web-development",
    date: "2024-10-25",
    author: "John Smith",
    image: "/blog2.avif",
    fullContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor semper erat, viverra aliquet orci...",
  },
  {
    title: "Mastering Responsive Design",
    description:
      "Tips and techniques for creating responsive web designs that look great on all devices.",
    slug: "mastering-responsive-design",
    date: "2024-09-12",
    author: "Alice Johnson",
    image: "/blog3.jpg",
    fullContent:
      "Vivamus efficitur gravida lorem sed hendrerit. Maecenas id consectetur dui. Vestibulum ornare egestas justo...",
  },
];

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}


const IndividualBlogPage = async ({ params }) => {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);

 
  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl mt-8">
      <h1 className="text-5xl font-bold mb-6">{blog.title}</h1>
      <div className="flex items-center gap-4 text-gray-600 mb-8 dark:text-slate-100">
        <span>{format(new Date(blog.date), "MMMM dd, yyyy")}</span>
        <span>•</span>
        <span>5 min read</span>
      </div>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover"
      />
      <p className="text-xl text-gray-700 mb-8 dark:text-slate-100">{blog.description}</p>
      <div className="prose mb-8">{blog.fullContent}</div>

      {/* Place ShareButton here */}
      <ShareButton blog={blog} />
    </div>
  );
};

export default IndividualBlogPage;
