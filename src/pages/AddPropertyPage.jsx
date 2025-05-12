import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/AppAppBar';
import AddPropertyContent  from '../components/AddPropertyContent';
import Footer from '../components/Footer';
import Hero from "../components/hero";

const AddPropertyPage = () => {
    return(
        <>
            <CssBaseline enableColorScheme />
            <ResponsiveAppBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', }}
            >
                <AddPropertyContent/>
            </Container>
            <Footer />
        </>
  );
}

export default AddPropertyPage;