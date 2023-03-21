const fetchCocktail = async (
  bannedIngredients,
  bannedCategories,
  bannedAlcoholic,
  bannedGlass,
  seenCocktails
) => {
  const COCKTAILDB_ENDPOINT = import.meta.env.VITE_COCKTAILDB_ENDPOINT;

  // Fetch all data from the API in parallel
  const [
    cocktailIngredientsData,
    cocktailCategoriesData,
    cocktailGlassesData,
    cocktailAlcoholicData,
  ] = await Promise.all([
    fetch(`${COCKTAILDB_ENDPOINT}list.php?i=list`).then((response) =>
      response.json()
    ),
    fetch(`${COCKTAILDB_ENDPOINT}list.php?c=list`).then((response) =>
      response.json()
    ),
    fetch(`${COCKTAILDB_ENDPOINT}list.php?g=list`).then((response) =>
      response.json()
    ),
    fetch(`${COCKTAILDB_ENDPOINT}list.php?a=list`).then((response) =>
      response.json()
    ),
  ]);

  // Create lists of valid options for each category
  const validCategories = cocktailCategoriesData.drinks
    .filter((category) => !bannedCategories.includes(category.strCategory))
    .map((category) => category.strCategory);
  const validGlasses = cocktailGlassesData.drinks
    .filter((glass) => !bannedGlass.includes(glass.strGlass))
    .map((glass) => glass.strGlass);
  const validAlcoholic = cocktailAlcoholicData.drinks
    .filter((alcoholic) => !bannedAlcoholic.includes(alcoholic.strAlcoholic))
    .map((alcoholic) => alcoholic.strAlcoholic);
  const validIngredients = cocktailIngredientsData.drinks
    .filter(
      (ingredient) => !bannedIngredients.includes(ingredient.strIngredient1)
    )
    .map((ingredient) => ingredient.strIngredient1);

  // Select a random category, alcoholic type, and glass type from the valid options
  const randomCategory =
    validCategories[Math.floor(Math.random() * validCategories.length)];
  const randomAlcoholic =
    validAlcoholic[Math.floor(Math.random() * validAlcoholic.length)];
  const randomGlass =
    validGlasses[Math.floor(Math.random() * validGlasses.length)];

  // Generate a string of up to 10 random ingredients from the valid options
  const randomIngredients = validIngredients
    .sort(() => 0.5 - Math.random())
    .slice(0, 10)
    .join(",");

  // Get a new cocktail from the API using the random ingredients, category, alcoholic type, and glass type filters
  const url =
    `${COCKTAILDB_ENDPOINT}filter.php?i=${randomIngredients}&c=${randomCategory}&a=${randomAlcoholic}&g=${randomGlass}`.replace(
      / /g,
      "%20"
    );
  const newCocktailsData = await fetch(url).then((response) => response.json());

  // Get a random cocktail from the list of cocktails that hasn't been seen before
  let newCocktailData;
  while (!newCocktailData || seenCocktails.includes(newCocktailData.idDrink)) {
    newCocktailData =
      newCocktailsData.drinks[
        Math.floor(Math.random() * newCocktailsData.drinks.length)
      ];
  }
  const newCocktailId = newCocktailData.idDrink;

  // Get the cocktail details from the new cocktail API endpoint
  const cocktailDetails = await fetch(
    `${COCKTAILDB_ENDPOINT}lookup.php?i=${newCocktailId}`
  );
  const cocktailDetailsData = await cocktailDetails.json();

  // Return the cocktail details
  return cocktailDetailsData.drinks[0];
};

export { fetchCocktail };
