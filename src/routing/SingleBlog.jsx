import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleBlog() {
  const idToShow = useParams(); //{id:100}
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + idToShow.id
      );
      setSinglePost(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className="home content">
      <div className="post">
        <h3>{singlePost.title}</h3>
        <p>{singlePost.body}</p>
      </div>
    </div>
  );
}

export default SingleBlog;
