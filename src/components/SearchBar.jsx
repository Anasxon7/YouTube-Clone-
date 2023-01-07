import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      className='search'
      sx={{
        borderRadius: 20,
        border: '1px solid #303030',
        pl: 2,
        boxShadow: 'none',
        backgroundColor: '#121212',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '9px', color: '#a4a4a4', backgroundColor: '#141414', borderRadius: "25px"}} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
