import React,{useState} from 'react';

const MatchedSkills = ({ skills }) => {
    const [matchedSkills, setMatchedSkills] = useState([]);
    const [percentage, setPercentage] = useState(null);

    // const { skills,percentage } = response.data;
    //   setMatchedSkills(skills);
    //   setPercentage(percentage);

  return (
    <div>
      <h2>Matched Skills</h2>
      {matchedSkills.length > 0 && (
        <div>
          <h2>Matched Skills:</h2>
          <ul>
            {matchedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {percentage !== null && (
        <div>
          <h2>Percentage:</h2>
          <p>{percentage.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default MatchedSkills;
