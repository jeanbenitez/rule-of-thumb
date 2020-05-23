import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-blank-page',
  styleUrl: 'app-blank-page.scss',
  shadow: true
})
export class AppBlankPage {
  @Prop() match: MatchResults;
  @Prop() titleName: string;

  render() {
    return (
      <div class="app-blank-page">
        <p>{this.titleName}</p>
      </div>
    );
  }
}
