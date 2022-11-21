import React, { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import { useParams, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import Row from "react-bootstrap/esm/Row";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const ProductsPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getDatas() {
      try {
        const resp = await fetch(`${url}${id}`)
      const data = await resp.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newData = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setData(newData);
        } else {
          setData(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getDatas();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!data) {
    return (
      <div>
        <h2>No data available to be displayed</h2>
      </div>
    );
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    data;
  return (
    <div>
      <Link to="/" className="btn btn-primary justify-content-center">
        back home
      </Link>
      <Row xs={1} md={3} className="mt-5 justify-content-center">
      <Col>
      <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      {info}
      </Card.Text>
      <Link to={`products/${id}`}>Details</Link>
      </Card.Body>
      </Card>
      </Col>
      </Row>
    </div>
  );
};

export default ProductsPage;
