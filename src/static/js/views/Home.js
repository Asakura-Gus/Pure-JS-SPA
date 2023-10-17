import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
        <h1>Welcome, pilgrim!</h1>
        <p>This is the homepage of your SPA.</p>
        <p>Feel free to browse to other pages at the speed of light!</p>
        <ul>
            <li><a href="/posts" data-link>View recent posts</a></li>
            <li><a href="/settings" data-link>Twik settings</a></li>
        </ul>
    `;
  }

}
