import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// form validation imports
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LinkAdd({ removeLink, saveLink, handleLink, handleSocial }) {
  // Validation schema for Formik
  const validationSchema = Yup.object({
    socialMedia: Yup.string().required('Please select a social media platform'),
    link: Yup.string().required('Link is required')
  });

  // -----------

  const formik = useFormik({
    initialValues: {
      socialMedia: '',
      link: '',
    },
    validationSchema,
    onSubmit: (values) => {
      saveLink(values);
    },
  });

  // Handle select changes
  const handleSelectChange = (event) => {
    formik.handleChange(event);
    handleSocial(event); // Call the prop function
  };

  // Handle link input changes
  const handleInputChange = (event) => {
    formik.handleChange(event);
    handleLink(event); // Call the prop function
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='card'>
        <div className='linkcard-header'>
          <button className="delete" onClick={removeLink}>Close</button>
        </div>

        <div className='link-inp-action'>

          <select
            name="socialMedia"
            value={formik.values.socialMedia}
            onChange={handleSelectChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select your Media to Connect</option>
            <option value="Github">Github</option>
            <option value="Reddit">Reddit</option>
            <option value="Youtube">Youtube</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Tumblr">Tumblr</option>
          </select>
          {formik.touched.socialMedia && formik.errors.socialMedia ? (
            <div className="error">{formik.errors.socialMedia}</div>
          ) : null}



          {formik.values.socialMedia &&
            <div>
              <span>Now add your link!</span>
              <div className='linkbox'>
                <div className='httpprepend'>
                  <span>https://</span>
                </div>
                <input
                  type="text"
                  className="linkinput"
                  name="link"
                  value={formik.values.link}
                  onChange={handleInputChange}
                  onBlur={formik.handleBlur} />


              </div>
              {formik.touched.link && formik.errors.link ? (
                <div className="error">{formik.errors.link}</div>
              ) : null}
            </div>
          }
        </div>

        <div className="link-card-footer">
          <button className='btnbordered btngreen' type="submit" disabled={!formik.isValid}>
            <FontAwesomeIcon icon={faCheckCircle} />&nbsp;Save
          </button>
        </div>

      </div>
    </form>
  )
}
