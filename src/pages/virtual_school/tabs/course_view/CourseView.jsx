import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";
import ReactPlayer from "react-player";
import Loading from "../../../../components/Loading";
import "./CourseView.css";

const CourseView = () => {
  const videoPlayerRef = useRef();
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showImageOverlay, setShowImageOverlay] = useState(true);
  const { getCourseVideo } = useContext(VirtualSchoolContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(courseId);
  }, [courseId]);

  const fetchData = async (courseId) => {
    setLoading(true);
    try {
      const response = await getCourseVideo(courseId);
      setData(response.data);
      setCurrentVideo(response.data.videos[0]); // Set the first video as the default
    } catch (error) {
      console.error("Error fetching course data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
    setShowImageOverlay(true);
  };

  return (
    <div className="course-view">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <div className="course-header">
            <h1>{data?.course?.title}</h1>
            <p>{data?.course?.description}</p>
          </div>
          <div className="course-content">
            <div className="video-container">
              {currentVideo && (
                <>
                  {showImageOverlay && (
                    <>
                      <img
                        src={currentVideo.imageUrl}
                        alt={currentVideo.title}
                        className="video-overlay"
                      />
                      <button
                        className="play-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowImageOverlay(false);
                        }}
                      >
                        ▶ Play
                      </button>
                    </>
                  )}
                  <div className="video-wrapper border full-w full-h">
                    <ReactPlayer
                      ref={(player) => (videoPlayerRef.current = player)}
                      url={currentVideo.videoUrl}
                      controls
                      playing={!showImageOverlay}
                      onPlay={() => setShowImageOverlay(false)}
                      onPause={() => setShowImageOverlay(true)}
                      onEnded={() => setShowImageOverlay(true)}
                      width="100%"
                      height="100%"
                    />
                    <div
                      className="overlay-blocker"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      
                    </div>
                    <div
                      className="overlay-blocker2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      {!showImageOverlay && 
                      <button
                        className="pause-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          videoPlayerRef.current &&
                            videoPlayerRef.current
                              .getInternalPlayer()
                              .pauseVideo();
                        }}
                      >
                        ⏸ Pause
                      </button>}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="video-list">
              <h3>Videos del curso</h3>
              <ul>
                {data?.videos.map((video, i) => (
                  <li
                    key={i}
                    className={
                      currentVideo?.id === video.id ? "active" : "inactive"
                    }
                    onClick={() => handleVideoChange(video)}
                  >
                    {video.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="course-details">
            <p>Duración total: {
              data?.course?.totalDuration >= 60 
                ? `${Math.floor(data.course.totalDuration / 60)} hora${Math.floor(data.course.totalDuration / 60) !== 1 ? 's' : ''} ${data.course.totalDuration % 60} minuto${(data.course.totalDuration % 60) !== 1 ? 's' : ''}`
                : `${data.course.totalDuration} minutos`
            }</p>
            <p>Número de videos: {data?.course?.videoCount}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseView;
