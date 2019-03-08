/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface SpiDetailFormation {
    'home': RouterHistory;
    'match': MatchResults;
  }
  interface SpiDetailFormationAttributes extends StencilHTMLAttributes {
    'home'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface SpiFormationAdd {
    'home': RouterHistory;
  }
  interface SpiFormationAddAttributes extends StencilHTMLAttributes {
    'home'?: RouterHistory;
  }

  interface SpiFormation {}
  interface SpiFormationAttributes extends StencilHTMLAttributes {}

  interface SpiHeader {}
  interface SpiHeaderAttributes extends StencilHTMLAttributes {}

  interface SpiHome {}
  interface SpiHomeAttributes extends StencilHTMLAttributes {}

  interface SpiRoot {}
  interface SpiRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SpiDetailFormation': Components.SpiDetailFormation;
    'SpiFormationAdd': Components.SpiFormationAdd;
    'SpiFormation': Components.SpiFormation;
    'SpiHeader': Components.SpiHeader;
    'SpiHome': Components.SpiHome;
    'SpiRoot': Components.SpiRoot;
  }

  interface StencilIntrinsicElements {
    'spi-detail-formation': Components.SpiDetailFormationAttributes;
    'spi-formation-add': Components.SpiFormationAddAttributes;
    'spi-formation': Components.SpiFormationAttributes;
    'spi-header': Components.SpiHeaderAttributes;
    'spi-home': Components.SpiHomeAttributes;
    'spi-root': Components.SpiRootAttributes;
  }


  interface HTMLSpiDetailFormationElement extends Components.SpiDetailFormation, HTMLStencilElement {}
  var HTMLSpiDetailFormationElement: {
    prototype: HTMLSpiDetailFormationElement;
    new (): HTMLSpiDetailFormationElement;
  };

  interface HTMLSpiFormationAddElement extends Components.SpiFormationAdd, HTMLStencilElement {}
  var HTMLSpiFormationAddElement: {
    prototype: HTMLSpiFormationAddElement;
    new (): HTMLSpiFormationAddElement;
  };

  interface HTMLSpiFormationElement extends Components.SpiFormation, HTMLStencilElement {}
  var HTMLSpiFormationElement: {
    prototype: HTMLSpiFormationElement;
    new (): HTMLSpiFormationElement;
  };

  interface HTMLSpiHeaderElement extends Components.SpiHeader, HTMLStencilElement {}
  var HTMLSpiHeaderElement: {
    prototype: HTMLSpiHeaderElement;
    new (): HTMLSpiHeaderElement;
  };

  interface HTMLSpiHomeElement extends Components.SpiHome, HTMLStencilElement {}
  var HTMLSpiHomeElement: {
    prototype: HTMLSpiHomeElement;
    new (): HTMLSpiHomeElement;
  };

  interface HTMLSpiRootElement extends Components.SpiRoot, HTMLStencilElement {}
  var HTMLSpiRootElement: {
    prototype: HTMLSpiRootElement;
    new (): HTMLSpiRootElement;
  };

  interface HTMLElementTagNameMap {
    'spi-detail-formation': HTMLSpiDetailFormationElement
    'spi-formation-add': HTMLSpiFormationAddElement
    'spi-formation': HTMLSpiFormationElement
    'spi-header': HTMLSpiHeaderElement
    'spi-home': HTMLSpiHomeElement
    'spi-root': HTMLSpiRootElement
  }

  interface ElementTagNameMap {
    'spi-detail-formation': HTMLSpiDetailFormationElement;
    'spi-formation-add': HTMLSpiFormationAddElement;
    'spi-formation': HTMLSpiFormationElement;
    'spi-header': HTMLSpiHeaderElement;
    'spi-home': HTMLSpiHomeElement;
    'spi-root': HTMLSpiRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}