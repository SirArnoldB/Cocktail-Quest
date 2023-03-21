import React from "react";
import { Card, Row, Col, Button, Image } from "react-bootstrap";
import "../styles/CocktailAttributes.css";

const CocktailAttributes = ({ cocktail, handleBan }) => {
  const category = cocktail.strCategory;
  const alcoholic = cocktail.strAlcoholic;
  const glass = cocktail.strGlass;

  return (
    <>
      <Button
        className="attribute-btn"
        variant="secondary"
        onClick={() => handleBan("category", category)}
      >
        {category}
      </Button>
      <Button
        className="attribute-btn"
        variant="secondary"
        onClick={() => handleBan("alcoholic", alcoholic)}
      >
        {alcoholic}
      </Button>
      <Button
        className="attribute-btn"
        variant="secondary"
        onClick={() => handleBan("glass", glass)}
      >
        {glass}
      </Button>
    </>
  );
};

export default CocktailAttributes;
