const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>About Me</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>
                  Halo! Nama saya Aprillia Erit Barlina Mononutu. Saya saat ini
                  merupakan mahasiswa Informatika di Universitas Klabat.
                </h3>
                <p>
                  Saya memiliki minat yang besar dalam olahraga dan juga aktif
                  berpartisipasi dalam berbagai kegiatan di desa dan di gereja.
                  Harapan saya adalah menjadi orang yang sukses, dapat menjadi
                  berkat bagi banyak orang dan tentunya dapat memberikan
                  kontribusi yang bermanfaat bagi siapapun.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="single-about-add-info">
                      <h3>Email</h3>
                      <p>aprilliamononutu@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-about-add-info">
                      <h3>Website</h3>
                      <p>www.unklab.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src="/images/eritttt.jpeg" alt="profile_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
