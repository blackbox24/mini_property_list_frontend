import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/AppAppBar';
import PropertyPageContent  from '../components/PropertyPageContent ';
import Footer from '../components/Footer';
import Hero from "../components/hero";

const PropertiesPage = () => {
    return(
        <>
            <CssBaseline enableColorScheme />
            <ResponsiveAppBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <PropertyPageContent  />
            </Container>
            <Footer />
        </>
  );
}

export default PropertiesPage;