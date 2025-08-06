import { Box, Button, TextField } from "@mui/material";
import ReplyAllTwoToneIcon from '@mui/icons-material/ReplyAllTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
  onBack: () => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm, onSearch, onBack }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      sx={{ mt: 4 }}
    >
      <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
        <TextField
          label="Search Books"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: { xs: '90%', sm: 300 } }}
        />
        <Button startIcon={ <SearchTwoToneIcon/>} variant="contained" onClick={onSearch}>
          Search
        </Button>
      </Box>

      {/* Back button */}
      <Button startIcon={ <ReplyAllTwoToneIcon />} variant="contained" color="primary" onClick={onBack}>
        Back
      </Button>
    </Box>
  );
};

export default SearchBar;

