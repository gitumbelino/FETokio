import PackageCard from '../components/packageCard.tsx'
import { Box } from "@mui/material"
import packagesData from '../data/packages.json'
import { useState } from 'react'


export default function Packages() {

    const [packages] = useState(packagesData)

    return (
        <>
            <Box>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2
                }}>
                    {packages.map(pkg => (
                        <PackageCard
                            key={pkg.id}
                            packageOffer={pkg}
                        />
                    ))}
                </Box>
            </Box>

        </>

    )
}
