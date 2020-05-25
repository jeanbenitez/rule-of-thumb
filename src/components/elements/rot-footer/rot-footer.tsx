import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'rot-footer',
  styleUrl: 'rot-footer.scss',
  shadow: true,
})
export class RotFooter implements ComponentInterface {

  render() {
    return (
      <Host>
        <nav>
          <a href="javascript:void(0)">Terms and Conditions</a>
          <a href="javascript:void(0)">Privacy Policy</a>
          <a href="javascript:void(0)">Contact Us</a>
        </nav>
        <nav>
          <a href="javascript:void(0)">Follow Us</a>
          <a href="javascript:void(0)" class="social"><rot-icon icon="facebook" /></a>
          <a href="javascript:void(0)" class="social"><rot-icon icon="twitter" /></a>
        </nav>
      </Host>
    );
  }

}
