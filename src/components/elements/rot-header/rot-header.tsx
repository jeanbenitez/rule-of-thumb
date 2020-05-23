import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { RotMenuOption } from './interfaces';

@Component({
  tag: 'rot-header',
  styleUrl: 'rot-header.scss',
  shadow: true,
})
export class RotHeader implements ComponentInterface {
  @Prop() titleName = 'Rule of Thumb.';
  @Prop() search = false;
  @Prop() menu: RotMenuOption[] = [];

  renderSearch() {
    return this.search && (
      'search-icon-here'
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
      </nav>
    );
  }

  render() {
    return (
      <Host>
        <h1>{this.titleName}</h1>
        {this.renderMenu()}
        {this.renderSearch()}
      </Host>
    );
  }
}
