import { useState, createContext } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import Mata from "./Data";

export default function Post() {
  const [user, setUser] = useState(Mata);
  const UserContext = createContext()
  return (<UserContext.Provider value={user}>
    <div className="posts" id="post">

      {
        user.map((item, index) => {
          return (<>
            <div className="post" key={index}>
              <img
                className="postImg"
                src={item.img}
                alt=""
              />
              <div className="postInfo">

                <span className="postTitle">
                  <Link to="/single" className="link">
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
 
  </UserContext.Provider>
  );
}
