import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';



export default function SearchBar ({ onSearch }) {

    const [value, setValue] = useState('');

    const triggerSearch = () => onSearch(value);






  return (
      <>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            my: 4,  // vertical margin
            px: 2,  // horizontal padding
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 600 }}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth     // make the field fill the parent box
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  triggerSearch();
                }
              }}
              slotProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={triggerSearch}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </>
  )
}