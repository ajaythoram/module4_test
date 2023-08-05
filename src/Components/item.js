import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStepBackward} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Detail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === parseInt(id));
  const [detailsVisible, setDetailsVisible] = useState(true);
  const [userVisible, setUserVisible] = useState(false);
 let navigate = useNavigate();
  if (!post) {
    return <div>Post not found.</div>;
  }

  function toggleDetails() {
    setDetailsVisible(!detailsVisible);
    setUserVisible(false);
  }

  function toggleUser() {
    setUserVisible(!userVisible);
    setDetailsVisible(false);
  }
  function backaction (){
       navigate("/")
  }

  return (

    <div>
      <div className='idpage'>
      <FaStepBackward  onClick={backaction}/>
      <h2>Post Number {post.id}</h2>
      </div>
 <div className='detail-container'>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />

      <div className='details'>

        <div className='details_card'>
          <h3 onClick={toggleDetails}>Detail</h3>
          {detailsVisible && (
            <div>
              <p>{post.body}</p>
            </div>
          )}
        </div>

        <div className='details_card'>
          <h3 onClick={toggleUser}>User info</h3>
          {userVisible && (
            <div>
              <p> Post was posted by {post.userId}</p>
            </div>
          )}
        </div>

      </div>
    </div>

   
    </div>
  );
};

export default Detail;
