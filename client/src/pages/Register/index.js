import MainContent from "../../components/MainContent/MainContent.js";
import Form from "../../components/Form/Form.js";

import { createUser } from "../../api/index.js";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";

function Register() {
  const history = useNavigate();

  return (
    <MainContent title='Register' sideNav>
      <Form
        formContent={formContent}
        validation={Yup.object({
          firstname: Yup.string()
            .max(20, "firstname should not be over 20 characters")
            .required(),
          surname: Yup.string()
            .max(20, "surname should not be over 20 characters")
            .required(),
          username: Yup.string().required(),
          email: Yup.string().email().required(),
          password: Yup.string()
            .min(6, "password must be at least 6 characters long")
            .required(),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "passwords do not match")
            .required(),
        })}
        submitBtn={{
          type: "submit",
          value: "sign Up",
        }}
        redirect={
          <>
            Don't have an account? <Link to='/login'>Log In</Link>
          </>
        }
        onSubmit={async (userData) => {
          const user = await createUser(userData);

          localStorage.setItem("user", JSON.stringify(user.data));
          history("/posts");
        }}
      />
    </MainContent>
  );
}

const formContent = [
  {
    label: "First name",
    name: "firstname",
    type: "text",
  },
  {
    label: "Surname",
    name: "surname",
    type: "text",
  },
  {
    label: "Username",
    name: "username",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
  },
];

export default Register;
