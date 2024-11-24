import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContext from "../../context/MainContext";
import PostCard from "./utils/PostCard";
import "./blog.css"

const BlogItemView = () => {
  const { getThisPost, getAllPosts, setLoading } = useContext(MainContext);
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  useEffect(() => {
    if (data) {
      fetchPosts(data.tag.id);
    }
  }, [data]);

  const fetchData = async (id) => {
    try {
      const { data } = await getThisPost(id);
      setData(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const fetchPosts = async (tagId) => {
    setLoading(true);
    try {
      const { data } = await getAllPosts(tagId);
      setAllPosts(data);
    } catch (error) {
      navigate("/blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog_container">
       <div className="blog_title_section flex column jf-c">
          <h2 className="title_section flex jf-c al-c xx-big autoM">BLOG</h2>
          <p className="x-big">Trading sin fronteras</p>
        </div>
      {data ? (
        <div className="blog_article full-w autoM">
          <div className="article_header">
            <h2 className="article_title">{data.title}</h2>
            <p className="article_tag">Categoría: {data.tag.tag}</p>
            <p className="article_date">
              Publicado el: {new Date(data.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="article_image">
            <img
              src={data.imageUrl}
              alt={data.title}
              className="responsive_image"

            />
          </div>
          <div className="article_body">
            <p>{data.description}</p>
          </div>
          <div className="article_author">
            <p>
              Author: {data.user.name} {data.user.lastname}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading article...</p>
      )}

      {/* Related Posts Section */}
      <div className="related_posts full-w autoM">
        <h3>Publicaciones Relacionadas: </h3>
        <div className="related_posts_grid flex row wrap jf-c al-c autoM">
          {allPosts.length > 0 ? (
            allPosts.map((post, i) => <PostCard key={i} {...post} />)
          ) : (
            <p>No related posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogItemView;

