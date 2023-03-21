import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import BannedListRow from "./BannedListRow";
import "../styles/BannedListCard.css";

const BannedListCard = ({
  bannedIngredients,
  bannedCategories,
  bannedAlcoholic,
  bannedGlass,
  handleUnban,
}) => {
  return (
    <Card className="mb-2">
      <Card.Header className="banned-header">Banned List</Card.Header>
      <Card.Body className="banned-list-card-body">
        <BannedListRow
          bannedList={bannedIngredients}
          itemType="ingredient"
          handleUnban={handleUnban}
        />
        <BannedListRow
          bannedList={bannedCategories}
          itemType="category"
          handleUnban={handleUnban}
        />
        <BannedListRow
          bannedList={bannedAlcoholic}
          itemType="alcoholic"
          handleUnban={handleUnban}
        />
        <BannedListRow
          bannedList={bannedGlass}
          itemType="glass"
          handleUnban={handleUnban}
        />
      </Card.Body>
    </Card>
  );
};

export default BannedListCard;
