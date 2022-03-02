import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import React from "react";
import InputOption from "./InputOption";
import "./Feed.css";
import Post from "../Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input placeholder="Enter post?" type="text" />
            <button type="submit">send</button>
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
      <Post
        name="Akhmadjon Abdusamadov"
        description="this is test description"
        message="it should work here"
      />
    </div>
  );
}

export default Feed;
