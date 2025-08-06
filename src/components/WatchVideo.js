import { useSearchParams } from "react-router";

const WatchVideo = ()=>{

    const [getQueryParam]=useSearchParams();
    const getParam= getQueryParam.get("v");
    console.log(getParam);

    return(
        <iframe width="560" height="315" 
            src={"https://www.youtube.com/embed/"+getParam} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        
        </iframe>
    )
}
export default WatchVideo;