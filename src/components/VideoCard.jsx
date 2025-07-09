import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'



const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card
            sx={{
                width: { xs: '100%', sm: '358px', md: '320px' },
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
                        width: { xs: '100%', sm: '358px', md: '320px' },
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