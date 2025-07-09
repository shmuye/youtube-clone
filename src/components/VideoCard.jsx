import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../assets/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card
            sx={{
                width: { md: '358px', xs: '100%' },
                boxShadow: 'none',
                borderRadius: 0
            }}
        >
            <Link
                to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{
                        width: '358px',
                        height: '180px'
                    }}
                >

                </CardMedia>
            </Link>

            <CardContent
                sx={{
                    backgroundColor: '#000',
                    height: '100px'
                }}

            >

                <Typography
                    variant='subtitle1'
                    fontWeight='bold'
                    color='white'
                >
                    {
                        snippet?.title.slice(0, 60) || demoVideoTitle
                    }
                </Typography>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography
                        variant='subtitle2'
                        fontWeight='bold'
                        color='white'
                    >
                        {
                            snippet?.channelTitle.slice(0, 60) || demoChannelTitle
                        }
                        <CheckCircle
                            sx={{
                                ml: '5px',
                                fontSize: 12,
                                color: 'gray'
                            }}
                        />
                    </Typography>
                </Link>



            </CardContent>

        </Card>
    )
}

export default VideoCard