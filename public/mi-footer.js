customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Copyright © 2019 Sosa Corona Juan Carlos IC-51M.";
  }
}, { extends: "footer" });