import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from '../components'
import { fetchFromAPI } from '../service/api'
const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).
            then((data) => setVideos(data.items))
    }, [selectedCategory])
    return (
        <Stack sx={{
            flexDirection: { sx: 'column', md: 'row' },

        }}>
            <Box sx={{
                height: 'auto',
                borderRight: '1px solid #e3e3e3',
                px: { sx: 0, md: 2 }
            }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

            </Box>
            <Box
                sx={{
                    marginLeft: '16px'
                }}
            >

                <Videos videos={videos} />
            </Box>
        </Stack>
    )

}

export default Feed