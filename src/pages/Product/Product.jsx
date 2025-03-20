import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import Cards from "../../Component/Cards/Cards";
import Tables from "../../Component/Tables/Tables";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../reduex/services/ProductServices/ProductService";
export default function Product() {
  const dispatch = useDispatch();
  const { Products } = useSelector((state) => state.product); // Ensure the correct state path

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // const refreshPageContent = () => {
  //   dispatch(getAllProducts());
  // };

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <Cards />
        <div className="pb-5">
          <Tables Products={Products} /> {/* Pass Products to Tables */}
        </div>
      </div>
    </div>
  );
}
