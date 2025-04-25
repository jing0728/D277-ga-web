class SocialFollow extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="social-sidebar">
        <h4>Follow Us</h4>
        <a href="contact.html" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="contact.html" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="contact.html" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    `;
  }
}
customElements.define('social-follow', SocialFollow);
