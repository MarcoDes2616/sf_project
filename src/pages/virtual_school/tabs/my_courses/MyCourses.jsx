import React, { useContext, useEffect } from "react";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";
import CoursesContain from "../../utils/CoursesContain";
import Loading from "/src/components/Loading";
import PostCard from "../../../blog/utils/PostCard";
import DiamondIcon from '@mui/icons-material/Diamond';
import PrimaryBtn from "../../../../components/generals/PrimaryBtn";
import YellowBtn from "../../../../components/generals/YellowBtn";

function MyCourses() {
  const { setModule, allContain, view, handleViewChange, loading, allPosts } =
    useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("my_courses");
  }, [setModule]);

  const propsToCourses = { allContain, handleViewChange, view };

  return (
    <>
      <Loading loading={loading} />
      <CoursesContain {...propsToCourses} />
      <br /><br />
      <div className="full-w autoM x-big">
        <h3 style={{color: "#0F3F76"}}>Señales de mercado<DiamondIcon /></h3>
        {allContain[0] ? (
          <div className="blog_premium post_cards_container">
            {allPosts.map((post, i) => (
              <PostCard key={i} {...post} />
            ))}
          </div>
        ) : (
          <div className=" blog_premium full-w full-h flex column jf-c al-c">
            <div className="premium-message">
              <DiamondIcon /> <br />
              <h4>Aun no eres Premium?</h4>
            </div>
            <YellowBtn link={"https://t.me/Tradingsinfrontera"}>Habla con nosotros</YellowBtn>
            
          </div>
        )}
      </div>
    </>
  );
}

export default MyCourses;
