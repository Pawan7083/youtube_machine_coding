const VideoCard = (video)=>{
    const {snippet}= video?.video;
    const {medium}= snippet?.thumbnails;
    const {viewCount} = video?.video?.statistics;
    const {duration}= video?.video?.contentDetails;
    let [ , h = "0", m = "0", s = "0" ] = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if(m<10) m=0+m;
    if(s<10) s=0+s
    let time=(h==="0")?m+":"+s:h+":"+m+":"+s;
    return (
        <div className="w-72 h-80 m-2 shadow-lg border rounded-lg cursor-pointer hover:bg-gray-300" >
            <div className="w-64 h-40">
                <span className="absolute mt-32 ml-52 mr-4 bg-gray-600 text-white px-[4px] opacity-70 rounded-lg">
                    {
                        time
                    }
                </span>
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