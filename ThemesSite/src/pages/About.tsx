import Section from '../components/Section';
import profilePhoto from '../assets/imgs/ProfilePhoto.jpg';

function About() {
  return (
    <div className='section-container'>
      <Section title=''>
          <div className='about-content'>
            <img src={profilePhoto} alt="About Me" className="about-image" />
            <h1 className='about-title'>About Me</h1>
            <p className='about-description'>
              Hi there! I'm Megan, a passionate UX/UI designer, frontend developer, illustrator, and self-proclaimed pixel nerd. With over 10 years of experience, I specialize in creating intuitive, user-centered applications for both web and mobile platforms.
            </p>
            <p className='about-description'>
              Throughout my career, I’ve had the privilege of working across a wide range of industries, including digital marketing, healthcare, semiconductor manufacturing, conference management, and AI, delivering seamless design and functionality. My expertise spans the entire product development lifecycle: from ideation and design to development and testing, ensuring a cohesive bridge between design and engineering teams.
            </p>
            <p className='about-description'>
              I’m proficient with design tools like Adobe Creative Suite, Figma, and Sketch, and equally comfortable building responsive, high-performance applications using React, TypeScript, Node.js, NPM, and Git. I thrive in environments where creativity and technical precision intersect, always focusing on delivering thoughtful, user-friendly solutions.
            </p>
            <p className='about-description'>
              This website was built with React, TypeScript, and Vite, showcasing my ability to create a polished, responsive portfolio that highlights my work and design philosophy. Please checkout the code on <a target="_blank" href="https://github.com/meglaurie/Portfolio-2026">Github</a>.
            </p>
            <p className='about-description'>
              I’m based in Calgary, Alberta, nestled near the breathtaking Canadian Rockies.
            </p>
            <p className='about-description'>
              Outside of work, you’ll often find me hiking through the mountains, cycling around the city, learning to longboard, and going on adventures.
            </p>
            <p className='about-description'>
              I’m powered by loud music and orange pekoe tea—two essential ingredients for creativity.
            </p>
            <div className='btn-container'>
              <a href="../src/assets/styles/web-resume-megan-laurie.pdf" download="web-resume-megan-laurie.pdf"><button className='btn'><i className="fa-solid fa-download"></i>Download Resume</button></a>
            </div>
          </div>
      </Section>
    </div>
  );
}

export default About;











