import { LitElement, html, css } from "lit";

export class PortfolioNavBar extends LitElement {
  static get tag() {
    return "portfolio-nav-bar";
  }

  static get styles() {
    return css`
      nav {
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
        background-color: var(--ddd-theme-default-nittanyNavy);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        height: 50px;
      }
  
      ul {
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin: 0;
        padding: 1rem 0;
      }
  
      a {
        text-decoration: none;
        color: var(--ddd-theme-primary);
        font-family: var(--ddd-font-navigation);
        font-weight: bold;
        transition: color 0.2s ease;
      }
  
      a:hover,
      a.active {
        color: var(--ddd-theme-accent);
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Work-Experience">Work Experience</a></li>
          <li><a href="#Resume">Resume</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    `;
  }

  firstUpdated() {
    const links = this.shadowRoot.querySelectorAll("a");
    const sectionIds = Array.from(links).map((link) => link.getAttribute("href").substring(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = this.shadowRoot.querySelector(`a[href="#${entry.target.id}"]`);
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            link?.classList.add("active");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // Adjust depending on when you want it to "activate"
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
  }
}

customElements.define(PortfolioNavBar.tag, PortfolioNavBar);