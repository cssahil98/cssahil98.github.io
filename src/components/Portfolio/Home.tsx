import React from 'react';
import './Home.css';
import Logo from '../../assets/images/logo.png'
import ProfilePic from '../../assets/images/headshot.jpg'
import project1 from '../../assets/images/p1.jpeg'
import project2 from '../../assets/images/p2.jpeg'
import project3 from '../../assets/images/p3.jpeg'
import project4 from '../../assets/images/p4.jpeg'

export const Home: React.FC = () => {
  return (
    <>
    <section className="hero">
        <nav>
            <img className="logo" src={Logo} alt="logo" />
            <ul id="nav-list">
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
            </ul>
            <button className="hamburger" id="hamburger">
                <i className="fas fa-bars"></i>
            </button>
        </nav>

        <div className="hero-area">

            <div className="hero-text">
                <h1>Chandra Shekhar</h1>
                <p>B.Tech, Computer Science</p>
                <div className="button"><a href="#about-me">About me</a></div>
            </div>

            <div className="socials">
                <div><a href="https://twitter.com/cssahil98" className="social">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a></div>
                <div><a href="https://github.com/cssahil98" className="social">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a></div>
                <div><a href="https://www.linkedin.com/in/cssahil98/" className="social">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a></div>
                
            </div>
        </div>
    </section>

    <section className="sub-section" id="about-me">

        <div className="information">
            <h2>About Me</h2>
            <p>Hello. I have created this demo website just for my learning process.</p>
        </div>

        <div className="headshot-container">
            <img className="headshot" src={ProfilePic} alt="Sahil headshot"/>
        </div>

    </section>

    <section className="sub-section-alternative" id="projects">
        <h2>Projects</h2>
        <div className="project-container">

            <div className="project-card">
                <img className="project-image" src={project1} alt="Project One" />
                <h3>Project One</h3>
                <p className="subtext">This is my project and some text about it. I enjoyed making it.</p>
                <hr/>
                <p className="subtext"><a className="project-link" href="https://github.com/cssahil98">View here</a></p>
            </div>

            <div className="project-card">
                <img className="project-image" src={project2} alt="Project One"/>
                <h3>Project Two</h3>
                <p className="subtext">This is my project and some text about it. I enjoyed making it.</p>
                <hr/>
                <p className="subtext"><a className="project-link" href="https://github.com/cssahil98">View here</a></p>
            </div>

            <div className="project-card">
                <img className="project-image" src={project3} alt="Project One"/>
                <h3>Project Three</h3>
                <p className="subtext">This is my project and some text about it. I enjoyed making it.</p>
                <hr/>
                <p className="subtext"><a className="project-link" href="https://github.com/cssahil98">View here</a></p>
            </div>

            <div className="project-card">
                <img className="project-image" src={project4} alt="Project One"/>
                <h3>Project Four</h3>
                <p className="subtext">This is my project and some text about it. I enjoyed making it.</p>
                <hr/>
                <p className="subtext"><a className="project-link" href="https://github.com/cssahil98">View here</a></p>
            </div>

            
        </div>
    </section>
    <footer id="contact-me">
        <h2>Contact Me</h2>
        <p>cssahil98@outlook.com</p>
    </footer>
    </>
  )
}