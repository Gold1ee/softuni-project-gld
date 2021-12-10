import { Link } from 'react-router-dom'

const CommentCard = ({ comment }) => {
    return (
        <div className="col-md-6 col-lg-4 py-3">
            <div className="card-blog comments">
                <div className="header">
                    <div className="entry-footer">
                        <div className="post-author">{comment.username}</div>
                    </div>
                </div>
                <div className="body">
                    <div className="post-excerpt">{comment.commentMessage}</div>
                </div>
            </div>
        </div>

    )
}
export default CommentCard