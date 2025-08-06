'use client';

import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { Book } from '../types';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
    const data = await response.json();
    setBooks(data.items || []);
  };

  //Reset app to initial state
  const handleBack = () => {
    setSearchTerm('');
    setBooks([]);
  };

  return (
    <Box sx={{ backgroundColor: 'orange', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h1" textAlign="center" gutterBottom>
          📚 BOOK FINDER
        </Typography>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
          onBack={handleBack}
        />

        <BookList books={books} />
      </Container>
    </Box>
  );
};

export default Page;
