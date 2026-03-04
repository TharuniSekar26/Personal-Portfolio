
import './Experience.css';
function Experience() {
  const experiences = [
    { title: "Corporate Engineer", company: "FreeLancer", date: "May 2024 - Present", side: "right" },
    { title: "Software Developer", company: "Zoho Corporation", date: "Feb 2024 - June 2024", side: "left" },
    { title: "3rd PRIZE", company: "Code Smasher Contest", date: "National Level Symposium", side: "right" },
    { title: "1st PRIZE", company: "Paper Presentation", date: "May 2024 - Present", side: "left" },
    { title: "3rd PRIZE", company: "Code Crack", date: "National Level Symposium", side: "right" },
    // Add more items here...
  ];

  return (
    <section className="experience">
      <h2 className="experience-title"><i className="bi bi-briefcase-fill"></i> Experience & Achievements</h2>
      
      <div className="timeline">
        {experiences.map((item, index) => (
          <div key={index} className={`timeline-item ${item.side}`}>
            <div className="timeline-dot">
                <i className="bi bi-briefcase"></i>
            </div>
            <div className="timeline-content">
              <h3 style={{ fontSize: '24px' }}>{item.title}</h3>
              <h4 style={{ fontSize: '20px' }}>{item.company}</h4>
              <p style={{ fontSize: '16px' }}>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Experience