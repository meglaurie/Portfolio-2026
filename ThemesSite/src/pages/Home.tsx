import Section from "../components/Section";


function Home() {

  return (
    <div className="home-container">
      <div className="home-grid">
        {/* Hero Section */}
        <Section title="Portfolio 2026">
          <h1 className="hero-title" data-text="Megan Laurie">Megan Laurie</h1>
          <p className="hero-subtitle" data-text="UX/UI Designer + Fontend Developer">UX/UI Designer + Fontend Developer </p>
          <p className="hero-description">
            Bridging Design and Development with Precision and Passion. I thrive on transforming user-centric designs into smooth, interactive, and accessible digital experiences that delight users and meet business goals.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/megan-laurie/" target="_blank"><i className="icon fa-brands fa-linkedin fa-2xl"></i></a>
            <a href="https://github.com/meglaurie" target="_blank"><i className="icon fa-brands fa-github-alt fa-2xl"></i></a>
            <a href="mailto:hello@meganlaurie.ca" target="_blank"><i className="icon fa-solid fa-envelope fa-2xl"></i></a>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default Home;