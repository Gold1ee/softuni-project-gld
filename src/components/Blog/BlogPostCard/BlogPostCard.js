import { Link } from 'react-router-dom'

const BlogPostCard = ({ post }) => {
    return (
        <div className="col-md-6 col-lg-4 py-3">
            <div className="card-blog">
                <div className="header">
                    <div className="avatar">
                        <img src={post.imageUrl} alt="" />
                    </div>
                    <div className="entry-footer">
                        <div className="post-author">{post.owner}</div>
                    </div>
                </div>
                <div className="body">
                    <div className="post-title"><Link to="blog-single.html">{post.title}</Link></div>
                    <div className="post-excerpt">{post.miniDescription}</div>
                </div>
                <div className="footer">
                    <Link to={`/blog/${post._id}`}>Read More <span className="mai-chevron-forward text-sm"></span></Link>
                </div>
            </div>
        </div>
    )
}
export default BlogPostCard