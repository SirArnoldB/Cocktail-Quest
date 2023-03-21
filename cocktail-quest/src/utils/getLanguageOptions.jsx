import React from "react";

const getLanguageOptions = (cocktail) =>
  Object.keys(cocktail)
    // filter out keys that don't contain the 'strInstructions' prefix or have falsy values
    .filter((key) => key.includes("strInstructions") && cocktail[key])
    .map((key) => {
      // if the key is the default 'strInstructions', use the English language code
      if (key === "strInstructions") {
        return { label: "EN", value: "" };
      }
      // extract the language code from the key
      const languageCode = key.slice(15);
      // use the language code as the value, and convert it to uppercase for the label
      return { label: languageCode.toLocaleUpperCase(), value: languageCode };
    });

export { getLanguageOptions };
