import "./App.css";
import PlayButton from "./component/PlayButton";
import Video from "./component/Video";
import obj from "./data/data";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
        YT Shorts
      </div>
      <div className="playlist">
        {obj.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
          />
        ))}
      </div>
      
      {/* Move the PlayButton outside of the video loop */}
      <div className="play-button-wrapper">
        <PlayButton message="play" name="play"></PlayButton>
        <PlayButton message="pause" name="pause"></PlayButton>
      </div>
    </>
  );
}

export default App;
