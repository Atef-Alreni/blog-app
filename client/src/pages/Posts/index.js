import Post from "./Post";
import MainContent from "../../components/MainContent/MainContent.js";

import { useEffect, useState } from "react";
import { fetchPosts } from "../../api";

function Posts() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setPostsData = async () => {
      const { data } = await fetchPosts();
      if (data) {
        setPosts(() => [...data.posts]);
        setIsLoading(false);
      }
    };

    setPostsData();
  }, []);

  return (
    <MainContent
      custom='custom-container'
      customChildren='custom-children-container'
      sideNav>
      {isLoading
        ? "...Loading"
        : posts?.map((data) => {
            return <Post {...data} />;
          })}
    </MainContent>
  );
}

export default Posts;
