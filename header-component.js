class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="header-bar"></div>

      <header>
        <div class="nav-center">
          <div class="nav-left">
            <a href="index.html">Home</a>
            <a href="https://geology.com/cities-map/georgia.shtml" target="_blank">Map</a>
            <a href="history.html">History</a>
            <a href="transport.html">Transport</a>
          </div>

          <div class="nav-logo">
            <img src="images/Seal_of_Georgia.svg.png" alt="Georgia Seal" />
            <span><strong>STATE OF GEORGIA</strong></span>
          </div>

          <div class="nav-right">
  <div class="dropdown">
    <a href="cities.html" class="dropbtn">Cities</a> 
    <div class="dropdown-content">
      <a href="atlanta.html">Atlanta</a>
      <a href="savannah.html">Savannah</a>
      <a href="augusta.html">Augusta</a>
      <a href="athens.html">Athens</a>
    </div>
  </div>
  <a href="arts.html">Arts & Culture</a>
  <a href="education.html">Education</a>
  <a href="contact.html">Contact</a>
</div>


        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
