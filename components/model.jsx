import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Image from 'next/image'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// function ChildModal({data}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <div className='Cardcontainer' onClick={handleOpen}>
//       <Image src={data.imgurl} alt="My Image" width={300} height={300}/>
//     </div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           <h2 id="child-modal-title">Text in a child modal</h2>
//           <p id="child-modal-description">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           </p>
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

export default function NestedModal({data}) {
//   const [open, setOpen] = React.useState(false);
//   const [value,setValue] = React.useState(null);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   React.useEffect(()=>{
//    setValue(data)
//   },[])
// console.log(data);
//   return (

//      <>
//    { value === null ? <div></div>: <div>
//     <div className='Cardcontainer' onClick={handleOpen}>
//       <Image src={.imgurl} alt="My Image" width={300} height={300}/>
//     </div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 400 }}>
//           <h2 id="parent-modal-title">Text in a modal</h2>
//           <p id="parent-modal-description">
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </p>
//           <ChildModal  />
//         </Box>
//       </Modal>
//     </div>}</>
//   );
}