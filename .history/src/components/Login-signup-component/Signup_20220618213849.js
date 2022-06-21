// import Navbar from '../Navbar/Navbar.js';
// import './loginsignupform.css';
// import { doc, setDoc } from 'firebase/firestore';
// import React, { useState, useEffect } from 'react';
// import { storage, db } from '../../firebase/firebaseConfig.js';
// import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

// function Signup() {
//     const [email, setEmail] = useState();
//     const [name, setName] = useState();
//     const [password, setPassword] = useState();
//     const [dob, setDob] = useState();
//     const [profilepic, setProfilepic] = useState();

//     const [successMsg, setSuccessMsg] = useState('');
//     const [errorMsg, setErrorMsg] = useState('');
//     const auth = getAuth();
//     const navigate = useNavigate();

//     const handleSubmit = e => {
//         e.preventDefault();

//         createUserWithEmailAndPassword(auth, email, password)
//             .then(userCredentials => {
//                 const user = userCredentials.user;
//                 const storageRef = ref(storage, `profile-images/${Date.now()}`);

//                 uploadBytes(storageRef, profilepic)
//                     .then(() => {
//                         getDownloadURL(storageRef).then(url => {
//                             addDoc(collection(db, `users`), {
//                                 email,
//                                 password,
//                                 dob,
//                                 profimage: url,
//                             })
//                                 .then(() => {
//                                     setSuccessMsg('user added successfully');
//                                     setTimeout(() => {
//                                         navigate('/login');
//                                     }, 2000);
//                                 })
//                                 .catch(error => {
//                                     setErrorMsg(error.message);
//                                     setTimeout(() => {
//                                         setErrorMsg('');
//                                     }, 2000);
//                                 });
//                         });
//                     })
//                     .catch(error => {
//                         console.log(error.message);
//                     });
//             })
//             .catch(error => {
//                 console.log(error.message);

//                 if (
//                     error.message === 'Firebase: Error (auth/imvalid-email).' ||
//                     error.message ===
//                         'Firebase: Error (auth/admin-restricted-operation).'
//                 ) {
//                     setErrorMsg('Please fill all required fields');
//                 }
//                 if (
//                     error.message ===
//                     'Firebase: Error (auth/email-already-in-use).'
//                 ) {
//                     setErrorMsg('User already exists');
//                 }
//                 setTimeout(() => {
//                     setErrorMsg('');
//                 }, 4000);
//             });
//     };

//     return (
//         <React.Fragment>
//             <Navbar />
//             <div className="form-outermost">
//                 <h1>Signup</h1>
//                 <form className="form-inner">
//                     {successMsg && (
//                         <>
//                             <div className="success-msg">{successMsg}</div>
//                         </>
//                     )}
//                     {errorMsg && (
//                         <>
//                             <div className="error-msg">{errorMsg}</div>
//                         </>
//                     )}

//                     <input
//                         type="Email"
//                         placeholder="Enter your email address"
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         onChange={e => setName(e.target.value)}
//                         placeholder="Enter your name"
//                     />
//                     <input
//                         type="data"
//                         onChange={e => setDob(e.target.value)}
//                         placeholder="Choose Date of Birth"
//                     />
//                     <input
//                         type="file"
//                         accept="image/png, image/jpg, image/gif, image/jpeg"
//                         onChange={e => setProfilepic(e.target.value)}
//                         placeholder="Choose a Profile Picture"
//                     />
//                     <input
//                         type="password"
//                         onChange={e => setPassword(e.target.value)}
//                         placeholder="Choose a password"
//                     />

//                     <button onClick={handleSubmit}>Submit</button>
//                 </form>
//             </div>
//         </React.Fragment>
//     );
// }

// export default Signup;
