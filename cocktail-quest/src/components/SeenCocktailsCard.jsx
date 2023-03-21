import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../styles/SeenCocktailsCard.css";

const SeenCocktailsCard = ({ seenCocktails }) => {
  return (
    <Card className="mb-2">
      <Card.Header className="seen-header">Discovered Cocktails</Card.Header>
      <Card.Body className="seen-card-body">
        <Row xs={1} md={1} lg={1} className="g-4">
          {seenCocktails.map((cocktail, index) => (
            <Col key={index}>
              <Card>
                <Card.Img variant="top" src={cocktail.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{cocktail.strDrink}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SeenCocktailsCard;
