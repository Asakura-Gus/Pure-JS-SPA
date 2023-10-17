import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
        <h1>Vanilla JS Rocks!</h1>
        <p>Did you see it? Javascript loaded the page in a blink of an eye.</p>
        <p>Embrace the power it can give you!</p>
        <ul>
            <li><a href="/" data-link>Return to home</a></li>
            <li><a href="/settings" data-link>Twik settings</a></li>
        </ul>
    `;
  }

}
