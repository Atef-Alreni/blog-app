import MainContent from "../../components/MainContent/MainContent.js";
import Form from "../../components/Form/Form.js";

import { createPost } from "../../api/index.js";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";

function CreatePost() {
  const history = useNavigate();

  return (
    <MainContent title='Create Post' sideNav>
      <Form
        formContent={formContent}
        validation={Yup.object({
          title: Yup.string()
            .max(25, "title should be under under 26 characters")
            .required(),
          post: Yup.string()
            .min(450, "post must be atleast 450 characters long")
            .required(),
        })}
        submitBtn={{
          type: "submit",
          value: "Post",
        }}
        onSubmit={async (postData) => {
          const { data } = await createPost(postData);
          if (data.success) {
            history("/posts");
          }
        }}
      />
    </MainContent>
  );
}

const formContent = [
  {
    label: "Title",
    name: "title",
    type: "text",
  },
  {
    label: "Post",
    name: "post",
    type: "textarea",
  },
];

export default CreatePost;
