import React from 'react';
import "./student.scss";

import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';

const Card = ({ result, loading }) => {

    if (loading) {
        return (
          <LoadingButton loading loadingPosition="start" size="large" startIcon={<SaveIcon />} variant="outlined">Loading...</LoadingButton>
        )
      }

    return (
        <div>

            {result.map((item) => {
                return [
                    <div className="card cardStudent col-5">
                        <div className="p">
                            <h3>{item.fullName}</h3>
                            <p >
                                {item.email}<br />
                                {item.phoneNumber}
                            </p>
                        </div>
                        <div>

                        </div>

                        <a href="#" className="link">View all</a>

                        {/* <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal> */}

                    </div>
                ]
            })}

        </div>

    );
}


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

export default Card;