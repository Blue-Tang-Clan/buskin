import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '../StyledComponents.js';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SignUp from './SignUp.jsx';
import LogIn from './Login.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RegisterModal({
  setUserType,
  setUserId,
  anonymous,
  setUserName,
  setUserPic,
  setLogin,
}) {
  const [open, setOpen] = React.useState(!!anonymous);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showForm, setShowForm] = React.useState('Register');
  function handleClick() {
    if (anonymous) {
      setLogin(false);
    }
  }

  return (
    <div>
      {anonymous ? null : <Button onClick={handleOpen}>Register / Log In</Button>}
      <Modal
        open={open}
        onClose={handleClose}
        // eslint-disable-next-line react/jsx-no-bind
        onClick={handleClick}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {/* Text in a modal */}
          </Typography>
          <Typography component='span' id='modal-modal-description' sx={{ mt: 2 }}>
            {
              showForm === 'Register'
                ? (
                  <SignUp
                    setUserType={setUserType}
                    handleClose={handleClose}
                    setShowForm={setShowForm}
                    setUserId={setUserId}
                    setUserName={setUserName}
                    setUserPic={setUserPic}
                  />
                )
                : (
                  <LogIn
                    setUserType={setUserType}
                    handleClose={handleClose}
                    setShowForm={setShowForm}
                    setUserId={setUserId}
                    setUserName={setUserName}
                    setUserPic={setUserPic}
                  />
                )
            }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
