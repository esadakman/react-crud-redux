import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/action";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  // console.log("statestate", state);
  const [error, setError] = useState("");
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, email, contact, address } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  console.log(user);

  const handleSubmit = () => {
    if (!name || !email || !contact || !address) {
      setError("Please input all field");
    } else {
      dispatch(updateUser(state, id));
      navigate("/");
      setError("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: 50 }}>
      

      <h2>Edit User</h2>
      <p>{error && <p style={{ color: "red" }}>{error}</p>}</p>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "55ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          value={name || ""}
          type="text"
          name="name"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Email"
          value={email || ""}
          type="email"
          name="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact || ""}
          type="number"
          name="contact"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address || ""}
          type="text"
          name="address"
          onChange={handleInputChange}
        />
        <br />
        <Button
          style={{ width: 100 }}
          variant="contained"
          onClick={handleSubmit}
        >
          Update
        </Button>
        <Button
        style={{ width: 100 }}
        variant="contained"
        onClick={() => navigate("/")}
        color='error'
      >
        Back
      </Button>
      </Box>
    </div>
  );
};

export default EditUser;
