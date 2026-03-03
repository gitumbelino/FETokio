
import { useState } from "react";
import RecipeCard from "./lifting-state/components/recipeCard.tsx";
import data from "./lifting-state/data/recipeData.json"
import Header from "./lifting-state/components/header.tsx";
import { Box, List, ListItem } from "@mui/material";


function App() {

  const [recipes, setRecipes] = useState(data)


  return (
    <Box>
      <Header />
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2
      }}>

        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onSelect={() => { }}
          />
        ))}

      </Box>
    </Box>
  )
}

export default App
