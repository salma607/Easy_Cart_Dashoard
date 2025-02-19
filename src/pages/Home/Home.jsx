
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import Graphs from "../../Component/Graphs/Graphs";

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
          <div className=" flex justify-between mt-10 ">
            <div className="m-5">
              <Card sx={{ maxWidth: 150, border: "2px solid #7fb833" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="50"
                    image="/src/assets/Feedback.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Feedback
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      20
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="m-5">
              <Card sx={{ maxWidth: 150, border: "2px solid #7fb833" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="50"
                    image="/src/assets/Feedback.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Feedback
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      20
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="m-5">
              <Card sx={{ maxWidth: 150, border: "2px solid #7fb833" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="50"
                    image="/src/assets/Feedback.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Feedback
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      20
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="m-5">
              <Card sx={{ maxWidth: 150, border: "2px solid #7fb833" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="50"
                    image="/src/assets/Feedback.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Feedback
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      20
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="m-5">
              <Card sx={{ maxWidth: 150, border: "2px solid #7fb833" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="50"
                    image="/src/assets/Feedback.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Feedback
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      20
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        <Graphs />
      </div>
    </div>
  );
}
