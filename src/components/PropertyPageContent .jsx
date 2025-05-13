import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

import baseUrl from "../utils/baseUrl";

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});




export default function PropertyPageContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const [data, setData] = React.useState(null)

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.Log('You clicked the filter chip.');
  };

  React.useEffect(()=>{
    async function getProperties() {
      try {
        const response = await fetch(`${baseUrl}/api/properties/`,);
        if(!response.ok){
          throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("error: "+error);
      }
    }
    getProperties();
  },[]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h3" gutterBottom className="text-center">
          All Properties
        </Typography>
      </div>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto',
        }}
      >
        {/* Add property button */}
        
      </Box>

      {/* Property listings cards */}
      <Grid container spacing={4} columns={12}>
        
          {
            
            data?.map((data,index)=>
              <Grid size={{ xs: 12, md: 4 }} key={data.id}>
              <SyledCard
                variant="outlined"
                onFocus={() => handleFocus(2)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
                sx={{ height: '100%' }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={data.image_url ? `${baseUrl}/${data.image_url}` : "https://picsum.photos/800/450?random=3"}
                  sx={{
                    height: { sm: 'auto', md: '50%' },
                    aspectRatio: { sm: '16 / 9', md: '' },
                  }}
                />
                <SyledCardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    GH₵{data.price}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {data.title}
                  </Typography>
                  <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                    {data.description}
                  </StyledTypography>
                </SyledCardContent>
                <Button variant="contained" color="primary" size="large">
                  <Link to={"/property-detail/"+data.id}>View Propery</Link>
                </Button>
              </SyledCard>
            </Grid>
            )
            // :
            
            // <Typography variant="h4" className="font-bold mb-4 text-center">
            //   No data found
            // </Typography>
          }
      </Grid>
    </Box>
  );
}