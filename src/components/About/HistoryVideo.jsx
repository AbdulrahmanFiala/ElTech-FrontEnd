import videoBG from "../../assets/images/about/video-bg.jpg";

const HistoryVideo = () => {
  return (
    <div className="row m-top-113">
      <div className="col-lg-12">
        <div
          className="video-banner"
          style={{ backgroundImage: `url(${videoBG})` }}
        >
          <a
            className="popup-video"
            href="https://www.youtube.com/embed/LXb3EKWsInQ"
            data-rel="lightcase"
          >
            <i className="twi-play-circle"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HistoryVideo;
