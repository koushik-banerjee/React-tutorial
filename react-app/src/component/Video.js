import "./Video.css";
function Video({ id, title, channel = "kbshorts", views, time, verified }) {
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
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />   {/*use of string literal*/}
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {/* {verified ? "✅" : ""} */}
          {verified && "✅"}  {/* using short circuting for checkmarks */}

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
