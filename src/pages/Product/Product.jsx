import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import Cards from "../../Component/Cards/Cards";
import ProductTable from "../../Component/Tables/ProductTable"; // Import ProductTable
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DotsLoader from "../../Component/DotsLoader/DotsLoader";
import { getAllProducts } from "../../reduex/services/ProductServices/ProductService";
import CategoriesTable from "../../Component/Tables/CateogriesTable";
import AddProduct from "../../Component/Tables/AddProduct";


export default function Product() {
  const dispatch = useDispatch();
  const { Products } = useSelector((state) => state.product); // Ensure the correct state path
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await dispatch(getAllProducts());
      setLoading(false);
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) {
    return <DotsLoader />;
  }

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <Cards />
<div className="p-5" >
  <AddProduct/>
        <CategoriesTable />
          <ProductTable Products={Products} /> 
          </div>
      </div>
    </div>
  );
}