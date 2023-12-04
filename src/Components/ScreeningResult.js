import React, { useEffect, useState } from 'react';

const ScreeningResults = ({ parsedResumeData }) => {
  const [screeningPassed, setScreeningPassed] = useState(false);

  useEffect(() => {
    if (location.state && location.state.parsedResumeData) {
      // Example screening logic
      const { skills } = location.state.parsedResumeData;
      const javaPresent = skills.includes('Java');
      const javascriptPresent = skills.includes('JavaScript');

      // Adjust screening criteria based on your specific requirements
      if (javaPresent && javascriptPresent) {
        setScreeningPassed(true);
      } else {
        setScreeningPassed(false);
      }
    }
  }, [location.state]);

  return (
    <div>
      <h2>Screening Results</h2>
      {screeningPassed ? (
        <p>Candidate passes the screening criteria.</p>
      ) : (
        <p>Candidate does not meet the screening criteria.</p>
      )}
    </div>
  );
};

export default ScreeningResults;
