import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const educationRef = ref(db, "education");

    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => data[key]);
        setEducationData(formattedData);
      }
    });
  }, []);

  return (
    <section id="education" className="education">
      <div className="section-heading text-center">
        <h2>Education</h2>
      </div>
      <div className="container">
        <div className="education-horizontal-timeline">
          <div className="row">
            {educationData.map((education, index) => (
              <div key={index} className="col-sm-4">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>{education.year}</h2>
                    <h3>{education.level}</h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true" />
                    <span className="single-timeline-horizontal" />
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">{education.school}</h4>
                      <h5>{education.location}</h5>
                      <p className="description">{education.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
