import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
function Popular()
{
  return(
    <div> 
                  
                <iframe width="1500"
                        height="2000"
                        
                        src= 
                         "https://openlibrary.org/trending/daily"
                        title="GeeksforGeeks" className='c3' > 
                </iframe> 
            </div> 
  )
}
const cardsData = [
  {
    title: 'Popular',
    image: 'https://2.bp.blogspot.com/-I_i8Lnmf2jQ/Wt6D7bhqb-I/AAAAAAAANyM/n4Sxgi3DTKASnE4fkeRU_H08pwIJqGbSACEwYBhgL/s640/world%2Bof%2Bart%2B-%2Bpopular%2Bnovels.jpg',
    description: 'This is the first card.',
    route:'/pop'
  },
  {
    title: 'Most liked',
    image: 'https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2019/12/122119_YE_books_main.jpg?w=1030&ssl=1',
    description: 'This is the second card.',
  },
  {
    title: 'Horror',
    image: 'https://www.housewifeeclectic.com/wp-content/uploads/2013/10/Scariest-Book-Covers-1.jpg',
    description: 'This is the third card.',
  },
  {
    title: 'Comedy',
    image: 'https://2.bp.blogspot.com/-I_i8Lnmf2jQ/Wt6D7bhqb-I/AAAAAAAANyM/n4Sxgi3DTKASnE4fkeRU_H08pwIJqGbSACEwYBhgL/s640/world%2Bof%2Bart%2B-%2Bpopular%2Bnovels.jpg',
    description: 'This is the first card.',
  },
  {
    title: 'Thriller',
    image: 'https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2019/12/122119_YE_books_main.jpg?w=1030&ssl=1',
    description: 'This is the second card.',
  },
  {
    title: 'Science Fiction',
    image: 'https://www.housewifeeclectic.com/wp-content/uploads/2013/10/Scariest-Book-Covers-1.jpg',
    description: 'This is the third card.',
  },

  
 
];

const Cards = () => {
  return (
    <Grid container spacing={3}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link to={card.route}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export {Cards,Popular};
