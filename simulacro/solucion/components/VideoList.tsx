import { FunctionComponent } from "preact";
import Fav from "../islands/Fav.tsx";
import { Video } from "../types.ts";

type Props = {
  videos: Video[];
  userid: string;
};

const VideoList: FunctionComponent<Props> = ({ videos, userid }) => {
  return (
    <div className="video-list-container">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <a href={`/video/${video.id}`} className="video-link">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <p className="video-release-date">
                Release date: {new Date(video.date).toLocaleDateString()}
              </p>
            </div>
          </a>
          <Fav id={video.id} userid={userid} fav={video.fav} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
