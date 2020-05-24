import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { ROTPersonType } from '../../../storage/data';

@Component({
  tag: 'rot-main-ruling-card',
  styleUrl: 'rot-main-ruling-card.scss',
  shadow: true,
})
export class RotMainRulingCard implements ComponentInterface {
  @Prop() person!: ROTPersonType;

  render() {
    const { name, description, extras: { questionOpening, veredictQuestion, moreInfoLink } } = this.person;

    return (
      <Host>
        <div class="main-ruling-card--blur"></div>
        <div class="main-ruling-card">
          {questionOpening && <span class="question-opening">{questionOpening}</span>}
          <h1>{name}{questionOpening && '?'}</h1>
          <p>{description}</p>

          {moreInfoLink && (
            <div class="more-information">
              <rot-icon icon="wikipedia" />
              <a target="_blank" href={moreInfoLink}>More information</a>
            </div>
          )}

          <div class="veredict">
            {veredictQuestion && <span class="veredict--question">{veredictQuestion}</span>}
            <div class="veredict--buttons">
              <rot-button class="up"><rot-icon icon="thumb-up"></rot-icon></rot-button>
              <rot-button class="down"><rot-icon icon="thumb-down"></rot-icon></rot-button>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
