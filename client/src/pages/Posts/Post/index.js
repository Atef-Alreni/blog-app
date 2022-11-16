import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import "./styles.css";

function Post({ _id, title, post, createdAt, author, postDetails }) {
  const date = new Date(createdAt);
  const format = { day: "numeric", month: "long", year: "numeric" };
  console.log(_id);

  return (
    <div className='post-container'>
      <div className='name-date-img'>
        <div className='name-date'>
          <h3 className='author-name'>{author.name}</h3>
          <span className='post-date'>
            {date.toLocaleString("default", format)}
          </span>
        </div>
        <Avatar name={author.name} className='author-img-sm' />
      </div>
      <div className='author-img-title-post'>
        <Avatar name={author.name} className='author-img' />
        <div>
          <h3 className='author-title'>{title}</h3>
          <p
            className={
              postDetails ? "author-post no-overflow-hidden" : "author-post"
            }>
            {post}
          </p>
          {postDetails ? (
            ""
          ) : (
            <div className='seperation'>
              <Link to={`/posts/${_id}`} className='read-more-post'>
                Read More
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
