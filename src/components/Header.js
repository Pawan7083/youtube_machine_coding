const Header = ()=>{

    return (
        <div className="grid grid-flow-col p-4 shadow-lg ">
            <div className="col-span-1 ">
                <div className="flex p-2">
                <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
                <img className="h-8 w-40 ml-4 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo" ></img>
                </div>
            </div>
            <div className="col-span-9">
                <input className="border border-gray-400 text-xl w-2/3 p-2 pl-4 rounded-l-3xl" type="text" ></input>
                <button className="border border-gray-400 px-8 border-l-0 py-2 text-xl rounded-r-3xl hover:bg-gray-200"><i className="fa-solid fa-magnifying-glass"></i></button>    
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