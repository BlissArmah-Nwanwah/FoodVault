import React, { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const ProductsPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getDatas() {
      try {
        const resp = await axios.get(`${url}${id}`)
      const { drinks } = resp.data;
        if (drinks) {
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
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <div>
        {name}
        {image}
      </div>
    </div>
  );
};

export default ProductsPage;
