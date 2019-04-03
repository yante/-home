import React from "react";

export default function Skill(skill) {
  return (
    <div className="skill">
      <style jsx>{`
        .skill {
          cursor: pointer;
          margin-right: 5px;
        }
        .skill:hover {
          border-bottom: 3px solid #000;
        }
      `}</style>
      {skill.name}
    </div>
  );
}
