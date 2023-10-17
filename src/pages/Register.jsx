import React, { useState } from "react";
import "../styles.scss";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  
    // Client-side validation
    if (!displayName || !email || !password || !file) {
      setErr('All fields are required.');
      return;
    }
  
    if (!email) {
      setErr('Invalid email address.');
      return;
    }
  
    if (password.length < 6) {
      setErr('Password must be at least 6 characters long.');
      return;
    }
  
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
  
      const storageRef = ref(storage, displayName);
  
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        (error) => {
          setErr(`Error uploading avatar: ${error.message}`);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            console.log(displayName)
  
            await setDoc(doc(db, "userCharts", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (error) {
      setErr(`Registration failed: ${error.message}`);
    }
  };
  
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="Add an avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <p className="error">{err}</p>}
        </form>
        <p>You do have an account? <Link to="/Login">Login</Link> </p>
      </div>
    </div>
  );
};

export default Register;
