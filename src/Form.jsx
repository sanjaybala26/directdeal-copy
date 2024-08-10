// import React from 'react';

// const AccountForm = () => {
//   return (
//     <div className="column">
//       <h3>Account</h3>
//       <input type="text" placeholder="Full Name" />
//       <input type="text" placeholder="Email Address" />
//       <input type="password" placeholder="Password" />
//       <div className="row">
//         <div className="column">
//           <h3>Date of Birth</h3>
//           <div className="row">
//             <input type="number" placeholder="DD" />
//             <input type="number" placeholder="MM" />
//             <input type="number" placeholder="YYYY" />
//           </div>
//         </div>
//         <div className="column">
//           <h3>Gender</h3>
//           <div className="row">
//             <button>Male</button>
//             <button>Female</button>
//           </div>
//         </div>
//       </div>
//       <div className="column">
//         <h3>Payment Details</h3>
//         <div className="row">
//           <button>Credit Card</button>
//           <button>Paypal</button>
//         </div>
//         <div className="row">
//           <input type="text" placeholder="Card Number" />
//         </div>
//         <div className="row">
//           <input type="text" placeholder="Card CVC" />
//           <input type="number" placeholder="MM" />
//           <input type="number" placeholder="YY" />
//         </div>
//       </div>
//       <h4>Terms and Conditions</h4>
//       <div className="row">
//         <input type="checkbox" />
//         <span>
//           I accept the terms and conditions for signing up to this service, and hereby confirm I
//           have read the privacy policy.
//         </span>
//       </div>
//       <button type="submit">Submit</button>
//     </div>
//   );
// };

// export default AccountForm;


// CSS

// :root {
//     --clr-primary: #F97300;
//     --clr-secondary: #524C42;
//     --clr-accent: #E2DFD0;
//   }
  
//   * {
//     box-sizing: border-box;
//   }
  
//   .wrapper {
//     background-color: #fff;
//   }
  
//   .container {
//     width: 38em;
//     box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
//     margin: 0em auto;
//     padding: 1em 3em 2em 3em;
//   }
  
//   .row {
//     display: flex;
//     flex-direction: row;
//   }
  
//   .column {
//     display: flex;
//     flex-direction: column;
//     flex-basis: 100%;
//     flex: 1;
//   }
  
//   h1,
//   h2,
//   h3,
//   h4 {
//     color: var(--clr-primary);
//     margin: 1em 0 0.5em 0;
//   }
  
//   input[type='text'],
//   input[type='number'],
//   input[type='password'],
//   button {
//     width: 100%;
//     padding: 1em;
//     line-height: 1.4;
//     background-color: #fff;
//     border: 1px solid var(--clr-secondary);
//     border-radius: 3px;
//     transition: all 0.35s ease-in-out;
//     margin: 0.3em;
//   }
  
//   input[type='checkbox'] {
//     margin-right: 1em;
//   }
  
//   button[type='submit'] {
//     background: var(--clr-primary);
//     margin: 1em 0;
//   }
  
//   button[type='submit']:hover {
//     cursor: pointer;
//     background: var(--clr-secondary);
//   }
  
//   ::placeholder,
//   button {
//     color: var(--clr-accent);
//     opacity: 1;
//   }
  

//   App.jsx


//   import React from 'react';
// import AccountForm from './AccountForm';
// import './styles.css';

// const App = () => {
//   return (
//     <div className="wrapper">
//       <div className="container">
//         <AccountForm />
//       </div>
//     </div>
//   );
// };

// export default App;
