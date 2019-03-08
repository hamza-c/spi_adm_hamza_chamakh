import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/formation" component="spi-formation" exact={true} />
              <stencil-route url="/formation/detail/:id" component="spi-detail-formation"  />
              <stencil-route url="/formation/add" component="spi-formation-add" exact={true}  />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
