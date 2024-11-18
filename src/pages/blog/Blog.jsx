import { useContext } from "react";
import "./blog.css";
import FilterComponent from "./utils/FilterComponent";
import PostCard from "./utils/PostCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";

const Blog = () => {
  const [tagId, setTagId] = useState("");
  const { getAllPosts, setLoading } = useContext(MainContext);
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData({tagId});
  }, [,tagId]);

  const fetchData = async (tagId) => {
    setLoading(true)
    try {
      const { data } = await getAllPosts(tagId);
      setAllPosts(data);
    } catch (error) {
      navigate("/");
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="blog_container">
      <div className="blog_info_container">
        <div className="blog_title_section flex column jf-c">
          <h2 className="title_section flex jf-c al-c xx-big autoM">BLOG</h2>
          <p className="x-big">Trading sin fronteras</p>
        </div>
        <FilterComponent setTagId={setTagId} tagId={tagId} />
        <div className="post_cards_container">
          {allPosts.map((post, i) => (
            <PostCard key={i} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
