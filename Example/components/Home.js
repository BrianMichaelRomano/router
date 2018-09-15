export default class HomeComponent {
  constructor(state) {
    this.state = {
      title: 'Home Component'
    };
  }

  template() {
    let render = `
      <h3>${this.state.title}</h3>
    `;

    return render;
  }
}
