import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Footer = () => {
  const [footerData, setFooterData] = useState({
    copyright: "© 2024 Aprillia Mononutu. All rights reserved.",
  });

  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer");

    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFooterData((prevData) => ({
          ...prevData,
          copyright: data.copyright || prevData.copyright,
        }));
      }
    });
  }, []);

  return (
    <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
