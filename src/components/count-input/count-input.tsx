import { TextField } from "@mui/material";
import { useCountInput } from "./count-input.effect";

const CountInput = () => {
  const { pageSize, setPageSize } = useCountInput();

  return (
    <div className="form-control">
      <p>Count:</p>
      <TextField
        type="text"
        name="count"
        value={pageSize ?? ""}
        onChange={(e) => {
          const result = e.target.value.replace(/\D/g, "");
          setPageSize(result);
        }}
        size="small"
        sx={{ m: 1 }}
      />
    </div>
  );
};

export default CountInput;
