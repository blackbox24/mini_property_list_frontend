import * as React from 'react';
import {useParams} from "react-router-dom";
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
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import Button from "@mui/material/Button";

import cardData from "../utils/mockdata";

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




export default function DetailPageContent() {
  const {propertyId} = useParams();
  const [data, setCardData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/api/properties/${propertyId}`);
        const jsonData = await response.json();
        setCardData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [propertyId]);

  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h3" gutterBottom className="text-center">
          {data.name} Property
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
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            gap: 3,
            overflow: 'auto',
          }}
        >
        </Box>
      </Box>

      {/* Property listings cards */}
      <Grid container spacing={0} columns={12}> 
        <Grid size={{ xs: 12, md: 12 }} key={data.id}>
        <SyledCard
          variant="outlined"
          onFocus={() => handleFocus(2)}
          onBlur={handleBlur}
          tabIndex={0}
          className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
          sx={{ height: '100%' ,width: '100%' }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={data.image_url ? `http://127.0.0.1:3000/${data.image_url}` : "https://picsum.photos/800/450?random=3"}
            sx={{
              height: { sm: 'auto', md: '50%' },
              aspectRatio: { sm: '16 / 9', md: '' },
            }}
          />
          <SyledCardContent>
            <Typography gutterBottom variant="caption" component="div">
              GH₵{data.price}
            </Typography>
            <Typography gutterBottom variant="h3" component="div">
              {data.name}
            </Typography>
            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
              {data.description}
            </StyledTypography>
            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
              {data.location}
            </StyledTypography>
            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
              {new Date(data.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </StyledTypography>
          </SyledCardContent>
        </SyledCard>
      </Grid>
      </Grid>
    </Box>
  );
}