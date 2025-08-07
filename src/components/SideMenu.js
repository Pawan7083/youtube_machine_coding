import { useEffect } from "react";
import { useSelector } from "react-redux";

const SideMenu = ()=>{

    const selector= useSelector((store)=>store.menuToggle.toggleMenu);

    return (
        <div>
           <div className="px-4 py-2 rounded-2xl my-2 hover:bg-gray-400 cursor-pointer"><span className=""> <i className="fa-solid fa-house text"></i>{selector?"Shorts":""}</span></div>
           <div className="px-4 py-2 rounded-2xl my-2 hover:bg-gray-400 cursor-pointer"><span className=""> <i className="fa-solid fa-plus text"></i>{selector?"Shorts":""}</span></div>
           <div className="px-4 py-2 rounded-2xl my-2 hover:bg-gray-400 cursor-pointer"><span className=""> <i className="fa-solid fa-plus text"></i>{selector?"Subscribers":""}</span></div>
           <div className="px-4 py-2 rounded-2xl my-2 hover:bg-gray-400 cursor-pointer"><span className=""> <i className="fa-solid fa-plus text"></i>{selector?"Home":""}</span></div>
           
           

           
        </div>
    )
}
export default SideMenu;