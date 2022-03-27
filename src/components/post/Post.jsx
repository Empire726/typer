import { Link } from "react-router-dom";
import "./post.css";
import Mata from "./Data";

export default function Post() {
  return (<>
    <div className="posts" id="post">

      {
        Mata.map((item, index) => {
          return (<>
            <div className="post" key={index}>
              <img
                className="postImg"
                src={item.img}
                alt=""
              />
              <div className="postInfo">

                <span className="postTitle">
                  <Link to="/post/abc" className="link">
                    {item.move}
                  </Link>
                </span>
                <hr />
                <span className="postDate">{item.hour}</span>
              </div>
              <p className="postDesc">
                {item.para}
              </p>
            </div>

          </>

          )

        })
      }
    </div>
 
  </>
  );
}
