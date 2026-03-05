import { useState } from "react";
import RecipeCard from "./lifting-state/components/recipeCard.tsx";
import recipesData from "./lifting-state/data/recipeData.json"
import Header from "./lifting-state/components/header.tsx";
import { Box } from "@mui/material";

function App() {

  const [recipes] = useState(recipesData)

  const [selected, setSelected] = useState<number[]>([])


const selectRecipe = (id: number) => {
  const alreadySelected = selected.includes(id)

  if (alreadySelected) {
    const newList = selected.filter(recipeId => recipeId !== id)
    setSelected(newList)
    
  } else {
    const newList = [...selected, id]
    setSelected(newList)
  }
}


  return (
    <Box>
      <Header selected={selected.length} />
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2
      }}>

        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onSelect={() => selectRecipe(recipe.id)}
          />
        ))}

      </Box>
    </Box>
  )
}

export default App