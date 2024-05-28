

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function ValidationTextFields() {
//   const [inputValue, setInputValue] = useState('');
//   const [error, setError] = useState(false);

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     // Regular expression to check if the value contains only letters
//     const isValid = /^[a-zA-Z\s]+$/.test(value);
//     setInputValue(value);
//     setError(!isValid);
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           error={error}
//           id="outlined-error-helper-text"
//           label="Error"
//           defaultValue=""
//           helperText={error ? 'Enter only letters' : ''}
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//       </div>
//     </Box>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function ValidationTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           error
//           id="outlined-error-helper-text"
//           label="Error"
//           defaultValue=""
//           helperText="הכנס רק אותיות "
//         />
//       </div>

//     </Box>
//   );
// }


// import React, { useState } from 'react';

// function FormRobot() {
//   const [textValue, setTextValue] = useState('');
//   const [error, setError] = useState(false);

//   const handleChange = (e) => {
//     const inputValue = e.target.value;
//     setTextValue(inputValue);

//     // Check if the input contains numbers
//     if (/\d/.test(inputValue)) {
//       setError(true);
//     } else {
//       setError(false);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={textValue} onChange={handleChange} />
//       {error && <p style={{ color: 'red' }}>Error: Numbers are not allowed!</p>}
//     </div>
//   );
// }

// export default FormRobot;