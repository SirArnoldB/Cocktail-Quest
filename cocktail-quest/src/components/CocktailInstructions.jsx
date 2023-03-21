import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { getLanguageOptions } from "../utils/getLanguageOptions";
import "../styles/CocktailInstructions.css";

const CocktailInstructions = ({ cocktail }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languageOptions = getLanguageOptions(cocktail);

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      <Card>
        <Card.Header className="instructions-header">
          <div className="d-flex justify-content-between align-items-center">
            <div>Instructions</div>
            <div>
              <form>
                <select value={selectedLanguage} onChange={handleChange}>
                  {languageOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="instructions-card-body">
          <div>{cocktail[`strInstructions${selectedLanguage}`]}</div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CocktailInstructions;
