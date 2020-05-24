import { Component, ComponentInterface, Host, h, State } from '@stencil/core';

@Component({
  tag: 'rot-message-banner',
  styleUrl: 'rot-message-banner.scss',
  shadow: true,
})
export class RotMessageBanner implements ComponentInterface {
  @State() show = true;

  closeMessage = () => {
    this.show = false;
  }

  render() {
    return (
      <Host class={{ hide: !this.show }}>
        <span>Speak out. Be heard.</span>
        <b>Be Counted</b>
        <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
        <rot-button onClick={this.closeMessage}><rot-icon icon="x"></rot-icon></rot-button>
      </Host>
    );
  }

}
