import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
        <h1>Setup</h1>
        <p>From here you can setup your SPA.</p>
        <p>Settings can vary from versions (under development).</p>
        <ul>
            <li><a href="/" data-link>Return to Home</a></li>
            <li><a href="/posts" data-link>Read more about JS</a></li>
        </ul>
    `;
  }

}
