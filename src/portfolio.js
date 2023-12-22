import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="header">
        <h2>Yeluri Surya Datta Sai Sri Vardhan</h2>
        <p>
          <a href="mailto:srivardhan.yeluri@gmail.com">
            srivardhan.yeluri@gmail.com
          </a>
        </p>
        <p>+91-9347705113 </p>
      </div>

      <div className="education">
        <h2>Education</h2>

        <div className="education-item">
          <h4>Undergraduation</h4>
          <p>
            Currently pursuing B.Tech(Specialization in Computer Science and Business Systems) in VIT-AP University
          </p>
          <p>CGPA: 9.12</p>
        </div>

        <div className="education-item">
          <h4>Higher secondary education</h4>
          <p>Narayana junior college,Vijayawada</p>
          <p>Score: 92.6%</p>
        </div>
      </div>

      <div className="skills">
        <h2>Languages Known</h2>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>HTML and CSS</li>
          <li>BootStrap</li>
          <li>React JS</li>
          <li>NodeJS</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="interests">
        <h2>Interests and Hobbies</h2>
        <ul>
          <li>Reading Books</li>
          <li>Watching Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
