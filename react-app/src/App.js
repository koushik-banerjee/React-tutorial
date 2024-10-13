import "./App.css";
import Video from "./component/Video";
function App() {
  let obj = {
    title: "React js tutorial",
    views: "210k",
    time: "1 year ago",
    channel: "kbshorts",
    verified: false,
  };
  let channelName = "kbshorts";
  return (
    <div>
      <div style={{ display: "flex" }}>Yt Shorts</div>
      <div className="playlist">
        <Video {...obj}></Video>
        <Video
          title="Node js tutorial"
          views="500k"
          time="2 year ago"
          // channel={channelName}   // it will show though it is cancelled as a deafult parameter is given to the prop in Video.js file.
          verified={true}
        ></Video>
        <Video
          title="Node js tutorial"
          views="500k"
          time="2 year ago"
          channel={channelName}
          verified={false}
        ></Video>
        <Video
          title="Node js tutorial"
          views="500k"
          time="2 year ago"
          channel={channelName}
          verified={true}
        ></Video>
      </div>
    </div>
  );
}

export default App;
