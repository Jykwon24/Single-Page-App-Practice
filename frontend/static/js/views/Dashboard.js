import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>SPA Set Up Practice</h1>

      <p>
        This is purely JS only, need to implement React in class.
      </p>
      <p>
      <a href="/posts" data-link>View Recent Posts</a>
      </p>
    `;
  }
}
