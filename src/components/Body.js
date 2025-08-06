
import { Outlet } from "react-router";
import SideMenu from "./SideMenu";


const Body = ()=>{
        
    return (
        <div className="grid grid-flow-col">
            <div className="col-span-1 border-r-[1px] border-gray-500 pr-4"><SideMenu /></div>
            <div className="col-span-11  border-gray-500 ml-4"><Outlet/></div>

        </div>
        
    )
}
export default Body;