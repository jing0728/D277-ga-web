class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer-nav">
        <a href="index.html">Home</a>
        <a href="https://geology.com/cities-map/georgia.shtml" target="_blank">Maps</a>
        <a href="history.html">History</a>
        <a href="contact.html">Contact</a>
        <p>&copy; 2025 Georgia Project</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
