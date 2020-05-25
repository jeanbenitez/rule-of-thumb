import { Component, ComponentInterface, Host, h } from '@stencil/core';
import store from '../../../storage/store';
import { ROTVoteEvent } from '../../../storage/interfaces';
import { RotDB } from '../../../storage/data';

@Component({
  tag: 'rot-vote-cards',
  styleUrl: 'rot-vote-cards.scss',
  shadow: true,
})
export class RotVoteCards implements ComponentInterface {
  onVote = (event: CustomEvent<ROTVoteEvent>) => {
    const { personId, vote } = event.detail;
    const persons = RotDB.addVoteToPerson(personId, vote);
    store.set('persons', persons);
  }

  render() {
    return (
      <Host>
        {
          store.state.persons.map(
            person => <rot-vote-card key={person.id} person={person} onVote={this.onVote} />
          )
        }
      </Host>
    );
  }

}
