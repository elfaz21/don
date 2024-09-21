import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://don-server-75q6.onrender.com/api/blogs/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="blog-details relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gray-900"></div>
        </div>
      )}
      <div className="blog-hero mb-10">
        <h1 className="text-center text-white font-extrabold py-36 md:px-96 text-6xl">
          BLOG DETAIL
        </h1>
      </div>
      <div className="px-4 py-8 lg:px-20 xl:px-40">
        {blog && (
          <>
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              {blog.blogTitle}
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12">
              <div className="lg:w-1/2">
                <img
                  src={blog.blogImage}
                  alt={blog.blogTitle}
                  className="rounded-lg w-full"
                />
              </div>

              <div className="lg:w-1/2 mt-6 lg:mt-0">
                <h3 className="text-sm lg:text-base font-bold mb-2">
                  {blog.blogTitle}
                </h3>
                <h3 className="text-sm lg:text-base mb-2">{blog.timeStamp}</h3>
                <p className="text-sm lg:text-base leading-6">
                  {blog.blogDescription}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BlogDetail;
