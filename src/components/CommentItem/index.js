import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLikeBtn, onDeleteComment} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails

  const onClickLike = () => {
    toggleLikeBtn(id)
  }

  const deleteComment = () => {
    console.log(commentDetails)
    onDeleteComment(id)
  }

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="each-comment-container">
      <div className="commenter-details">
        <p className={initialClassName}>{name.slice(0, 1).toUpperCase()}</p>
        <p className="commenter-name">{name}</p>
        <p className="time">{formatDistanceToNow(date)}</p>
      </div>
      <p className="comment-content">{comment}</p>
      <div className="buttons-container">
        <button type="button" className="btn-like" onClick={onClickLike}>
          <img src={likeImage} className="like-image" alt="like" />
        </button>
        <button
          type="button"
          className="btn-delete"
          onClick={deleteComment}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizontal-separator" />
    </li>
  )
}

export default CommentItem
