import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member / Community Contributor</h4>
                <h5>AWS Security User Group (APAC)</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Actively participating in APAC-wide AWS security community initiatives. Collaborating with cloud security professionals to share knowledge on AWS security best practices, IAM, threat detection, and compliance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Guest Speaker & Mentor</h4>
                <h5>Career Guidance Volunteer, Jaipur</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Conducted "Career Roadmaps" sessions at ZPHS. Mentored 8th-10th grade students on career planning, technology pathways, and skill development, bridging the gap between rural students and tech sector opportunities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Symbiosis Institute of Technology</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              Relevant Coursework: Data Structures & Algorithms, Cloud Computing, Network Security, Machine Learning. Active participant in technical fests and hackathons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
