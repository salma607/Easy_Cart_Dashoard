
import Chat from "../../Component/Chat/Chat";
import Header from "../../Component/Header/Header"
import Sidebar from "../../Component/Sidebar/Side";



export default function HelpCenter() {
    return(
        <div className="flex  ">
             <div>
               <Sidebar />
             </div>
             <div className="w-full  ">
                 <Header />
                 <Chat/>
               </div>
            </div>
    );
}