import { useState, useEffect } from "react";
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import Graphs from "../../Component/Graphs/Graphs";
import Cards from "../../Component/Cards/Cards";
import DotsLoader from "../../Component/DotsLoader/DotsLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading (e.g., fetching data, rendering components, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after the simulated delay
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (isLoading) {
    // Show the loader while the page is loading
    return (
      <div className="flex justify-center items-center h-screen">
        <DotsLoader />
      </div>
    );
  }

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="">
          <Header />
        </div>
        <Cards />
        <Graphs />
        {/* Remove DotsLoader from here as the page has already loaded */}
      </div>
    </div>
  );
}