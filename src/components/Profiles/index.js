import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const profilesRef = ref(db, "profiles");

    onValue(profilesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const profilesArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setProfiles(profilesArray);
      }
    });
  }, []);

  return (
    <section id="profiles" className="profiles">
      <div className="profiles-details">
        <div className="section-heading text-center">
          <h2>Profiles</h2>
        </div>
        <div className="container">
          <div className="profiles-content">
            <div className="row">
              {profiles.map((profile) => (
                <div key={profile.id} className="col-sm-3">
                  <div className="single-profile">
                    <div className="profile-txt">
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={profile.icon}></i>
                      </a>
                      <div className="profile-icon-name">{profile.name}</div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <a
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={profile.icon}></i>
                        </a>
                        <div className="profile-icon-name">{profile.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
