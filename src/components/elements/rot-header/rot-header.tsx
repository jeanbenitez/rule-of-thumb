import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { RotMenuOption } from './interfaces';

@Component({
  tag: 'rot-header',
  styleUrl: 'rot-header.scss',
  shadow: true,
})
export class RotHeader implements ComponentInterface {
  @Prop() titleName = 'Rule of Thumb.';
  @Prop() search = true;
  @Prop() menu: RotMenuOption[] = [];

  renderSearch() {
    return this.search && (
      <rot-button><rot-icon icon="search" /></rot-button>
    );
  }

  renderMenu() {
    return (
      <nav>
        {
          this.menu.map((item) => (
            <stencil-route-link url={item.url}>{item.text}</stencil-route-link>
          ))
        }
        {this.renderSearch()}
      </nav>
    );
  }

  render() {
    return (
      <Host>
        <stencil-route-link url="/">
          <h1>{this.titleName}</h1>
        </stencil-route-link>
        {this.renderMenu()}
      </Host>
    );
  }
}
