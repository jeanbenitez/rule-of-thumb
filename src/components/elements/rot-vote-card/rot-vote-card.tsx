import { Component, ComponentInterface, Host, Prop, h, State, Event } from '@stencil/core';
import { EventEmitter } from '@stencil/router/dist/types/stencil.core';
import { getTimeAgoFormat } from '../../../helpers/date';
import { ROTPersonType, ROTVoteType, ROTVoteEvent } from '../../../storage/interfaces';
import store from '../../../storage/store';
import { getMajorVote } from '../../../helpers/votes';

@Component({
  tag: 'rot-vote-card',
  styleUrl: 'rot-vote-card.scss',
  shadow: true,
})
export class RotVoteCard implements ComponentInterface {
  @Prop() person: ROTPersonType;

  @State() selectedVote: ROTVoteType = 'up';
  @State() voteDone = false;

  @Event() vote: EventEmitter<ROTVoteEvent>;

  onVote = () => {
    if (!this.voteDone) {
      this.vote.emit({ personId: this.person.id, vote: this.selectedVote });
      this.selectedVote = 'up';
      this.voteDone = true;
    } else {
      this.voteDone = false;
    }
  }

  selectVote(vote: ROTVoteType) {
    this.selectedVote = vote;
  }

  renderVoteButton(vote: ROTVoteType, onlyIcon = false) {
    return (
      <rot-button
        key={vote}
        class={{
          hide: this.voteDone,
          thumb: true,
          [vote]: true,
          selected: !onlyIcon && this.selectedVote === vote
        }}
        onClick={() => !onlyIcon && this.selectVote(vote)}
      >
        <rot-icon theme={vote} icon={`thumb-${vote}`} />
      </rot-button>
    );
  }

  getPersonCategory(category) {
    return store.state.categories.find(cat => cat.slug === category)?.name || category;
  }

  render() {
    const { name, description, expireDate, category } = this.person;
    const majorVote = getMajorVote(this.person.votes);

    return !!this.person && (
      <Host style={{ '--rot-vote-card-bg-image': `url(${this.person.image})` }}>
        <div class="title-name">
          <rot-icon theme={majorVote} icon={`thumb-${majorVote}`} />
          <h1>{name}</h1>
        </div>
        <section>
          <span class="date-and-category">
            <b>{getTimeAgoFormat(expireDate)}</b> in {this.getPersonCategory(category)}
          </span>

          <p>{this.voteDone ? 'Thank for your voting' : description}</p>

          <div class="vote-buttons">
            {
              [
                this.renderVoteButton('up'),
                this.renderVoteButton('down'),
                <rot-button
                  key="v"
                  theme="text"
                  onClick={this.onVote}
                  innerHTML={this.voteDone ? 'Vote again' : 'Vote now'}
                />
              ]
            }
            {

            }
          </div>
        </section>
        <rot-votes-scorebar votes={this.person.votes} />
      </Host>
    );
  }

}
