import './Experience.css';

function Experience() {
  const experiences = [
    { title: "Technical Trainer", company: "Freelancer", date: "June 2024 - Present" },
    { title: "Software Developer Intern", company: "Zoho Corporation", date: "Feb 2024 - June 2024" },
    { title: "3rd Prize", company: "Code Smasher", date: "National Level" },
    { title: "1st Prize", company: "Paper Presentation", date: "May 2024" },
    { title: "3rd Prize", company: "Code Crack", date: "National Level" },
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Experience & Achievements</h2>

      <div className="timeline">
        {experiences.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;