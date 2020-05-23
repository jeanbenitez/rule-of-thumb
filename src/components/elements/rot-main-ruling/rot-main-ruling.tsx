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
      questionOpening: 'What’s your opinion on',
      veredictQuestion: 'What’s your veredict?'
    },
    expireDate: new Date('06/07/2020')
  };



  render() {
    const { name, description, image, extras: { questionOpening, veredictQuestion } } = this.person;

    const expireInDays = getExpirationDays(this.person.expireDate);

    return this.person && (
      <Host style={{ 'background-image': `url(${image})` }}>

        <div class="main-ruling-card--blur"></div>
        <div class="main-ruling-card">
          {questionOpening && <span class="question-opening">{questionOpening}</span>}
          <h1>{name}{questionOpening && '?'}</h1>
          <p>{description}</p>
          <slot name="more-info"></slot>
          {veredictQuestion && <span class="veredict-question">{veredictQuestion}</span>}
        </div>

        <div class="closing-in">
          <span>{expireInDays === 1 ? '1 day' : `${expireInDays} days`}</span>
        </div>
      </Host>
    );
  }

}
