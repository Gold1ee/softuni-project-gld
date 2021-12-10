import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import postService from '../../../services/postService';
import BlogPostCard from '../../Blog/BlogPostCard/BlogPostCard';

const HomeBlog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll()
            .then(result => {
                result = result.slice(result.length - 3, result.length)
                setPosts(result)
            })
    }, [])
    return (
        <div className="page-section border-top">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <div className="subhead">Our Blog</div>
                    <h2 className="title-section">Read our latest <span className="marked">Posts</span></h2>
                    <div className="divider mx-auto"></div>
                </div>
                <div className="row my-5 card-blog-row">
                    {posts.map(x => <BlogPostCard key={x._id} post={x} />)}
                </div>

                <div className="text-center">
                    <Link to="/blog" className="btn btn-outline-primary rounded-pill">Discover More</Link>
                </div>
            </div>
        </div>
    )
}
export default HomeBlog