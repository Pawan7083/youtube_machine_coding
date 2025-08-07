import { useDispatch, useSelector } from "react-redux";
import { enableToggleMenu } from "../utils/toggleMenuSlice";
import { YOUTUBE_SEARCH_URL } from "../utils/constraint";
import { useEffect,  useState } from "react";
import { cacheSearch } from "../utils/searchSlice";

const Header = ()=>{

    const [searchQuery, setSearchQuery]= useState("");
    const [suggestion, setSuggestion]= useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    
    const dispatch= useDispatch();
    const selector= useSelector((store)=>store.search);
    console.log(selector);
    
    const handlerMenuToggle = ()=>{
        dispatch(enableToggleMenu());
    }

    useEffect(()=>{
        const timer= setTimeout(() => {
            if(selector[searchQuery]){   
                setSuggestion(selector[searchQuery]);
            }
            else
            getSuggetion();
            
        }, 200);
        return ()=>{
            clearTimeout(timer);
        }

    },[searchQuery]);
    
    const getSuggetion = async() =>{
        
        const data= await fetch(YOUTUBE_SEARCH_URL+searchQuery);
        const jsonData= await data.json();
        setSuggestion(jsonData[1]);
        dispatch(cacheSearch({[searchQuery]:jsonData[1]}))
        // console.log(jsonData);
    }
    return (
        <div className="grid grid-flow-col p-4 shadow-lg ">
            <div className="col-span-1 ">
                <div className="flex p-2">
                <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={handlerMenuToggle}></i>
                <img className="h-8 w-40 ml-4 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo" ></img>
                </div>
            </div>
            <div className="col-span-9">
                <input  className="border border-gray-400 text-xl w-2/3 p-2 pl-4 rounded-l-3xl" type="text" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)}></input>
                <button className="border border-gray-400 px-8 border-l-0 py-2 text-xl rounded-r-3xl hover:bg-gray-200"><i className="fa-solid fa-magnifying-glass"></i></button>  
                {showSuggestion && <div className="fixed bg-white  border-gray-400 text-xl w-[37rem] p-2 pl-4 rounded-lg z-50 shadow-lg">
                    <ul className="">
                        {suggestion.map((suggestion)=>(
                            <li className="cursor-default hover:bg-gray-100 px-5 py-2 rounded-lg" key={suggestion}>{suggestion}</li>
                        ))}
                       
                        
                    </ul>
                 </div>}
            </div>
            <div className="col-span-1">
                <div className="p-2   text-center">
                    <span className="border border-gray-400 px-4 py-2 rounded-2xl"> <i className="fa-solid fa-plus text"></i> Create</span>
                <i className="fa-solid fa-bell mx-4 text-3xl"></i>
                <i className="fa-solid fa-circle-user text-3xl"></i>
                </div>
            </div>
            
            
        </div>
    )
}
export default Header;