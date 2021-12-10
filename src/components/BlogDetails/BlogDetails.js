import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import postService from '../../services/postService'
import authService from '../../services/authService'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
    const { blogId } = useParams()
    const [blog, setBlog] = useState({});
    useEffect(async () => {
        let post = await postService.getOne(blogId)
        setBlog(post)
    }, [])
    let ownerId = blog.ownerId
    let currentUserId = authService.getUserId()
    let isOwner = () => {
        if (ownerId !== currentUserId) {
            return false
        }
        return true
    }
    let isOwned = isOwner()


    return (
        <div className="page-section pt-5" >
            <div className="container">
                <nav aria-label="Breadcrumb">
                    <ul className="breadcrumb p-0 mb-0 bg-transparent">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="blog.html">Blog</a></li>
                        <li className="breadcrumb-item active">Second divided from form fish beastr</li>
                    </ul>
                </nav>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-single-wrap">
                            <div className="header">
                                <div className="post-thumb">
                                    <img src={blog.thumbnailImage} alt="" />
                                </div>
                                <div className="meta-header">
                                    <div className="post-author">
                                        <div className="avatar">
                                            <img src={blog.imageUrl} alt="" />
                                        </div>
                                        by <a href="#">{blog.owner}</a>
                                    </div>
                                </div>
                            </div>
                            <h1 className="post-title">{blog.title}</h1>
                            <div className="post-meta">


                            </div>
                            <div className="post-content">
                                <p>{blog.description}</p>
                            </div>
                            {isOwned
                                ? <div className="post-content">
                                    <Link to={`/edit/${blog._id}`} className="btn btn-primary">Edit</Link>
                                    <Link to={`/delete/${blog._id}`} className="btn btn-primary ml-2">Delete</Link>
                                </div>
                                : null}

                        </div>



                    </div>

                </div>

            </div>
        </div >
    )


}
export default BlogDetails