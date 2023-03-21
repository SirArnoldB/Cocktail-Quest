import { useState } from "react";
import { fetchCocktail } from "./utils/fetchCocktail";
import ExploreCard from "./components/ExploreCard";
import SeenCocktailsCard from "./components/SeenCocktailsCard";
import BannedListCard from "./components/BannedListCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

function App() {
  const [cocktail, setCocktail] = useState(null);
  const [seenCocktails, setSeenCocktails] = useState([]);
  const [bannedIngredients, setBannedIngredients] = useState([]);
  const [bannedCategories, setBannedCategories] = useState([]);
  const [bannedAlcoholic, setBannedAlcoholic] = useState([]);
  const [bannedGlass, setBannedGlass] = useState([]);

  const handleBan = (itemType, value) => {
    switch (itemType) {
      case "ingredient":
        // Add the ingredient to the banned list if it's not already there
        if (!bannedIngredients.includes(value)) {
          setBannedIngredients([...bannedIngredients, value]);
        }
        break;
      case "category":
        // Add the category to the banned list if it's not already there
        if (!bannedCategories.includes(value)) {
          setBannedCategories([...bannedCategories, value]);
        }
        break;
      case "alcoholic":
        // Add the alcoholic type to the banned list if it's not already there
        if (!bannedAlcoholic.includes(value)) {
          setBannedAlcoholic([...bannedAlcoholic, value]);
        }
        break;
      case "glass":
        // Add the glass type to the banned list if it's not already there
        if (!bannedGlass.includes(value)) {
          setBannedGlass([...bannedGlass, value]);
        }
        break;
      default:
        break;
    }
  };

  const handleUnban = (itemType, value) => {
    switch (itemType) {
      case "ingredient":
        // Remove the ingredient from the banned list
        setBannedIngredients(
          bannedIngredients.filter((ingredient) => ingredient !== value)
        );
        break;
      case "category":
        // Remove the category from the banned list
        setBannedCategories(
          bannedCategories.filter((category) => category !== value)
        );
        break;
      case "alcoholic":
        // Remove the alcoholic type from the banned list
        setBannedAlcoholic(
          bannedAlcoholic.filter((alcoholic) => alcoholic !== value)
        );
        break;
      case "glass":
        // Remove the glass type from the banned list
        setBannedGlass(bannedGlass.filter((glass) => glass !== value));
        break;
    }
  };

  const handleDiscoverClick = async () => {
    let newCocktail = null;

    do {
      // Fetch a new cocktail
      newCocktail = await fetchCocktail(
        bannedIngredients,
        bannedCategories,
        bannedAlcoholic,
        bannedGlass,
        seenCocktails
      );
    } while (seenCocktails.includes(newCocktail));

    setSeenCocktails([...seenCocktails, newCocktail]);
    setCocktail(newCocktail);
  };

  return (
    <div className="App">
      <Container>
        <Row className="cocktail-header">
          <h1>Cocktail Quest</h1>
          <h5>Discover Your Next Favorite Cocktail!</h5>
        </Row>
        <Row>
          <Col
            xs={{ span: 2 }}
            md={{ span: 2 }}
            lg={{ span: 2 }}
            className="seen-cocktails"
          >
            {cocktail && <SeenCocktailsCard seenCocktails={seenCocktails} />}
          </Col>
          <Col
            xs={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
            className="explore-card"
          >
            {" "}
            <ExploreCard
              cocktail={cocktail}
              handleDiscoverClick={handleDiscoverClick}
              handleBan={handleBan}
            />
          </Col>
          <Col
            xs={{ span: 2 }}
            md={{ span: 2 }}
            lg={{ span: 2 }}
            className="banned-list"
          >
            {" "}
            {cocktail && (
              <BannedListCard
                bannedIngredients={bannedIngredients}
                bannedCategories={bannedCategories}
                bannedAlcoholic={bannedAlcoholic}
                bannedGlass={bannedGlass}
                handleUnban={handleUnban}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
