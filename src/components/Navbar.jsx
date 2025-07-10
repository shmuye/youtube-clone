import { Stack, Typography } from '@mui/material';
import { logo } from '../assets/constants';
import SearchBar from './SearchBar';
const Navbar = () =>
(
    <Stack direction="row" alignItems='center' p={2} sx={{
        position: 'sticky',
        justifyContent: 'space-between',
        top: 0,
        backgroundColor: '#000',

    }}>


        <Stack
            direction='row'
            alignItems='center'
            gap='10px'>
            <img src={logo} height={50} alt="logo" />
            <Typography
                variant='h6'
                color='#fff'
                fontWeight='bold'
            >Youtube</Typography>
        </Stack>

        <SearchBar />
    </Stack>
)



export default Navbar