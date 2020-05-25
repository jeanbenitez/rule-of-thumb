import { Component, ComponentInterface, Host, h, Prop, State } from '@stencil/core';
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

  @State() menuOpened = false;

  closeMenu = () => {
    this.menuOpened = false;
  }

  toggleMenu = () => {
    this.menuOpened = !this.menuOpened;
  }

  renderSearch() {
    return this.search && (
      <rot-button><rot-icon icon="search" /></rot-button>
    );
  }

  renderMenu() {
    return (
      <nav class={{ 'menu-opened': this.menuOpened }}>
        {
          this.menu.map((item) => (
            <stencil-route-link onClick={this.closeMenu} url={item.url}>{item.text}</stencil-route-link>
          ))
        }
        {this.renderSearch()}
        <rot-button class="responsive-icon" onClick={this.toggleMenu}>
          <rot-icon icon={this.menuOpened ? "x" : "navicon"} />
        </rot-button>
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
