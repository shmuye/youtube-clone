import { Box, CardMedia, CardContent, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop,
            }}
        >
            <Link to={`channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url}
                        src={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            width: '180px',
                            height: '180px',
                            mb: 2,
                            border: '1px solid #e3e3e3'
                        }}
                    >

                    </CardMedia>
                    <Typography
                        variant="h6"
                        color="white"
                    >
                        {
                            channelDetail?.snippet?.title
                        }
                        <CheckCircle
                            sx={{
                                ml: '5px',
                                fontSize: 14,
                                color: 'gray'
                            }}
                        />

                    </Typography>

                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {
                                parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()
                            } Subscribers
                        </Typography>
                    )
                    }


                </CardContent>
            </Link>

        </Box>
    )
}

export default ChannelCard