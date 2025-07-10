
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () => (
    <Box
        minHeight="95vh"
        marginX='auto'>
        <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
            <CircularProgress />
        </Stack>
    </Box>
);

export default Loader;