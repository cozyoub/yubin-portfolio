const SKILLS = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Flutter'] },
  { category: 'Backend', items: ['Spring Boot', 'Python', 'Django'] },
  { category: 'Database', items: ['MySQL', 'Oracle'] },
  { category: 'Tools', items: ['Git', 'Figma', 'VS Code'] },
];

const Skills = () => {
  return (
    <section className="ke-section ke-section--skills" id="skills">
      <div className="ke-skills">
        <div className="ke-skills__header">
          <p className="ke-label" data-aos="fade-up" data-aos-duration="800">SKILLS</p>
          <h2 className="ke-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            기술 스택
          </h2>
        </div>
        <div className="ke-skills__grid" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="ke-skill-card">
              <h3 className="ke-skill-card__title">{skill.category}</h3>
              <ul className="ke-skill-card__list">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
