import "./App.css";
import Video from "./component/Video";
function App() {
  let obj = [{
    id:1,
    title: "React js tutorial",
    views: "210k",
    time: "1 year ago",
    channel: "kbshorts",
    verified: false,
  },
  {
    id:2,
    title: "Node js tutorial",
    views: "500k",
    time: "5 year ago",
    channel: "kbshorts",
    verified: true,
  },
  {
    id:3,
    title: "MongoDB tutorial",
    views: "1M",
    time: "6 months ago",
    channel: "kbshorts",
    verified: false,
  },
  {
    id:4,
    title: "Rust tutorial",
    views: "1.5M",
    time: "8 months ago",
    channel: "kbshorts",
    verified: true,
  }];
  // let channelName = "kbshorts";
  return (
    <div>
      <div style={{ display: "flex" , justifyContent:"center"}}>Yt Shorts</div>
      <div className="playlist">
        {
          obj.map(video=><Video
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
          ></Video>)
        }
      


        {/* <Video {...obj}></Video>
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
        ></Video> */}

      </div>
    </div>
  );
}

export default App;



