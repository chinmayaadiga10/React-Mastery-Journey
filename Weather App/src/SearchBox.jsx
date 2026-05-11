import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div>
      <h2>Search for the Weather</h2>
      <div className="SearchBox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City name"
            variant="outlined"
            required
            value={city}
            onChange={changeCity}
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
