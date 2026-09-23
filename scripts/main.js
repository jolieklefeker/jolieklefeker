export class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Encapsulates styles and structure
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
        }
      </style>
      <button><slot>Click Me</slot></button>
    `;
  }
}

// Register the custom element globally
customElements.define('my-button', MyButton);

export class MyMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Encapsulates styles and structure
    this.shadowRoot.innerHTML = `
      <style>
        ul {
          display: flex;
          flex-direction: row;
          cursor: pointer;
        }
      </style>
      <nav class="main-menu">
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="../pages/about.html">about</a></li>
            <li><a href="../pages/projects.html">projects</a></li>
            <li><a href="../pages/contact.html">contact</a></li>
        </ul>
        </nav>
    `;
  }
}

// Register the custom element globally
customElements.define('my-menu', MyMenu);

export class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Encapsulates styles and structure
    this.shadowRoot.innerHTML = `
      <style>
        ul {
          cursor: pointer;
        }
      </style>
      <header>
        <h1> Jolie </h1> 
        <img id="logo" src="assets/josephine_klefeker_transparent.png" alt="Josephine Klefeker">
      </header>
    `;
  }
}

// Register the custom element globally
customElements.define('my-header', MyHeader);