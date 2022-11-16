import MainContent from "../../components/MainContent/MainContent.js";
import Form from "../../components/Form/Form.js";
import { Link, useNavigate } from "react-router-dom";

import { logUser } from "../../api/index.js";

import "./styles.css";

function Login() {
  const history = useNavigate();

  return (
    <MainContent title='Log In' sideNav>
      <Form
        formContent={formContent}
        submitBtn={{
          type: "submit",
          value: "login",
        }}
        redirect={
          <>
            Don't have an account? <Link to='/register'>Register</Link>
          </>
        }
        onSubmit={async (userData) => {
          const user = await logUser(userData);

          localStorage.setItem("user", JSON.stringify(user.data));
          history("/posts");
        }}
      />
    </MainContent>
  );
}

const formContent = [
  {
    label: "Username",
    name: "username",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
];

export default Login;
