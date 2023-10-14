import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Blog2.css";
import OurBlog from "../Subcomponents/OurBlog/OurBlog";
import NewCar from "../Subcomponents/NewCar/NewCar";
import { useDispatch } from "react-redux";
// import { incrementBlogViews } from "../blogViews/blogViewsReducer"; 
import { incrementBlogViews } from "../blogViews/blogViewsSlice";

const Blog = ({ blog }) => {

  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState([]);
;   const dispatch = useDispatch();


  const handleClick = (blogId) => {
    // Dispatch the action to increment views
    dispatch(incrementBlogViews(blogId));
    window.location.href = `/blog/${blogId}`
  };

  useEffect(() => {
    axios
      .get("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/")
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data);
        setVisibleBlogs(response.data.slice(0, 6)); // Show the first 6 blogs
      })
      .catch((error) => console.error(error));
  }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const loadMore = () => {
    const currentVisibleBlogsLength = visibleBlogs.length;
    const nextVisibleBlogs = blogs.slice(
      currentVisibleBlogsLength,
      currentVisibleBlogsLength + 6
    );
  
    setVisibleBlogs([...visibleBlogs, ...nextVisibleBlogs]);
  };

  return (
    <>
      <Navbar />
    <OurBlog/>
    <NewCar/>
      <div className="blog-container">
        {visibleBlogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <div to={`/blog/${blog.id}`} key={blog.id} onClick={() => handleClick(blog.id)}>
              <img
                src={blog.Image}
                title="title"
                className="blog-card-image"
              />
             <div className="dateAndViewContainer">
                <div className="dateAndView">
                  <div className="date">Posted on Octobar 6th 2021</div>
                  <div className="view">563 views</div>
                </div>
              </div>
              <div className="blog-card-content">
                <h2 className="blog-card-title">{truncateText(blog.Title ,3)}</h2>
                <h4 className="blog-card-subtitle">{truncateText(blog.Subtitle, 7)}</h4>
                <p className="blog-card-article">{truncateText(blog.Article, 10)}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
      {blogs.length > 6 && visibleBlogs.length < blogs.length && (
        <div className="load-more-container">
          <button onClick={loadMore} className="load-more-button">Load More</button>
        </div>
      )}
    </>
  );
};

export default Blog;


