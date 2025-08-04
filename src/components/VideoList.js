import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const VideoList = ()=>{
    const [video ,setVideo]= useState([]);

    useEffect(()=>{
        getVideo();
    },[])
    const API_KEY="AIzaSyCD9Dx93IG8dRRIdQU87HaKyRgjejvrpnA";

    const getVideo= async()=>{
        const data = fetch(`https://www.googleapis.com/youtube/v3&type=video&key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const videos = data.items;
    console.log(videos);
  })
  .catch(error => console.error('Error:', error));
        console.log(data);
    }

    return (video.length===0) ? <Shimmer/>:  (
        <div>This is video List.</div>
    )
}
export default VideoList;