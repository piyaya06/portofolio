import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [aboutData, setAboutData] = useState({
    about:
      "Halo! Nama saya Aprillia Erit Barlina Mononutu. Saya merupakan mahasiswa Informatika di Universitas Klabat. Saya memiliki minat besar dalam olahraga dan aktif di berbagai kegiatan di desa dan gereja. Harapan saya adalah menjadi orang yang sukses, dapat menjadi berkat bagi banyak orang, dan memberikan kontribusi yang bermanfaat bagi siapapun.",
    image: "", // Gambar Base64 yang akan diambil dari Firebase
  });

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");

    // Mendengarkan perubahan data "about" dan "image" dari Firebase
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Pastikan gambar diambil dengan prefiks Base64
        setAboutData((prevData) => ({
          ...prevData,
          image: data.image
            ? `data:image/jpeg;base64,${data.image}`
            : prevData.image, // Menambahkan prefiks
        }));
      }
    });
  }, []); // Mengambil data hanya sekali saat komponen dimuat

  return (
    <section id="about" className="about">
      <div className="container text-center">
        <div className="section-heading">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="row justify-content-center align-items-center">
            {/* Bagian Gambar */}
            <div className="col-md-4 text-center mb-4">
              {aboutData.image ? (
                <img
                  className="img-fluid rounded shadow-sm"
                  src={aboutData.image}
                  alt="About Me"
                  style={{
                    width: "100%",
                    maxWidth: "200px", // Ukuran gambar maksimal diatur di sini
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div>Loading image...</div>
              )}
            </div>

            {/* Bagian Teks */}
            <div className="col-md-8">
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  textAlign: "center",
                }}
              >
                {aboutData.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
