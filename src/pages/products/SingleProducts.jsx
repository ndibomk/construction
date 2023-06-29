import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Col } from "react-bootstrap";
const SingleProducts = () => {
const [users, setUsers] = React.useState([]);
  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  const { id } = useParams();
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://hustle-kenya-7azi.onrender.com/products/${id}`
        );
        //   res.data.sort(compare);
        // const result = res.data.filter((_, index) => index < 30);
        setUsers(res.data);
        console.log("user", users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const images = users.images?.map((picture) => (
    <img
      className="product__carousel--image"
      src={picture.url}
      onDragStart={users.imgaes}
    />
  ));
  const handleOnDragStart = (e) => e.preventDefault();

  const { image } = users;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {/* <Container className="pt-4" style={{ position: "relative" }}> */}
        {/* <Row> */}
        <div className="images">
          {users?.images?.slice(0, 1).map((image) => {
            return <img style={{ width: "20rem" }} src={image?.url} alt="" />;
          })}
        </div>

        <Card style={{ width: "18rem", marginTop: "2rem" }}>
          {/* <Card.Img variant="top" src={images[0].url}/> */}
          <Card.Body>
            <Card.Title>{users.item} </Card.Title>
            <Card.Text>
              <p>New Price {users.discountPrice} ksh</p>
              <p> discount {users.discountPercentage}%</p>

              <p className="disPrice">
                ksh{users.price} <div className="dis-line"></div>{" "}
              </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <p>{users.location}</p>
                <p>{users.age} months old</p>
              </div>
            </Card.Text>
            <Card.Footer>
              <p>{users.description}</p>
              <Button style={{ width: "100%" }} variant="primary">
                Buy
              </Button>
              <a
                style={{ color: "black" }}
                href={`https://wa.me/${users.tell}`}
              >
                <Button
                  style={{ width: "100%", marginTop: "1rem" }}
                  variant="primary"
                >
                  Whatsapp
                </Button>
              </a>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginTop: "2rem", padding: "1rem" }}>
          <Card.Title>Specifications/Features</Card.Title>
          <ul>
            <li>{users.specifications}</li>
            <li>{users.specifications1}</li>
            <li>{users.specifications2}</li>
            <li>{users.specifications3}</li>
            <li>{users.specifications4}</li>
          </ul>
        </Card>
      </div>
      <h3 style={{ textAlign: "center" }}> More Images</h3>

      <div className="images">
        {users?.images?.map((image) => {
          return <img style={{ width: "20rem" }} src={image?.url} alt="" />;
        })}
      </div>
    </div>
  );
};

export default SingleProducts;
