import { useEffect, useState } from "react";

import BlogPostCard from "./BlogPostCard/BlogPostCard.js";
import { Link } from "react-router-dom";
import createPostService from "../../services/createPostService.js";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
      createPostService.getAll()
      .then(result =>{
        setPosts(result)
      })
  }, [])
  
  return (
    <div>
      <div className="page-section">
        <div className="container">
          <div className="row">
          {posts.map(x => <BlogPostCard key={x._id} post={x}/>)}
          </div>

        </div>
      </div>
    </div>
  )
}
export default Blog