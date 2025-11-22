
// import React, { useState } from 'react'
// import "./ContactForm.css";
// import {
//   TextField,
//   Button,
//   Snackbar,
//   Alert,
//   Box
// } from "@mui/material";
// import axios from "axios"
// import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSuccess, setSnackbarSuccess] = useState("success");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:9000/api/portfolio/contact",
//         { name, email, message }
//       );
//       setSnackbarMessage(response.data.message);
//       setSnackbarSuccess("success");
//       setOpenSnackbar(true);
//     } catch (error) {
//       setSnackbarMessage(
//         error.response?.data?.message || "Message failed. Please try again."
//       );
//       setSnackbarSuccess("error");
//       setOpenSnackbar(true);
//     }
//   };

//   const handleCloseSnackbar = () => setOpenSnackbar(false);

//   return (
//     <div id='form'>
//       <div className='form-des'>
//         <h1>Want To Reach Out?</h1>
//         <p>If you have any questions, proposals, or just want to have a chat, feel free to get in touch.</p>
        
//         <div className='social'>
//           <a className="social-button" href="https://github.com/Blink-in" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//             <FaGithub className="icon" />
//             <span className="label">GitHub</span>
//           </a>
//           <a className="social-button" href="https://www.linkedin.com/in/insanecoder27" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//             <FaLinkedin className="icon" />
//             <span className="label">LinkedIn</span>
//           </a>
//           <a className="social-button" href="https://www.instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//             <FaInstagram className="icon" />
//             <span className="label">Instagram</span>
//           </a>
//           <a className="social-button" href="https://wa.me/07048355609" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
//             <FaWhatsapp className="icon" />
//             <span className="label">WhatsApp</span>
//           </a>
//           <a className="social-button" href="https://facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//             <FaFacebook className="icon" />
//             <span className="label">Facebook</span>
//           </a>
//         </div>
//       </div>

