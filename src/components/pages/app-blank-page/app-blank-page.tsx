import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-blank-page',
  styleUrl: 'app-blank-page.css',
  shadow: true
})
export class AppBlankPage {
  @Prop() match: MatchResults;

  render() {
    return (
      <div class="app-blank-page">
        <p>{this.match && this.match.params.title}</p>
      </div>
    );
  }
}
