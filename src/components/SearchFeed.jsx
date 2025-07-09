import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from '../components'
import { fetchFromAPI } from '../service/api'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
    const { searchTerm } = useParams()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).
            then((data) => setVideos(data.items))
    }, [searchTerm])
    return (
        <Box
            sx={{
                marginLeft: '16px',
                overflowY: 'auto',
                height: '90vh',
                flex: '2'
            }}
        >

            <Videos videos={videos} />
        </Box>
    )

}

export default SearchFeed