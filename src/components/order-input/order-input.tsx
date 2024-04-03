import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useOrder } from "./order-input.effect";

const OrderInput = () => {
  const { order, setOrder } = useOrder();

  return (
    <div className="form-control">
      <p>Order:</p>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select value={order} onChange={(e) => e.target.value && setOrder(e.target.value)}>
          <MenuItem value={"desc"}>Dsc</MenuItem>
          <MenuItem value={"asc"}>Asc</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default OrderInput;
