import { useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import YoutubeEmbed from "../../components/Video/youtube";
import "./homepage.css";
import Carasoual from "../../components/Carasoual/Carasoual"

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
      <Carasoual/>
      <YoutubeEmbed embedId="rokGy0huYEA" />
      <Footer/>
    </>
  );
}
