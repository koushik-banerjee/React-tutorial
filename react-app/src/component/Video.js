import "./Video.css";
function Video({ title, channel = "kbshorts", views, time, verified }) {
  //puting a default value in prop

  // lengthy process for conditional
  // let channelJSX;
  // if(verified){
  //   channelJSX=<div className="channel">{channel}✅</div>
  // }else{
  //   channelJSX= <div className="channel">{channel}</div>
  // }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {/* {verified ? "✅" : ""} */}
          {verified && "✅"}

        </div>

        {/* {channelJSX} */}
        {/* { verified ? <div className="channel">{channel}✅</div> : <div className="channel">{channel}</div>} */}

        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
