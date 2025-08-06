const VideoCard = (video)=>{
    const {snippet}= video?.video;
    const {medium}= snippet?.thumbnails;
    const {viewCount} = video?.video?.statistics;
    
    // console.log(video); 
    return (
        <div className="w-64 h46 m-2 shadow-lg border rounded-lg cursor-pointer hover:bg-gray-300" >
            <div className="w-64 h-40">
                <span className="absolute mt-32 ml-52 bg-gray-600 text-white px-[4px] opacity-80">00:00</span>
                <img className="w-64 h-40 rounded-lg" src={medium?.url} alt="videocard" ></img>
            </div>
            <div className="px-2">
                <h1 className="font-bold py-2">{snippet?.title}</h1>
                <h2 className="p-0">{snippet?.channelTitle}</h2>
                <h2 className="p-0">{viewCount} view • time</h2>
            </div>
        </div>
    )
}
export default VideoCard;