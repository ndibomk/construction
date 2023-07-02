import { Link } from "react-router-dom";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
// import Link from '@mui/joy/Link';
import Favorite from "@mui/icons-material/Favorite";
import axios from "axios";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const Home = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  const [users, setUsers] = React.useState([]);
  const [social, setSocial] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://hustle-kenya-7azi.onrender.com/products`
        );
        res.data.sort(compare);
        // const result = res.data.filter((_, index) => index < 30);
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://hustle-kenya-7azi.onrender.com/users`
        );
        res.data.sort(compare);

        const result = res.data.filter((_, index) => index < 4);
        setSocial(result);
        console.log("socials", social);
        lo;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Stack
            style={{
              display: "flex",
              marginTop: "5rem",
              alignItems: "center",
              justifyContent: "center",
            }}
            spacing={1}
          >
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={100} height={100} />
            <Skeleton variant="rectangular" width={310} height={100} />
            <Skeleton variant="rounded" width={310} height={100} />
          </Stack>
        </>
      ) : (
        <div className="home-seperate">
          <div className="main-home">
            <div className="main-left">
              <div className="home-top">
                <h1>Hustle Kenya</h1>
                <h1>
                  {" "}
                  Welcome to Hustle Kenya ,
                  <br />
                  Buy and Sell second hand Items Easily
                </h1>
                <h4>Items Have upto 30% offer</h4>
              </div>
              <div className="main-bottom">
                <Link to="/register">
                  <button>
                    {!user ? <>Get started Today</> : <>Explore</>}
                  </button>
                </Link>
              </div>
            </div>
            <div className="main-right">
              <img
                style={{ border: "none" }}
                src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
            </div>

            <div style={{ marginTop: "1rem" }} className="new-arrivals">
              {users.map((i) => {
                const { images } = i;
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`single-product/${i._id}`}
                  >
                    <Card variant="outlined" sx={{ width: 260 }}>
                      <CardOverflow>
                        <AspectRatio ratio="2">
                          <img
                            style={{ objectFit: "contain", width: "100%" }}
                            src={images[0]?.url}
                            loading="lazy"
                            alt=""
                          />
                        </AspectRatio>
                        <IconButton
                          aria-label="Like minimal photography"
                          size="md"
                          variant="solid"
                          color="danger"
                          sx={{
                            position: "absolute",
                            zIndex: 2,
                            borderRadius: "50%",
                            right: "1rem",
                            bottom: 0,
                            transform: "translateY(50%)",
                          }}
                        >
                          <Favorite />
                        </IconButton>
                      </CardOverflow>
                      <div style={{ display: "flex" }}>
                        <CardContent>
                          <Typography level="h2" fontSize="md">
                            {i.item}
                          </Typography>
                          <Typography level="body2" sx={{ mt: 0.5 }}>
                            ksh {i.discountPrice}
                          </Typography>
                          <Typography>
                            discount {i.discountPercentage}%
                          </Typography>
                          <Typography
                            className="home-line"
                            level="body2"
                            sx={{ mt: 0.5 }}
                          >
                            ksh {i.price}
                            <div className="dis-lines"></div>
                          </Typography>
                        </CardContent>
                        <CardContent>
                          <Typography level="h2" fontSize="md">
                            <Link
                              href="#multiple-actions"
                              overlay
                              underline="none"
                            >
                              {/* {i.category} */}
                            </Link>
                          </Typography>
                          <Typography level="body2" sx={{ mt: 0.5 }}>
                            <Link href="#multiple-actions">{i.location}</Link>
                          </Typography>
                        </CardContent>
                      </div>

                      <CardOverflow
                        variant="soft"
                        sx={{ bgcolor: "background.level1" }}
                      >
                        <Divider inset="context" />
                        <CardContent orientation="horizontal">
                          {/* <Typography */}
                          {/* // level="body3" */}
                          {/* // sx={{ fontWeight: "md", color: "text.secondary" }} */}
                          {/* // > */}
                          {/* 6.3k likes */}
                          {/* </Typography> */}
                          <Divider orientation="vertical" />
                          <Typography
                            level="body3"
                            sx={{ fontWeight: "md", color: "text.secondary" }}
                          >
                            {i.age} months old
                          </Typography>
                        </CardContent>
                        <button className="buy">buy</button>
                      </CardOverflow>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="social-users">
            <h6>users</h6>
            <div className="users-location">
              {social?.map((i) => {
                return (
                  <>
                    {user && (
                      <Link to={`/social-profile/${i._id}`}>
                        <div className="users-location-details">
                          <img
                            style={{
                              width: "3rem",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                            src={i.img}
                            alt=""
                          />
                          <h6>{i.name}</h6>
                        </div>
                      </Link>
                    )}
                  </>
                );
              })}
              {user && (
                <Link to="/social">
                  <h6>More</h6>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
