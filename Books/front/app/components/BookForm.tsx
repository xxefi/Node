import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import { BookFormProps } from "../interfaces/bookform.props";

export const BookForm = ({
  formData,
  loading,
  handleChange,
  onSubmit,
}: BookFormProps) => {
  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          marginBottom: 2,
          "& .MuiInputBase-root": {
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
          },
          "& .MuiInputLabel-root": { color: "#ddd" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ddd" },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        }}
      />
      <TextField
        label="Author"
        name="author"
        value={formData.author}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          marginBottom: 2,
          "& .MuiInputBase-root": {
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
          },
          "& .MuiInputLabel-root": { color: "#ddd" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ddd" },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        }}
      />
      <TextField
        label="Year"
        name="year"
        type="number"
        value={formData.year}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          marginBottom: 2,
          "& .MuiInputBase-root": {
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
          },
          "& .MuiInputLabel-root": { color: "#ddd" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ddd" },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        }}
      />
      <FormControl
        fullWidth
        sx={{
          marginBottom: 2,
          "& .MuiInputBase-root": {
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
          },
          "& .MuiInputLabel-root": { color: "#ddd" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ddd" },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        }}
      >
        <InputLabel>Genre</InputLabel>
        <Select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        >
          <MenuItem value="Fiction">Fiction</MenuItem>
          <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
          <MenuItem value="Science Fiction">Science Fiction</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
          <MenuItem value="Mystery">Mystery</MenuItem>
          <MenuItem value="Biography">Biography</MenuItem>
        </Select>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          padding: "12px",
          fontWeight: "bold",
          backgroundColor: "#ff9800",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#e68900",
          },
        }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Add Book"}
      </Button>
    </form>
  );
};
