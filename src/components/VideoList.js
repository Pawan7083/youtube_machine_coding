import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { YOUTUBE_API_URL } from "../utils/constraint";
import VideoCard from "./VideoCard";

const VideoList = ()=>{
    const [videos ,setVideo]= useState([]);

    useEffect(()=>{
        getVideo();
    },[])
    const getVideo = async() => {
        const data = await fetch(YOUTUBE_API_URL);
        const jsonData= data.json();
        const jsonDataPromise= await jsonData;
        const {items}= jsonDataPromise;
        setVideo(items);
        // console.log(jsonData);
        console.log(items)
    }
    

    return (videos.length===0) ? <Shimmer/>:  (
        <div className="flex flex-wrap"> 
            {
                videos.map((video)=>(
                    <VideoCard key={video.id} video={video}/>
                ))
            }
        </div>
    )
}
export default VideoList;