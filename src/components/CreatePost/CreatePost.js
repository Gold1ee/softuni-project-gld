import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import createPostService from "../../services/createPostService.js";
import { useNavigate, Navigate } from 'react-router-dom'

const CreatePost = () => {
    const navigate = useNavigate()
    const createPostHandler = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title')
        let miniDesc = formData.get('mini-description')
        let description = formData.get('description')
        let post = {
            title: title,
            miniDescription: miniDesc,
            description: description
        }
        let result = createPostService.createPost(post)

        //let result = await createPostService.getUserInfo()
        //console.log(result);



        navigate('/blog')
    }
    return (
        <div className="create-post">
            <div className="comment-form-wrap pt-5">
                <h2 className="mb-5">Create a post</h2>
                <form onSubmit={createPostHandler} className="">
                    <div className="form-row form-group">
                        <div className="col-md-6">
                            <label htmlFor="title">Title *</label>
                            <input type="text" className="form-control" id="title" name="title" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="mini-description">Mini description *</label>
                            <input type="mini-description" className="form-control" id="mini-description" name="mini-description" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="8" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create post" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        </div>
    )
}
export default CreatePost