import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import InputOption from "./InputOption";
import Post from "../Post";

import "./Feed.css";
import { db } from "../../config/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const submitPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
        name: "Akhmadjon",
        description: "I'm a software developer",
        message: input,
        photoUrl: "https://i.imgur.com/sNp5Dbx.jpg",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter post?" type="text" />
            <button onClick={submitPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15e"
          />
        </div>
      </div>
      {posts.map(({id, data: {name, message, description, photoUrl}}) => (
        <Post key={id} description={description} photoUrl={photoUrl} name={name} message={message} />
      ))}
    </div>
  );
}


export default Feed;
