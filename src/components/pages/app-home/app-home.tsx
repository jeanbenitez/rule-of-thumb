import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <rot-main-ruling />
        <rot-message></rot-message>
        <h2>Votes</h2>
      </div>
    );
  }
}
