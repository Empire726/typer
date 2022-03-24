import "./header.css";
import img1 from '../../assests/images/img1.png'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Nitesh Sharma</span>
        <span className="headerTitleLg">Congress</span>
      </div>
      <img
        className="headerImg"
        src={img1}
        alt=""
      />
    </div>
  );
}
