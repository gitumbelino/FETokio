import { useState } from "react";
import EventCard from './rendering-conditionals/components/eventCard.tsx';
import data from "./rendering-conditionals/data/eventsdata.json"
import { Box } from "@mui/material";
import Header from "./rendering-conditionals/components/header.tsx";


function App() {

  const [events, setEvents] = useState(data)

  const changeState = (id: number, subscriptionOpen: boolean) => {


    const changedState = events.map(event => {

      if (event.id === id) {
        return {
          ...event,
          subscriptionOpen: !subscriptionOpen
        }
      } else {
        return {
          ...event
        }
      }
    })
    setEvents(changedState)
    
  }



  return (
    <Box sx={{ p: 2 }}>


      <Header />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >

        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            subscriptionOpen={event.subscriptionOpen}
            onChange = {()=>changeState(event.id, event.subscriptionOpen)} />

        ))}

      </Box>
    </Box>
  )
}

export default App
