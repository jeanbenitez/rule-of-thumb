import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'rot-icon',
  styleUrl: 'rot-icon.scss',
  shadow: true
})
export class RotIcon {
  @Prop({ reflect: true }) icon!: string;
}
