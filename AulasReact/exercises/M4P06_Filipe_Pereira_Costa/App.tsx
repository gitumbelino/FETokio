
import { useState } from "react";
import RecipeCard from "./lifting-state/components/recipeCard.tsx";
import data from "./lifting-state/data/recipeData.json"
import Header from "./lifting-state/components/header.tsx";
import { Box} from "@mui/material";


function App() {

  const [recipes, setRecipes] = useState(data)

const[selected, setSelected] = useState([])

  const selectedState = (id: number, selected: number) => {

    const selectedState = recipes.map(recipe => {


      if (recipe.id === id) {

        return {
          ...recipe,
          selected: !selected

        }
      } else {
        return {  
          ...recipe
        }
      }
    })
    setRecipes(selectedState)
  }


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
            onSelect={() => {selectedState(recipe.id, recipe.onSelect)}}
            selected= {selected}
            setSelected={setSelected}
          />
        ))}

      </Box>
    </Box>
  )
}

export default App
