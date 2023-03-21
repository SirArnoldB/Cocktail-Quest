import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const BannedListRow = ({ bannedList, itemType, handleUnban }) => {
  return (
    <>
      <Row xs={1} md={1} lg={1} className="g-4 banned-list-row">
        {bannedList.map((item, index) => (
          <Col key={index}>
            <Button
              variant="outline-danger"
              onClick={() => handleUnban(itemType, item)}
              block="true"
              className={itemType}
            >
              {item}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BannedListRow;
