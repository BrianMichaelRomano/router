export default class ContactComponent {
  constructor(state) {
    this.state = {
      title: 'Contact Component'
    };
  }

  template() {
    let render = `
      <h3>${this.state.title}</h3>
    `;

    return render;
  }
}
