import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Card({data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (<div>
    <div className='Cardcontainer' onClick={handleOpen}>
      <Image src={data.imgurl} alt="My Image" width={300} height={300}/>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <span>{data.name}</span><br />
            <span>{data.domain} Founded in {data.year}</span> 
            <hr />
          </div>
          <div>
            {data.desc}
          </div>
          <div style={{marginTop:"3rem"}}>
            <span>Founder</span><br />
            <span>{data.founder[0]}</span>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
