import DestinationCard from '../components/destinationCard.tsx'
import { Box } from "@mui/material"
import destinationsData from '../data/destinations.json'
import { useState } from 'react'


export default function Destinations() {

    const [destinations] = useState(destinationsData)

    return (
        <>
            <Box>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2
                }}>
                    {destinations.map(destination => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                        />
                    ))}
                </Box>
            </Box>

        </>

    )
}
