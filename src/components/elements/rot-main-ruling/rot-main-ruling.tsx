import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { getExpirationDays } from '../../../helpers/date';

@Component({
  tag: 'rot-main-ruling',
  styleUrl: 'rot-main-ruling.scss',
  shadow: true,
})
export class RotMainRuling implements ComponentInterface {
  @Prop() person = {
    name: 'Pope Francis',
    image: 'assets/images/people/pope.png',
    description: 'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
    extras: {
      moreInfoLink: 'https://en.wikipedia.org/wiki/Pope_Francis',
      questionOpening: 'What’s your opinion on',
      veredictQuestion: 'What’s your veredict?'
    },
    expireDate: new Date('06/07/2020')
  };

  render() {
    const expireInDays = getExpirationDays(this.person.expireDate);

    return this.person && (
      <Host style={{ 'background-image': `url(${this.person.image})` }}>
        <rot-main-ruling-card person={this.person} />

        <section class="closing-in-banner">
          <div>CLOSING IN</div>
          <div><b>{expireInDays}</b>{' '}day{expireInDays !== 1 && 's'}</div>
        </section>
      </Host>
    );
  }

}
