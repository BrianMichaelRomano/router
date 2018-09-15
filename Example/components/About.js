export default class AboutComponent {
  constructor(state) {
    this.state = {
      title: 'About Component'
    };
  }

  template() {
    let render = `
      <h3>${this.state.title}</h3>
    `;

    return render;
  }
}
