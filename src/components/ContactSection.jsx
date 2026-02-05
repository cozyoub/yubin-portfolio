const ContactSection = () => {
  return (
    <section id="contact" className="ke-section ke-section--contact">
      <div className="ke-contact">
        <p className="ke-label" data-aos="fade-up" data-aos-duration="800">CONTACT</p>
        <h2 className="ke-title ke-title--large" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          Let's Talk
        </h2>
        <a 
          href="mailto:cozyoub@gmail.com" 
          className="ke-contact__email"
          data-aos="fade-up" 
          data-aos-duration="800" 
          data-aos-delay="200"
        >
          cozyoub@gmail.com
        </a>
        <div className="ke-contact__links" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <a href="https://github.com/cozyoub" target="_blank" rel="noopener noreferrer" className="ke-contact__link">
            GitHub
          </a>
          <a href="https://github.com/ubzzang" target="_blank" rel="noopener noreferrer" className="ke-contact__link">
            Dev GitHub
          </a>
        </div>
        <p className="ke-contact__copyright">© 2025 Yubin Lee</p>
      </div>
    </section>
  );
};

export default ContactSection;
