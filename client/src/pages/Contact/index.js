import MainContent from "../../components/MainContent/MainContent.js";
import Form from "../../components/Form/Form.js";

import "./styles.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Contact() {
  const history = useNavigate();

  return (
    <MainContent title='Contact Us' sideNav>
      <Form
        formContent={formContent}
        validation={Yup.object({
          fullName: Yup.string().required(),
          email: Yup.string().email().required(),
          message: Yup.string().required(),
        })}
        submitBtn={{
          type: "submit",
          value: "send",
        }}
        onSubmit={() => {
          history("/");
        }}
      />
    </MainContent>
  );
}

const formContent = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "text",
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
  },
];

export default Contact;
