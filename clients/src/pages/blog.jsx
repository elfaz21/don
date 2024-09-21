import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://don-server-75q6.onrender.com/api/blogs/"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 8);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="blog mb-10">
          <div className="blog-hero mb-10">
            <h1 className="text-center text-white font-extrabold py-36 md:px-96 text-6xl">
              BLOG
            </h1>
          </div>
          <div className="row">
            <div className="flex justify-end xl:px-32 lg:px-16 md:px-10 sm:px-16 xs:px-16 xls:px-16">
              <Link
                className="text-BlueBlackColor font-bold hover:text-black"
                onClick={() => setShowAll(true)}
              >
                See All
              </Link>
            </div>
            <div className="row mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center xs:grid-cols-1 xls:grid-cols-1 lg:gap-8 md:gap-7 xl:mx-20 lg:mx-10 sm:mx-10 sm:gap-5 xs:gap-5 xls:gap-5">
              {visibleBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="col shadow-lg border xl:w-72 lg:w-52 md:w-52 sm:w-60 xs:w-72 xls:w-72 rounded-lg"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Link to={`/blog/${blog._id}`}>
                    <img
                      src={blog.blogImage}
                      className="rounded-lg mb-3"
                      alt=""
                    />
                    <h3 className="text-base font-bold mb-1 text-center">
                      {blog.blogTitle}
                    </h3>
                    <p className="text-xs mb-3 px-5 flex-grow">
                      {truncateText(blog.blogDescription, 400)}
                      {blog.blogDescription.length > 100 && (
                        <button className="text-blue-500 mt-2">
                          Read More
                        </button>
                      )}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
}

export default Blog;
