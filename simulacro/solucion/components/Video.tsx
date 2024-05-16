import { FunctionComponent } from "preact";
import { Video } from "../types.ts";
import Fav from "../islands/Fav.tsx";

type Props = {
  video: Video;
  userid: string;
};

const VideoDetail: FunctionComponent<Props> = ({ video, userid }) => {
  return (
    <div className="video-detail-container">
      <a href="/videos" className="back-button">← Go Back to List</a>

      <div className="video-frame">
        <iframe
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/${video.youtubeid}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      </div>
      <h2 className="video-detail-title">{video.title}</h2>
      <p className="video-detail-description">{video.description}</p>
      <Fav id={video.id} fav={video.fav} userid={userid} />
    </div>
  );
};

export default VideoDetail;
