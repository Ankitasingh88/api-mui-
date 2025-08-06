import React from 'react';
import { Grid, Typography } from '@mui/material';
import BookCard from '../BookCard';
import { Book } from '../../types';

const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
  if (books.length === 0)
    return (
      <Typography sx={{ mt: 4 }} textAlign="center">
        No books found.
      </Typography>
    );

  return (
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </Grid>
  );
};

export default BookList;
