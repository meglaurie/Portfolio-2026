import { Link } from 'react-router-dom';
import Section from '../components/Section';
import profilePhoto from '../assets/imgs/ProfilePhoto.jpg';

function About() {
  return (
    <div className='section-container'>
      <Section title="ABOUT ME">
          <div>
            <img src={profilePhoto} alt="About Me" className="about-image" />
            <h1 className='about-title'>About Me</h1>
            <p className='about-description'>
              Hey there! I’m Megan, a I am a UX/UI Designer, Frontend Developer and part-time superhero, full-time design enthusiast.
              When I'm not busy making pixels behave and colors pop, you can find me [fun hobby or activity].
            </p>
            <p className='about-description'>
            I’ve been in the design world for almost 10 years now, and my passion for creating visually stunning and user-friendly designs is what drives me every day. Whether it’s crafting a sleek website or coming up with eye-catching branding, I live and breathe design.
              Here’s a little about my journey:
              🎨 How I got hereFrom [previous career or academic background] to discovering my love for design, my path has been anything but ordinary. But hey, who wants ordinary, right? I officially dived into the design world when I [describe a pivotal moment, project, or decision].
              💡 My design philosophyI believe design should be both functional and beautiful—like a perfect cup of coffee or a well-crafted meme. I strive to blend creativity with purpose, making sure everything I create not only looks great but also solves real problems.
              🔧 Tools I useWhen it comes to design tools, I’m a [Adobe Illustrator, Figma, Sketch, etc.] enthusiast. If it’s got layers and it helps me create, I’m all in.
            </p>
            <p className='about-description'>
              🌟 Fun facts
              I once [fun, quirky personal achievement or anecdote].
              My spirit animal is [something random or funny].
              I can [fun talent or skill related to your work or something offbeat].
              If you want to chat about design, collaboration, or how much better your website could look (spoiler alert: it can), feel free to reach out! Or just grab a coffee with me and we can talk about life, design, and the inevitable robot uprising.
              Let’s create something awesome!</p>
            <div className='btn-container'>
              <Link to="/" className="btn">Download Resume</Link>
            </div>
          </div>
      </Section>
    </div>
  );
}

export default About;