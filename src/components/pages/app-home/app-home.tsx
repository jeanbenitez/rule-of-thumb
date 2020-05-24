import { Component, h } from '@stencil/core';
import { RotDB } from '../../../storage/data';
import store from '../../../storage/store';
import { ROTVoteEvent } from '../../../storage/interfaces';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {
  onVote = (event: CustomEvent<ROTVoteEvent>) => {
    const { personId, vote } = event.detail;
    const persons = RotDB.addVoteToPerson(personId, vote);
    store.set('persons', persons);
  }

  getMainPerson() {
    return store.state.persons[0];
  }

  render() {
    return (
      <article>
        <rot-main-ruling person={this.getMainPerson()} />
        <section>
          <rot-message-banner></rot-message-banner>
          <h2>Votes</h2>
          {
            store.state.persons.map(
              person => <rot-vote-card person={person} onVote={this.onVote} />
            )
          }
        </section>
      </article>
    );
  }
}
