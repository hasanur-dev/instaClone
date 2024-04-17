import User from './User'

export default function Comment({ comment }) {
  return (
    <div className="flex items-center gap-3">
      <User name={comment.users.username} />
      <p>{comment.content}</p>
    </div>
  )
}
