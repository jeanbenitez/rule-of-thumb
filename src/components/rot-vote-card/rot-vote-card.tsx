import { Component, ComponentInterface, Host, Prop, h, State, Event } from '@stencil/core';
import { EventEmitter } from '@stencil/router/dist/types/stencil.core';
import { getTimeAgoFormat } from '../../helpers/date';
import { ROTPersonType } from '../../storage/data';
import { ROTVoteType, ROTVoteEvent } from '../../storage/interfaces';
import store from '../../storage/store';

@Component({
  tag: 'rot-vote-card',
  styleUrl: 'rot-vote-card.scss',
  shadow: true,
})
export class RotVoteCard implements ComponentInterface {
  @Prop() person: ROTPersonType;

  @State() selectedVote: ROTVoteType;
  @State() voteDone = false;

  @Event() vote: EventEmitter<ROTVoteEvent>;

  onVote = () => {
    if (this.selectedVote) {
      this.vote.emit({ personId: this.person.id, vote: this.selectedVote });
      this.selectedVote = null;
      this.voteDone = true;
    } else {
      this.voteDone = false;
    }
  }

  selectVote(vote: ROTVoteType) {
    this.selectedVote = vote;
  }

  renderVoteButton(vote: ROTVoteType) {
    return (
      <rot-button
        class={{ selected: this.selectedVote === vote }}
        onClick={() => this.selectVote(vote)}
      >
        <rot-icon icon={`thumb-${vote}`} />
      </rot-button>
    );
  }

  getPersonCategory(category) {
    return store.state.categories.find(cat => cat.slug === category)?.name || category;
  }

  render() {
    const { name, description, expireDate, category } = this.person;

    return !!this.person && (
      <Host>
        <div class="name">
          <rot-icon icon="thumb-up" />
          <h1>{name}</h1>
        </div>

        <span class="date-and-category">
          <b>{getTimeAgoFormat(expireDate)}</b> in {this.getPersonCategory(category)}
        </span>

        <p>{description}</p>

        <div class="veredict--buttons">
          {
            !this.voteDone && [
              this.renderVoteButton('up'),
              this.renderVoteButton('down')
            ]
          }
          {
            <rot-button onClick={this.onVote} innerHTML={this.voteDone ? 'Vote again' : 'Vote now'} />
          }
        </div>
      </Host>
    );
  }

}
