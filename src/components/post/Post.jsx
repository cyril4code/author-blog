import "./post.css";
import PostImg1 from "../../assets/ArticleImg1.jpg";

export const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src={PostImg1} alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Political</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor, totam.</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
      </div>

      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nemo
        excepturi magni magnam animi iste, aspernatur ut tenetur adipisci alias
        ab odio asperiores voluptates esse cum id nesciunt molestiae modi! Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Laborum nemo
        excepturi magni magnam animi iste, aspernatur ut tenetur adipisci alias
        ab odio asperiores voluptates esse cum id nesciunt molestiae modi!
      </p>
    </div>
  );
};
