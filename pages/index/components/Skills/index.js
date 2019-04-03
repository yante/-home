import React from "react";
import { skills } from "../../../../data";
import Skill from "./Skill";

export default () => (
  <div className="skills">
    <style jsx>
      {`
        .skills {
          display: flex;
        }
      `}
    </style>
    {Object.keys(skills).map(key => (
      <Skill {...skills[key]} key={key} />
    ))}
  </div>
);
