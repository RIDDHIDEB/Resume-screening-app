import React from 'react';

const MatchedSkills = ({ skills }) => {
  return (
    <div>
      <h2>Matched Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default MatchedSkills;
