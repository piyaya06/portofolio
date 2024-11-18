import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";

const WelcomeHero = () => {
  const [userData, setUserData] = useState({
    name: "Aprillia Mononutu",
    profession: "UI/UX Designer and Web Developer",
  });

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "users/aprilia-mononutu");

    // Ambil data secara real-time dari Firebase
    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserData(data); // Perbarui state saat ada perubahan di Firebase
      }
    });

    // Simpan data awal ke Firebase jika belum ada
    set(userRef, {
      name: userData.name,
      profession: userData.profession,
    }).catch((error) => {
      console.error("Error saving initial data:", error);
    });

    // Hapus listener saat komponen di-unmount
    return () => unsubscribe();
  }, []); // Hanya dijalankan sekali setelah komponen dimount

  return (
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>
                hi <span>,</span> i am <br />{" "}
                {userData.name || "Aprillia Mononutu"} <br />
              </h2>
              <p>{userData.profession || "UI/UX DESIGNER AND WEB DEVELOPER"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;
