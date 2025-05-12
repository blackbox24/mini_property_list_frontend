import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/AppAppBar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Hero from "../components/hero";

const HomePage = () => {
    return(
        <>
            <CssBaseline enableColorScheme />
            <ResponsiveAppBar />
            <Hero/>
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <MainContent />
                {/* <Latest /> */}
            </Container>
            <Footer />
        </>
  );
}

export default HomePage