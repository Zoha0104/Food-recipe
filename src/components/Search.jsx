import { useEffect, useState } from "react";

function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");
  const [error, setError] = useState("");

  const API_KEY = "1bbf3921167249ed8baa87342dad80b5";

  async function fetchFood(searchQuery) {
    try {
      setError("");

      const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchQuery}&number=12`;

      console.log("Fetching:", URL);

      const response = await fetch(URL);

      const data = await response.json();

      console.log("Search API response:", data);

      if (!response.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      if (data.results) {
        console.log("Recipes found:", data.results);
        setFoodData(data.results);
      } else {
        setError("No recipes found.");
        setFoodData([]);
      }
    } catch (error) {
      console.log("Search error:", error);
      setError("Failed to fetch recipes.");
    }
  }

  useEffect(() => {
    fetchFood("pizza");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (query.trim() !== "") {
      fetchFood(query);
    }
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">
          Search
        </button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Search;