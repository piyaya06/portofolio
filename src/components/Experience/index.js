import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const experienceRef = ref(db, "experience");

    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert data object to an array for easier mapping
        const formattedData = Object.keys(data).map((key) => data[key]);
        setExperienceData(formattedData);
      }
    });
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="section-heading text-center">
        <h2>Experience</h2>
      </div>
      <div className="container">
        <div className="experience-content">
          <div className="main-timeline">
            <ul>
              {experienceData.map((experience, index) => (
                <li key={index}>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="experience-time text-right">
                          <h2>{experience.year}</h2>
                          <h3>{experience.role}</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span>
                                <i
                                  className="fa fa-circle"
                                  aria-hidden="true"
                                />
                              </span>
                              {experience.organization}
                            </h4>
                            <h5>{experience.location}</h5>
                            <p className="description">
                              {experience.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
