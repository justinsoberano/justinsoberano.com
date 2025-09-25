import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <p className="name-heading">Justin Soberano B.</p>
        <p className="job-title">Incoming Software Engineer at Meta</p>
        <h2 className="section-title">Experience</h2>
        <section className="experience-section">
        <div className="experience-item">
          <div className="experience-content">
            <span className="company-logo">Meta</span>
            <span className="role-title">Software Engineer Intern</span>
          </div>
          <span className="experience-date">Summer 2025</span>
        </div>
        
        <div className="experience-divider"></div>
        
        <div className="experience-item">
          <div className="experience-content">
            <span className="company-logo">Google</span>
            <span className="role-title">Frontend Developer</span>
          </div>
          <span className="experience-date">2023 - 2024</span>
        </div>
      </section>
      </div>
    </div>
  );
}

export default App;
