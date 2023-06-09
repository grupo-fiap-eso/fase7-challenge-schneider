
import React from "react";
import { useParams } from "react-router-dom";
import { Post1 } from "./posts/Post1";
import { Post2 } from "./posts/Post2";
import { Post3 } from "./posts/Post3";
import { Post4 } from "./posts/Post4";

function PostPage(){
  const { id } = useParams()
  return (
    <div class="row">
      {id === '1' && (<Post1/>)}
      {id === '2' && (<Post2/>)}
      {id === '3' && (<Post3/>)}
      {id === '4' && (<Post4/>)}
    </div>
  );
};

export default PostPage;
