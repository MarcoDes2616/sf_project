import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContext from "../../context/MainContext";

const BlogItemView = () => {
  const { getThisPost, getAllPosts, setLoading } = useContext(MainContext);
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate()
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchData(id);
  }, []);

  useEffect(() => {
    if (data) {
      fetchPosts(data.tag.id)
    }
  }, [data])

  const fetchData = async (id) => {
    try {
      const { data } = await getThisPost(id);
      setData(data);
    } catch (error) {}
  };

  const fetchPosts = async (tagId) => {
    setLoading(true);
    try {
      const {data} = await getAllPosts(tagId);
      setAllPosts(data);
    } catch (error) {
      navigate("/blog");
    } finally {
      setLoading(false);
    }
  };
  console.log(data);
  console.log(allPosts);

  return (
    <div className="blog_container">
      <div className="blog_info_container">
        <div className="blog_title_section flex column jf-c">
          <h2 className="title_section flex jf-c al-c xx-big autoM">BLOG</h2>
          <p className="x-big">Trading sin fronteras</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItemView;
