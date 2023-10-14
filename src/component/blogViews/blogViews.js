
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./blogViews.css";
import Navbar from "../Navbar/Navbar";
import should from "../assets/should.jpg";
import { useDispatch, useSelector } from 'react-redux';
// import { incrementBlogViews } from './blogViewsReducer'; 
import { useNavigate } from 'react-router-dom'; 
import  {incrementBlogViews}  from '../blogViews/blogViewsSlice'; 
import { selectBlogViews } from './blogViewsSlice';


const BlogView = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const dispatch = useDispatch();
  // const blogViews = useSelector(); 
  const blogViews = useSelector(selectBlogViews);

  const navigate = useNavigate(); 

  useEffect(() => {
    console.log("Fetching blog post with ID: ", id);

    dispatch(incrementBlogViews(id));
    axios.get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      });
  }, [id, dispatch]);
  const handleTestTaskClick = () => {
    navigate("/container"); 
  };
  const handleClick = () => {
    // Dispatch the action to increment views
    dispatch(incrementBlogViews(id));
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div class="centered-card">
        <div class="ShouldIBuyContainer">
          <div class="ShouldIBuy">
            <div class="ShouldIBuyDateAndView">
              <div class="dates">Posted on Octobar 6th 2021</div>
              <div class="views">{blogViews[id] || 0} views</div> {/* Display views here */}
            </div>
          </div>
          <div class="ShouldIBuyContainerInner">
            <div class="ShouldIBuyText"><h2>{blog.Title}</h2></div>
            <div class="ShouldIBuyTextContent">We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical </div>
          </div>
          <img src={should} title="" className="ShouldImg" alt="Should Image" />
        </div>
      </div>

      <div className="blog-detail">
        <h2>{blog.Title}</h2>
        <p>{blog.Article}</p>
        <img src={blog.Image} title="title" className="blog-card-image" />
        <h4 className="blog-card-subtitle">{blog.Subtitle}</h4>
        <p>{blog.Article}</p>
        <button onClick={handleClick} className="test-task-button">
          Increment Views
        </button>
        <button onClick={handleTestTaskClick} className="test-task-button">Test Task</button>
      </div>
    </>
  );
};

export default BlogView;
