import React from "react";
import { Card, Row, Col, Button, Image } from "react-bootstrap";
import "../styles/CocktailIngredients.css";

const CocktailIngredients = ({ cocktail, handleBan }) => {
  return (
    <Card className="ingredients-card">
      <Card.Header className="ingredients-header">Ingredients</Card.Header>
      <Card.Body className="ingredients-card-body">
        <Row>
          {Object.keys(cocktail)
            .filter(
              (key) =>
                key.includes("Ingredient") &&
                cocktail[key] &&
                cocktail[`strMeasure${key.slice(13)}`]
            )
            .map((key, index) => (
              <React.Fragment key={index}>
                <Col sm={6} md={6}>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleBan("ingredient", cocktail[key])}
                    className="mb-2"
                    block="true"
                  >
                    {cocktail[key]}
                  </Button>
                </Col>
                <Col sm={6} md={6}>
                  <Button
                    variant="outline-secondary"
                    className="mb-2"
                    block="true"
                  >
                    {cocktail[`strMeasure${key.slice(13)}`]}
                  </Button>
                </Col>
              </React.Fragment>
            ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CocktailIngredients;
