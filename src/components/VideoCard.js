const VideoCard = (video)=>{
    const {snippet}= video?.video;
    const {medium}= snippet?.thumbnails;
    console.log(medium?.url);
    console.log(video); 
    return (
        <div className="w-64 h46 m-2 shadow-lg border rounded-lg" >
            <div>
                <img className="w-64 h-40 rounded-lg" src={medium?.url} alt="videocard" ></img>
            </div>
            <div>
                <h1 className="font-bold py-2">{snippet?.title}</h1>
                <h2 className="p-0">name</h2>
                <h2 className="p-0">view & time</h2>
            </div>
        </div>
    )
}
export default VideoCard;