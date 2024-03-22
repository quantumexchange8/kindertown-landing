import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Modal2({ isOpen, onClose }) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 50,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Modal 1 Title
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Content for Modal 1...
        </Typography>
        <Button onClick={onClose}>Close Modal</Button>
      </Box>
    </Modal>
  );
}

export default Modal2;
