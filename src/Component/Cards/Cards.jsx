import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import { useEffect, useState } from "react";
import axios from "axios";

const iconSize = 80; // Adjust icon size for better responsiveness

const API_URL = "https://shehab123.pythonanywhere.com/product/statistics/";

export default function Cards() {
  const [stats, setStats] = useState({
    Categories: 0,
    Products: 0,
    Rates: 0,
    Customers: 0,
    Feedback: 0,
    Carts: 0,
    Orders: 0,
    Revenue: 0,
  });

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        setLoading(true); // Start loading
        setError(""); // Clear previous errors

        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in.");
          return;
        }

        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(response.data);
      } catch (error) {
        setError("Failed to fetch data. Please try again.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchStatistics();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner or message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <div className="flex justify-center items-center m-2">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 p-4">
        <Card sx={{ border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <TextsmsOutlinedIcon
              sx={{ fontSize: iconSize, color: "#76ab2f" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="div">
                Feedback
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "18px" }}
              >
                {stats.Feedback}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <TrendingUpRoundedIcon
              sx={{ fontSize: iconSize, color: "#76ab2f" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="div">
                Rates
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "18px" }}
              >
                {stats.Rates}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <ShoppingCartCheckoutRoundedIcon
              sx={{ fontSize: iconSize, color: "#76ab2f" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="div">
                Carts
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "18px" }}
              >
                {stats.Carts}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <PeopleAltRoundedIcon
              sx={{ fontSize: iconSize, color: "#76ab2f" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="div">
                Customers
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "18px" }}
              >
                {stats.Customers}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <MonetizationOnRoundedIcon
              sx={{ fontSize: iconSize, color: "#76ab2f" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="div">
                Revenue
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "18px" }}
              >
                {stats.Revenue}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <Inventory2RoundedIcon
              sx={{ fontSize: iconSize, color: "#76ab2f" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="div">
                Orders
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "18px" }}
              >
                {stats.Orders}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}