import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  // console.log("statestate", state);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email, contact, address } = state;

  const handleSubmit = () => {
    if (!name || !email || !contact || !address) {
      setError("Please fill out all fields");
    } else {
      dispatch(addUser(state));
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
      <Button
        style={{ width: 100 }}
        variant="contained"
        onClick={() => navigate("/")}
        color="warning"
      >
        Back
      </Button>

      <h2>Add User</h2>
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
          id="standard-basic"
          label="Name"
          value={name}
          type="text"
          name="name"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          type="email"
          name="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact}
          type="number"
          name="contact"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address}
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
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;
