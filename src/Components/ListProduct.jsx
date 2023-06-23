import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Product/Action";

export default function ListProduct() {
  const listProduct = {
    products: [
      {
        id: "1",
        name: "Pizza",
        image: "images/pizza.jpg",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 12,
        quantity: 10,
      },

      {
        id: "2",
        name: "Hamburger",
        image: "images/Hamburger.jpg",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 16,
        quantity: 0,
      },

      {
        id: "3",
        name: "Bread",
        image: "images/bread.jpg",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 13,
        quantity: 8,
      },

      {
        id: "4",
        name: "Cake",
        image: "images/Cake.jpg",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 14,
        quantity: 6,
      },
    ],
  };

  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <div>
      <Card style={{ width: "38rem" }}>
        <Card.Title
          style={{
            backgroundColor: "#1A5190",
            color: "white",
            height: "50px",
            lineHeight: "50px",
          }}
        >
          List Products
        </Card.Title>

        <ListGroup variant="flush">
          {/* <ListGroup.Item>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    style={{ width: "100px", mar }}
                    src="/images/pizza.jpg
                  "
                    rounded
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Card.Title>Pizza</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </Card.Text>
                </Col>
                <Col xs={6} md={4}>
                  <label for="cars">Quantity: </label> <br></br>
                  <select id="cars">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                    <option value="audi">5</option>
                    <option value="audi">6</option>
                    <option value="audi">7</option>
                    <option value="audi">8</option>
                    <option value="audi">9</option>
                    <option value="audi">10</option>
                  </select>{" "}
                  <br></br> <br></br>
                  <label for="cars">Price: </label> <br></br>
                  <Button variant="danger">12 USD</Button>{" "}
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>

          <ListGroup.Item>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    style={{ width: "100px" }}
                    src="/images/Hamburger.jpg
                  "
                    rounded
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Card.Title>Hamburger</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </Card.Text>
                </Col>
                <Col xs={6} md={4}>
                  <label for="cars">Quantity: </label> <br></br>
                  <select id="cars">
                    <option value="volvo">0</option>
                  </select>{" "}
                  <br></br> <br></br>
                  <label for="cars">Price: </label> <br></br>
                  <Button variant="danger" disabled>
                    16 USD
                  </Button>{" "}
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>

          <ListGroup.Item>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    style={{ width: "100px" }}
                    src="/images/bread.jpg
                  "
                    rounded
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Card.Title>Bread</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </Card.Text>
                </Col>
                <Col xs={6} md={4}>
                  <label for="cars">Quantity: </label> <br></br>
                  <select id="cars">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                    <option value="audi">5</option>
                    <option value="audi">6</option>
                    <option value="audi">7</option>
                    <option value="audi">8</option>
                  </select>{" "}
                  <br></br> <br></br>
                  <label for="cars">Price: </label> <br></br>
                  <Button variant="danger">13 USD</Button>{" "}
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>

          <ListGroup.Item>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    style={{ width: "100px" }}
                    src="/images/Cake.jpg
                  "
                    rounded
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Card.Title>Cake</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </Card.Text>
                </Col>
                <Col xs={6} md={4}>
                  <label for="cars">Quantity: </label> <br></br>
                  <select id="cars">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                    <option value="audi">5</option>
                    <option value="audi">6</option>
                  </select>{" "}
                  <br></br> <br></br>
                  <label for="cars">Price: </label> <br></br>
                  <Button variant="danger">14 USD</Button>{" "}
                </Col>
              </Row>
            </Container>
          </ListGroup.Item> */}

          {listProduct.products.map((product) => (
            <ListGroup.Item key={product.id}>
              <Container>
                <Row>
                  <Col xs={6} md={4}>
                    <Image
                      style={{ width: "150px", marginTop: "50px" }}
                      src={product.image}
                      rounded
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.title}</Card.Text>
                  </Col>
                  <Col xs={6} md={4}>
                    <label for="cars">Quantity: </label> <br></br>
                    <select id="cars">
                      {Array.from({ length: product.quantity }, (_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>{" "}
                    <br></br> <br></br>
                    <label for="cars">Price: </label> <br></br>
                    <Button
                      variant="danger"
                      onClick={() => handleAddProduct(product)}
                      disabled={product.quantity === 0}
                    >
                      {product.price} USD
                    </Button>{" "}
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}
