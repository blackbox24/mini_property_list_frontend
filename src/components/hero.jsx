import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";


const Hero = () => {
    return(
        <Box className="bg-blue-100 py-30 text-center">
            <Container>
                <div>
                    <Typography variant="h2" className="font-bold mb-4" gutterBottom>
                        Welcome to Your Dream Home
                    </Typography>
                    <Typography variant="h6" className="text-gray-600 mb-6">
                        Explore our exclusive collection of properties tailored to your needs.
                    </Typography>
                </div>
            <Button variant="contained" color="primary" size="large">
                <Link to="/properties">Browse Properties</Link>
            </Button>
            </Container>
        </Box>
    )
}

export default Hero;