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

const iconSize = 120; // Define a constant size for the icons

export default function home() {
  return (
    <div className="flex justify-center items-center m-2">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 m-10 gap-20">
        <Card sx={{ maxWidth: 150, border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <TextsmsOutlinedIcon sx={{ fontSize: iconSize, color: "#76ab2f" }} />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                Feedback
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                7855
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 150, border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <TrendingUpRoundedIcon sx={{ fontSize: iconSize, color: "#76ab2f" }} />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                Rates
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                1558 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 150, border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <ShoppingCartCheckoutRoundedIcon
              sx={{ fontSize: iconSize, color: "#76ab2f" }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                Carts
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                150
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 150, border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <PeopleAltRoundedIcon sx={{ fontSize: iconSize, color: "#76ab2f" }} />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                Customers
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                8556
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 150, border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <MonetizationOnRoundedIcon sx={{ fontSize: iconSize, color: "#76ab2f" }} />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                Revenue
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                20000,82 ₤
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 150, border: "2px solid #e7e5e4" }}>
          <CardActionArea>
            <Inventory2RoundedIcon sx={{ fontSize: iconSize, color: "#76ab2f" }} />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                 Orders
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                2085
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}