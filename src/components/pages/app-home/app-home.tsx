import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <article>
        <rot-main-ruling />
        <section>
          <rot-message-banner />
          <h2>Votes</h2>
          <rot-vote-cards />
          <rot-submit-name-banner />
        </section>
      </article>
    );
  }
}
