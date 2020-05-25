import { Component, ComponentInterface, Host, h } from '@stencil/core';
import { getExpirationDays } from '../../../helpers/date';
import store from '../../../storage/store';

@Component({
  tag: 'rot-main-ruling',
  styleUrl: 'rot-main-ruling.scss',
  shadow: true,
})
export class RotMainRuling implements ComponentInterface {
  render() {
    const { mainPerson } = store.state;
    const expireInDays = getExpirationDays(new Date(mainPerson.expireDate));

    return !!mainPerson && (
      <Host style={{ 'background-image': `url(${mainPerson.image})` }}>
        <div
          class="responsive-main-image"
          style={{ 'background-image': `url(${mainPerson.image})` }}
        ></div>
        <rot-main-ruling-card person={mainPerson} />

        <section class="closing-in-banner">
          <div>CLOSING IN</div>
          <div><b>{expireInDays}</b>{' '}day{expireInDays !== 1 && 's'}</div>
        </section>
      </Host>
    );
  }
}
