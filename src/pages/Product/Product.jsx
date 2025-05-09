import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import ProductTable from "../../Component/Tables/ProductTable"; // Import ProductTable
import { getAllProducts } from "../../reduex/services/ProductServices/ProductService";
import AddProduct from "../../Component/Tables/AddProduct";
import DotsLoader from "../../Component/DotsLoader/DotsLoader"; // Import DotsLoader

export default function Product() {
  const dispatch = useDispatch();
  const { Products } = useSelector((state) => state.product); // Ensure the correct state path
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(getAllProducts());
      setIsLoading(false); // Set loading to false after fetching products
    };

    fetchProducts();
  }, [dispatch]);

  if (isLoading) {
    // Show the loader while fetching products
    return (
      <div className="flex justify-center items-center h-screen">
        <DotsLoader />
      </div>
    );
  }

  return (
    <div className="flex ">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <div className="p-5">
          <AddProduct />
          <ProductTable Products={Products} />
        </div>
      </div>
    </div>
  );
}