//       <div className="contactForm">
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{
//             border: '1px solid #d1d5db',
//             borderRadius: 2,
//             p: { xs: 2, sm: 4 },
//             bgcolor: "rgb(17, 17, 30)",
//             maxWidth: 300,
//             mx: 'auto',
//           }}
//         >
//           <TextField
//             label="Name"
//             fullWidth
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             variant="outlined"
//             InputLabelProps={{
//               sx: {
//                 color: "#fff",
//                 '&.Mui-focused': { color: '#fff' }
//               }
//             }}
//             sx={{
//               '& .MuiOutlinedInput-root': { color: '#fff' },
//               '& .MuiOutlinedInput-input': { color: '#fff' },
//               '& .MuiOutlinedInput-notchedOutline': { borderColor: '#c9d0daff' },
//               '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#8b8b8b', boxShadow: '0 0 0 4px rgba(139,139,139,0.04)' }
//             }}
//           />

//           <TextField
//             label="Email Address"
//             fullWidth
//             margin="normal"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             variant="outlined"
//             InputLabelProps={{
//               sx: {
//                 color: '#fff',
//                 '&.Mui-focused': { color: '#fff' }
//               }
//             }}
//             sx={{
//               '& .MuiOutlinedInput-root': { color: '#fff' },
//               '& .MuiOutlinedInput-input': { color: '#fff' },
//               '& .MuiOutlinedInput-notchedOutline': { borderColor: '#d1d5db' },
//               '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#8b8b8b' }
//             }}
//           />

//           <TextField
//             label="Message"
//             multiline
//             rows={5}
//             fullWidth
//             margin="normal"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//             variant="outlined"
//             InputLabelProps={{
//               sx: {
//                 color: '#fff',
//                 '&.Mui-focused': { color: '#fff' }
//               }
//             }}
//             sx={{
//               '& .MuiOutlinedInput-root': { color: '#fff' },
//               '& .MuiOutlinedInput-input': { color: '#fff' },
//               '& .MuiOutlinedInput-notchedOutline': { borderColor: '#d1d5db' },
//               '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#8b8b8b' }
//             }}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             sx={{ mt: 2, px: 4 }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </div>

//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//         <Alert onClose={handleCloseSnackbar} severity={snackbarSuccess}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   )
// }

// export default ContactForm;
import React, { useState } from 'react'
import "./ContactForm.css";
import { TextField, Button, Snackbar, Alert, Box } from "@mui/material";
import axios from "axios"
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ContactForm = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSuccess, setSnackbarSuccess] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/api/portfolio/contact",
        { name, email, message }
      );
      setSnackbarMessage(response.data.message);
      setSnackbarSuccess("success");
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarMessage(
        error.response?.data?.message || "Message failed. Please try again."
      );
      setSnackbarSuccess("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <motion.div 
      id='form' 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className='form-des' variants={itemVariants}>
        <h1>Want To Reach Out?</h1>
        <p>If you have any questions, proposals, or just want to have a chat, feel free to get in touch.</p>
        
        <div className='social'>
          <motion.a className="social-button" href="https://github.com/Blink-in" target="_blank" rel="noopener noreferrer" aria-label="GitHub" variants={itemVariants}>
            <FaGithub className="icon" />
            <span className="label">GitHub</span>
          </motion.a>
          <motion.a className="social-button" href="https://www.linkedin.com/in/insanecoder27" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" variants={itemVariants}>
            <FaLinkedin className="icon" />
            <span className="label">LinkedIn</span>
          </motion.a>
          <motion.a className="social-button" href="https://www.instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="Instagram" variants={itemVariants}>
            <FaInstagram className="icon" />
            <span className="label">Instagram</span>
          </motion.a>
          <motion.a className="social-button" href="https://wa.me/07048355609" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" variants={itemVariants}>
            <FaWhatsapp className="icon" />
            <span className="label">WhatsApp</span>
          </motion.a>
          <motion.a className="social-button" href="https://facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="Facebook" variants={itemVariants}>
            <FaFacebook className="icon" />
            <span className="label">Facebook</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div className="contactForm" variants={itemVariants}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            border: '1px solid #d1d5db',
            borderRadius: 2,
            p: { xs: 2, sm: 4 },
            bgcolor: "rgb(17, 17, 30)",
            maxWidth: 300,
            mx: 'auto',
          }}
        >
          <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} required variant="outlined" InputLabelProps={{ sx: { color: "#fff", '&.Mui-focused': { color: '#fff' } } }} sx={{ '& .MuiOutlinedInput-root': { color: '#fff' }, '& .MuiOutlinedInput-input': { color: '#fff' }, '& .MuiOutlinedInput-notchedOutline': { borderColor: '#c9d0daff' }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#8b8b8b', boxShadow: '0 0 0 4px rgba(139,139,139,0.04)' } }} />
          <TextField label="Email Address" fullWidth margin="normal" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required variant="outlined" InputLabelProps={{ sx: { color: '#fff', '&.Mui-focused': { color: '#fff' } } }} sx={{ '& .MuiOutlinedInput-root': { color: '#fff' }, '& .MuiOutlinedInput-input': { color: '#fff' }, '& .MuiOutlinedInput-notchedOutline': { borderColor: '#d1d5db' }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#8b8b8b' } }} />
          <TextField label="Message" multiline rows={6} fullWidth margin="normal" value={message} onChange={(e) => setMessage(e.target.value)} required variant="outlined" InputLabelProps={{ sx: { color: '#fff', '&.Mui-focused': { color: '#fff' } } }} sx={{ '& .MuiOutlinedInput-root': { color: '#fff' }, '& .MuiOutlinedInput-input': { color: '#fff' }, '& .MuiOutlinedInput-notchedOutline': { borderColor: '#d1d5db' }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#8b8b8b' } }} />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, px: 4 }}>Submit</Button>
        </Box>
      </motion.div>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSuccess}>{snackbarMessage}</Alert>
      </Snackbar>
    </motion.div>
  )
}

export default ContactForm;