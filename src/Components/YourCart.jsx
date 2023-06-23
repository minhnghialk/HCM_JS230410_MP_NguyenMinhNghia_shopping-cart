import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/Product/Action";

export default function YourCart() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={6}>
              <Card.Title
                style={{
                  backgroundColor: "#F0CDD2",
                  color: "red",
                  height: "50px",
                  lineHeight: "50px",
                }}
              >
                Your Cart
              </Card.Title>
            </th>
          </tr>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>{selectedProduct.name}</td>
            <td>{selectedProduct.price} USD</td>
            <td>
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
            </td>
            <td>{selectedProduct.price} USD</td>
            <td>
              <Button variant="info" style={{ color: "white" }}>
                Update
              </Button>{" "}
              <Button variant="danger">Delete</Button>{" "}
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  There are <span style={{ fontWeight: "bold" }}>1</span> item
                  in your shopping cart.
                </span>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "500px",
                  }}
                >
                  Total: {selectedProduct.price} USD
                </span>
              </div>
            </td>
          </tr> */}

          {/* {cartItems.map((selectedProduct, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{selectedProduct.name}</td>
              <td>{selectedProduct.price} USD</td>
              <td>
                <select id="cars">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>{" "}
              </td>
              <td>{selectedProduct.price} USD</td>
              <td>
                <Button variant="info" style={{ color: "white" }}>
                  Update
                </Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={6}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  There are{" "}
                  <span style={{ fontWeight: "bold" }}>{cartItems.length}</span>{" "}
                  item in your shopping cart.
                </span>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "500px",
                  }}
                >
                  Total:{" "}
                  {cartItems.reduce((total, item) => total + item.price, 0)} USD
                </span>
              </div>
            </td>
          </tr> */}

          {cartItems.map((selectedProduct, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{selectedProduct.name}</td>
              <td>{selectedProduct.price} USD</td>
              <td>
                <select id="quantitySelect">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </td>
              <td>{selectedProduct.price} USD</td>
              <td>
                <Button variant="info" style={{ color: "white" }}>
                  Update
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(selectedProduct.id)}
                >
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={6}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  There are{" "}
                  <span style={{ fontWeight: "bold" }}>{cartItems.length}</span>{" "}
                  items in your shopping cart.
                </span>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "500px",
                  }}
                >
                  Total:{" "}
                  {cartItems.reduce((total, item) => total + item.price, 0)} USD
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
