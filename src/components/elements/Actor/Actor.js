import React from "react";
import { IMAGE_BASE_URL } from "../../../config";
import "./Actor.css";
import Image from "../Images/no_image.jpg";
export default function Actor(props) {
  const POSTER_SIZE = "w154";
  return (
    <div className="rmdb-actor">
      <img
        src={
          props.actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}`
            : Image
        }
        alt="actor"
      />
      <span className="rmdb-actor-name">{props.actor.name}</span>
      <span className="rmdb-actor-character">{props.actor.character}</span>
    </div>
  );
}
