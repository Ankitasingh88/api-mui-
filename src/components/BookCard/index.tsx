import React from 'react';
import {Card, CardContent, CardMedia, Typography, Box, Link,} from '@mui/material';
import { Book } from '../../types';

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const { title, authors, description, imageLinks } = book.volumeInfo;
  const previewLink = book.volumeInfo.previewLink || '#';

  return (
    <Link href={previewLink} target="_blank" underline="none" sx={{ textDecoration: 'none' }}>
      <Card
        sx={{
          maxWidth: 300,
          m: 2,
          cursor: 'pointer',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.03)',
          },
        }}
      >
        {imageLinks?.thumbnail && (
          <CardMedia
            component="img"
            height="140"
            image={imageLinks.thumbnail}
            alt={title}
          />
        )}
        
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {authors?.join(', ')}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
              {description?.substring(0, 100)}...
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;

