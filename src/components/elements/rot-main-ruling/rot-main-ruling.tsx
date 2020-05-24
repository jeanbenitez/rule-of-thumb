import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { getExpirationDays } from '../../../helpers/date';
import { ROTPersonType } from '../../../storage/data';

@Component({
  tag: 'rot-main-ruling',
  styleUrl: 'rot-main-ruling.scss',
  shadow: true,
})
export class RotMainRuling implements ComponentInterface {
  @Prop() person: ROTPersonType;

  render() {
    const expireInDays = getExpirationDays(new Date(this.person.expireDate));

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
