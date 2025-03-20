import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import Graphs from "../../Component/Graphs/Graphs";
import Cards from "../../Component/Cards/Cards";

export default function home() {
  return (
    <div className="flex ">
      <div>
        <Sidebar />
      </div>
      <div className="w-full  ">
        <div className="">
          <Header />
        </div>
        <Cards/>
        <Graphs />
      </div>
    </div>
  );
}
