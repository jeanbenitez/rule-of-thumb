import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'rot-submit-name-banner',
  styleUrl: 'rot-submit-name-banner.scss',
  shadow: true,
})
export class RotSubmitNameBanner implements ComponentInterface {

  render() {
    return (
      <Host>
        <h2>Is there anyone else you would want us to add?</h2>
        <rot-button theme="invert">Submit a Name</rot-button>
      </Host>
    );
  }

}
