
import { LineChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import { Input } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import { PieChart } from "@mui/x-charts/PieChart";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import Sidebar from "./components/Sidebar/Side";


const settings = {
  width: 450,
  height: 200,
  value: 25,
};

export default function home() {
  return (
    
    <div className=" h-full">
      <div className="flex">
        <div className="flex flex-col w-full ">
          <div className="bg-lime-100 border-4 border-red-500 rounded-md">
            <div className="m-5 flex justify-center ">
              <Input
                sx={{ width: "20%" }}
                placeholder="Search"
                startAdornment={<SearchIcon />}
              />
            </div>
<div>
  <Sidebar/>
</div>
            <div className=" flex justify-between  ">
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
          </div>
          <div className=" m-5 p-2 flex justify-center float-right border-4 border-lime-500  rounded-md shadow-xl overflow-hidden">
            <div className="m-4 p-6 ">
              <BarChart
                series={[
                  { data: [35, 44, 24, 34] },
                  { data: [51, 6, 49, 30] },
                  { data: [15, 25, 30, 50] },
                  { data: [60, 50, 15, 25] },
                ]}
                height={290}
                xAxis={[
                  {
                    colorMap: {
                      type: "ordinal",
                      colors: ["#056b39", "#7fb833", "#16a34a", "#22c55e"],
                    },
                    data: ["veg", "fruits", "beverges", "Dairy"],
                    scaleType: "band",
                  },
                ]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
              <div className="m-4 p-6 ">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 40, label: "fruits" },
                        { id: 1, value: 25, label: "veg" },
                        { id: 2, value: 35, label: "dairy" },
                        { id: 0, value: 15, label: "beverges" },
                        { id: 2, value: 20, label: "bakery" },
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
            </div>
            <div className=" m-4 p-6">
              <LineChart
                xAxis={[{ data: [0, 2, 4, 6, 8, 10] }]}
                series={[
                  {
                    color: "#22c55e",
                    data: [2, 4, 4, 6, 1.5, 5],
                  },
                ]}
                width={500}
                height={300}
              />
              <div className="m-4 p-6 flex justify-center">
                <Gauge
                  {...settings}
                  cornerRadius="50%"
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 40,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: "#52b202",
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                      fill: theme.palette.text.disabled,
                    },
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
