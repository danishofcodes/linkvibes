import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ProfileDetails({ fullname, email, profilePic, handleNameChange, handleEmailChange, handleProfilePicChange, handleProfileSave }) {
   // Validation schema for Formik
const validationSchema = Yup.object({
  fullname: Yup.string().required('Name is a required field'),
  email: Yup.string().required('Email is required, it helps people reach you through mail')
});
  
 // -----------

const formik = useFormik({
  initialValues: {
    fullname: '',
    email: '',
  },
  validationSchema,
  onSubmit: (values) => {
    handleProfileSave(values);
  },
});


 // Handle select changes
 const handleNameFieldInput = (e) => {
  formik.handleChange(e);
  handleNameChange(e); // Call the prop function
};

// Handle link input changes
const handleEmailFieldInput = (e) => {
  formik.handleChange(e);
  handleEmailChange(e); // Call the prop function
};
  return (
    <form onSubmit={formik.handleSubmit}>
    <div>
      <h3 className='texttheme'>Add Your Profile Picture And Email</h3>
      <h5 className='texttheme'>Add your details and share with the world</h5>
      <div className='inpField'>
        <label>
          Profile Picture URL
        </label>
        <input
          type="text"
          value={profilePic}
          onChange={handleProfilePicChange}
          placeholder="Enter profile picture URL"
        />
      </div>

      <div className='inpField'>
        <label>
          Name
        </label>
        <input
          type="text"
          value={fullname}
          onChange={handleNameFieldInput}
          name="fullname"
          placeholder="Enter your first name"
        />
          {/* {!firstName && <p>field required</p>} */}
          {formik.touched.fullname && formik.errors.fullname ? (
              <div className="error">{formik.errors.fullname}</div>
            ) : null}
            
      </div>


      <div className='inpField'>
        <label>
          Email
        </label>
        <input
          type="text"
          value={email}
          onChange={handleEmailFieldInput}
           name="email"
          placeholder="Enter your email"
        />
        {/* {!email && <p>field required</p>} */}
        {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            
      </div>
      
      <div className="link-card-footer">
        <button className='btnbordered btngreen' type="submit" disabled={!formik.isValid}>
          <FontAwesomeIcon icon={faCheckCircle} /> Save
        </button>
      </div>
    </div>
    </form>
  );
};


