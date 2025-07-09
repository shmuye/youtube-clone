import { Stack } from '@mui/material';
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



        <img src={logo} height={50} alt="logo" />
        <SearchBar />
    </Stack>
)



export default Navbar