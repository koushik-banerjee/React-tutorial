import "./App.css";
import Video from "./component/Video";
import obj from "./data/data"
function App() {

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
      {/* 👉for generating a key in different webpages we can use for example:- crypto.randomUUID and for external library we can install uuid from npm */}


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



