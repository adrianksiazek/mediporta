import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSort } from "./sort-input.effect";

const SortInput = () => {
  const { sort, setSort } = useSort();

  return (
    <div className="form-control">
      <p>Sort:</p>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select value={sort} onChange={(e) => e.target.value && setSort(e.target.value)}>
          <MenuItem value={"popular"}>Popular</MenuItem>
          <MenuItem value={"activity"}>Activity</MenuItem>
          <MenuItem value={"name"}>Name</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortInput;
