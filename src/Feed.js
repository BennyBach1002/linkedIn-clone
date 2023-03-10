import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move"
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

    useEffect(() =>{
        db.collection("posts")
        .onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    },[])

  const sendPost = (e) => {
    e.preventDefault()
    
    db.collection('posts').add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Write" Icon={ArticleIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={OndemandVideoIcon} color="#70B5F9" />
          <InputOption title="Event" Icon={EventAvailableIcon} color="#70B5F9" />
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
        </div>
      </div>

    <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
        <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
