import React from 'react';

const About = () => {
  return (
    <section className="section about" aria-label="about">
      <div className="container">

        <div className="about-banner img-holder" style={{ '--width': 600, '--height': 700 }}>
          <img src="../images/about-banner.jpg" width="600" height="700" loading="lazy" alt="about banner" className="img-cover" />

          <button className="play-btn" aria-label="play video">
            <ion-icon name="play" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <div className="about-content">

          <h2 className="h2 section-title">Efficiency. Transparency. Control.</h2>

          <p className="section-text">
            Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own.
            The platform drives efficiency, cost transparency, and control into the hands of the consumers. Hously is Real Estate Redefined.
          </p>

          <a href="#" className="btn btn-primary">Learn More</a>

        </div>

      </div>
    </section>
  );
}

export default About;
