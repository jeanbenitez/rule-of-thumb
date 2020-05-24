import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { getVotesInPercents } from '../../../helpers/votes';
import { ROTPersonType } from '../../../storage/data';

@Component({
  tag: 'rot-votes-scorebar',
  styleUrl: 'rot-votes-scorebar.scss',
  shadow: true,
})
export class RotVotesScorebar implements ComponentInterface {
  @Prop() votes: ROTPersonType['votes'];

  render() {
    const percents = getVotesInPercents(this.votes);

    return (
      <Host>
        <div class="up" style={{ '--rot-vote-percentage': percents.up + '%' }}>
          <rot-icon icon="thumb-up" /> {percents.up}
        </div>
        <div class="down" style={{ '--rot-vote-percentage': percents.down + '%' }}>
          {percents.down} <rot-icon icon="thumb-down" />
        </div>
      </Host>
    );
  }

}
