import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import postService from "../../services/postService.js";
import { useNavigate, Navigate } from 'react-router-dom'
import authService from '../../services/authService'

const CreatePost = () => {
    const navigate = useNavigate()
    const [errMessage, setErrMessage] = useState()
    const username = authService.getUsername()
    const userImage = authService.getUserImage()
    const ownerId = authService.getUserId()
    const { postId } = useParams()
    const [blog, setBlog] = useState({});
    useEffect(async () => {
        let post = await postService.getOne(postId)
        setBlog(post)
    }, [])
    const createPostHandler = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title')
        let miniDesc = formData.get('mini-description')
        let description = formData.get('description')
        let thumbnailImage = formData.get('imageUrl')
        let post = {
            _id: postId,
            title: title,
            miniDescription: miniDesc,
            description: description,
            imageUrl: userImage,
            owner: username,
            ownerId: ownerId,
            thumbnailImage: thumbnailImage
        }
        try {
            if (post.title == '') {
                throw new Error('Title is required!')
            }
            if (post.miniDescription == '') {
                throw new Error('Mini description is required!')
            }
            if (post.description == '') {
                throw new Error('Description is required!')
            }
            if (post.thumbnailImage == '') {
                throw new Error('Thumbnail is required! ')
            }
            let result = postService.editPost(post, postId)
            navigate(`/blog/${postId}`)
        } catch (e) {
            setErrMessage(e.message)
        }

        //let result = await createPostService.getUserInfo()
        //console.log(result);



    }
    return (
        <div className="create-post">
            <div className="comment-form-wrap pt-5">
                <h2 className="mb-5">Edit your post</h2>
                <p className="form-link error">{errMessage}</p>
                <form onSubmit={createPostHandler} className="">
                    <div className="form-row form-group">

                        <div className="col-md-6">
                            <label htmlFor="title">Title *</label>
                            <input type="text" className="form-control" id="title" name="title" defaultValue={blog.title} />
                        </div>
                        <div className="col-md-6 mini-desc">
                            <label htmlFor="mini-description">Mini description *</label>
                            <input type="mini-description" className="form-control" id="mini-description" name="mini-description" defaultValue={blog.miniDescription} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Username</label>
                        <input type="text" className="form-control" id="email" name="email" disabled defaultValue={username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Thumbnail URL</label>
                        <input type="text" className="form-control" id="imageUrl" name="imageUrl" defaultValue={blog.thumbnailImage} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="8" className="form-control" defaultValue={blog.description}></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit post" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        </div>
    )
}
export default CreatePost