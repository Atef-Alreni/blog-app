import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../api";

import MainContent from "../../components/MainContent/MainContent.js";
import Post from "../Posts/Post";

function PostDetails() {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getSetPost = async () => {
      const { data } = await fetchPostById(id);
      setPost(data.post);
      setIsLoading(false);
    };

    getSetPost();
  }, []);

  return (
    <MainContent customChildren sideNav>
      {isLoading ? "...Loading" : <Post {...post} postDetails />}
    </MainContent>
  );
}

export default PostDetails;
