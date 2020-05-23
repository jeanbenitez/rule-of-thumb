import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'rot-button',
  styleUrl: 'rot-button.css',
  shadow: true,
})
export class RotButton implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
