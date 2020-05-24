import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'rot-button',
  styleUrl: 'rot-button.scss',
  shadow: true,
})
export class RotButton implements ComponentInterface {
  @Prop({ reflect: true }) theme: 'normal' | 'invert' = 'normal';

  render() {
    return (
      <Host role="button">
        <slot></slot>
      </Host>
    );
  }
}
