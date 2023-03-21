import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Image } from "react-bootstrap";
import { FaCocktail } from "react-icons/fa";
import CocktailAttributes from "./CocktailAttributes";
import CocktailIngredients from "./CocktailIngredients";
import CocktailInstructions from "./CocktailInstructions";
import "../styles/ExploreCard.css";

const ExploreCard = ({ cocktail, handleDiscoverClick, handleBan }) => {
  return (
    <Card className="mb-8">
      <Card.Body>
        {cocktail && (
          <>
            <Row>
              <Col>
                <Card.Title className="cocktail-name">
                  {cocktail.strDrink}
                </Card.Title>
              </Col>
            </Row>
            <Row className="cocktail-attributes">
              <Col>
                <CocktailAttributes cocktail={cocktail} handleBan={handleBan} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <CocktailIngredients
                  cocktail={cocktail}
                  handleBan={handleBan}
                />
              </Col>
              <Col xs={12} md={4}>
                <Image
                  className="cocktail-image"
                  src={cocktail.strDrinkThumb}
                  fluid
                />
              </Col>
              <Col xs={12} md={4}>
                <CocktailInstructions cocktail={cocktail} />
              </Col>
            </Row>
          </>
        )}
        <Row>
          <Col>
            <Button
              variant="primary"
              onClick={handleDiscoverClick}
              style={{
                backgroundColor: "black",
                border: "none",
                color: "aliceblue",
              }}
            >
              <FaCocktail
                style={{ fontSize: "2em", color: "red", marginRight: "1rem" }}
              />
              Discover
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ExploreCard;
