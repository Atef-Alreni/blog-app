import React from "react";
import { useFormik } from "formik";

import "./styles.css";

function Form({ formContent, validation, submitBtn, redirect, onSubmit }) {
  // Formik Logic
  const initialValues = formContent.reduce(
    (prev, curr) => ({ ...prev, [curr.name]: "" }),
    {}
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className='form'>
      {formContent.map(({ label, name, type }) => {
        return (
          <div className='input-container'>
            <label htmlFor={name} className='label'>
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                id={name}
                name={name}
                className={
                  formik.touched[name] && formik.errors[name]
                    ? "error-border textarea input"
                    : "textarea input"
                }
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            ) : (
              <input
                id={name}
                name={name}
                type={type}
                className={
                  formik.touched[name] && formik.errors[name]
                    ? "error-border input"
                    : "input"
                }
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}
            {formik.errors[name] ? (
              <small className='error'>
                {formik.touched[name] && formik.errors[name]}
              </small>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <input
        type={submitBtn?.type}
        value={submitBtn?.value}
        className='submit-btn'
      />
      {redirect ? <span className='redirect-text'>{redirect}</span> : ""}
    </form>
  );
}

export default Form;
