import React from "react";
import InputText from "../utils/InputText";
import TextArea from "../utils/TextArea";

import { useFormik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  message: "",
};

const onSubmit = (values) => {
  console.log("Form Values: ", formik.values);
};

const validate = (values) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.contactNumber) {
    errors.contactNumber = "Required";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5 w-full xl:px-0 lg:px-0 md:px-0 px-8"
    >
      <InputText
        type="text"
        name="firstName"
        placeholder="Enter First Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="font-semibold text-error">
          {formik.errors.firstName}
        </div>
      ) : null}

      <InputText
        type="text"
        name="lastName"
        placeholder="Enter Last Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="font-semibold text-error">{formik.errors.lastName}</div>
      ) : null}

      <InputText
        type="email"
        name="email"
        placeholder="Enter Email Address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="font-semibold text-error">{formik.errors.email}</div>
      ) : null}

      <InputText
        type="text"
        name="contactNumber"
        placeholder="Cell No. e.g: +1 3004005000"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.contactNumber}
      />
      {formik.touched.contactNumber && formik.errors.contactNumber ? (
        <div className="font-semibold text-error">
          {formik.errors.contactNumber}
        </div>
      ) : null}

      <TextArea
        placeholder="Enter your message..."
        name="message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <div className="font-semibold text-error">{formik.errors.message}</div>
      ) : null}

      <button type="submit" className="btn btn-accent">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
