import { Link } from 'react-router-dom';
import Section from '../components/Section';
// import '../styles/Page.css';

function About() {
  return (
    <Section title="ABOUT ME">
      <h1>About Me</h1>
      <p>About Me
        Hey there! I’m [Your Name], a [Job Title] and part-time superhero, full-time design enthusiast.
        When I'm not busy making pixels behave and colors pop, you can find me [fun hobby or activity]. I’ve been in the design world for [X years] now, and my passion for creating visually stunning and user-friendly designs is what drives me every day. Whether it’s crafting a sleek website or coming up with eye-catching branding, I live and breathe design (don’t worry, I promise I shower regularly).
        Here’s a little about my journey:
        🎨 How I got hereFrom [previous career or academic background] to discovering my love for design, my path has been anything but ordinary. But hey, who wants ordinary, right? I officially dived into the design world when I [describe a pivotal moment, project, or decision].
        💡 My design philosophyI believe design should be both functional and beautiful—like a perfect cup of coffee or a well-crafted meme. I strive to blend creativity with purpose, making sure everything I create not only looks great but also solves real problems.
        🔧 Tools I useWhen it comes to design tools, I’m a [Adobe Illustrator, Figma, Sketch, etc.] enthusiast. If it’s got layers and it helps me create, I’m all in.
        🌟 Fun facts
        I once [fun, quirky personal achievement or anecdote].
        My spirit animal is [something random or funny].
        I can [fun talent or skill related to your work or something offbeat].
        If you want to chat about design, collaboration, or how much better your website could look (spoiler alert: it can), feel free to reach out! Or just grab a coffee with me and we can talk about life, design, and the inevitable robot uprising.
        Let’s create something awesome!</p>
      <Link to="/" className="btn btn-back">Back to Home</Link>
    </Section>
  );
}

export default About;