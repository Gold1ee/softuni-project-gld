import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import postService from '../../services/postService'
import authService from '../../services/authService'
import CommentCard from './CommentCard/CommentCard'
import { Link } from 'react-router-dom'

const BlogDetails = ({
    isAuth,
    user
}) => {

    const { blogId } = useParams()
    const [blog, setBlog] = useState({});
    const [errMessage, setErrMessage] = useState()
    const navigate = useNavigate()


    useEffect(async () => {
        let post = await postService.getOne(blogId)
        setBlog(post)
    }, [])


    let ownerId = blog.ownerId
    let comments = blog.comments
    let currentUserId = authService.getUserId()
    let isOwner = () => {
        if (ownerId !== currentUserId) {
            return false
        }
        return true
    }
    const commentHandler = (e) => {
        e.preventDefault()
        try {

            let formData = new FormData(e.currentTarget)
            let commentMessage = formData.get('msg')
            if (commentMessage == '') {
                throw new Error('Comment cannot be empty!')
            }
            let comment = {
                _id: blog.commentCount,
                username: user,
                commentMessage: commentMessage
            }
            let commentsArray = blog.comments || []
            commentsArray.push(comment)
            blog.comments = commentsArray
            blog.commentCount += 1
            postService.editPost(blog, blogId)
            navigate(`/blog/${blog._id}`)

        } catch (e) {
            setErrMessage(e.message)
        }

    }
    const commentsFunc = () => {
        if (comments !== undefined) {
            return comments.map(x => <CommentCard key={x._id} comment={x} />)
        }
        else {
            return null
        }
    }
    let isOwned = isOwner()
    let commentsFunction = commentsFunc()

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
                                    <div className="post-comment-count ml-2">
                                        <span className="icon">
                                            <span className="mai-chatbubbles-outline"></span>
                                        </span> <a href="#">{blog.commentCount} Comments</a>
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
                        {isAuth
                            ? <div className="comment-form-wrap pt-5">
                                <h2 className="mb-5">Leave a comment</h2>
                                <p className="form-link error">{errMessage}</p>
                                <form onSubmit={commentHandler} className="">
                                    <div className="form-group">
                                        <label htmlFor="website">Username</label>
                                        <input type="url" className="form-control" id="website" name='username' disabled defaultValue={user} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Comment</label>
                                        <textarea name="msg" id="message" cols="30" rows="8" className="form-control" defaultValue={''} ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Post Comment" className="btn btn-primary" />
                                    </div>

                                </form>
                            </div>
                            : null
                        }
                        <div className="comment-form-wrap pt-5">
                            <h2 className="mb-5">Comment Section</h2>
                            {commentsFunction
                            ? commentsFunction
                            : <p>No comments to display!</p>}
                        </div>
                    </div>
                    { }
                </div>

            </div>
        </div >
    )


}
export default BlogDetails