import { Component, State } from "@stencil/core";

@Component({
  tag: "spi-formation",
  styleUrl: "spi-formation.scss"
})
export class SpiFormation {

  @State()
  formations: any;
  componentWillLoad() {
    return  fetch("https://api-dosispi.cleverapps.io/formations")
        .then(response => response.json())
        .then(data => {
          this.formations = data;});
  }
  deleteFormation(item) {
    return fetch("https://api-dosispi.cleverapps.io/formations", {
      method: 'DELETE',
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    }).then(() => {location.href='/formation';}
    ).catch((error) => {
      alert(' Erreur de suppression ');
      console.error(error);
    });
  }

  render() {
    return (
        <div>
        <h1 class="title is-3 en" > Formations </h1><br></br>
        <table class="rwd-table">
          <thead>
          <tr>
            <th>Code</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Nom</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.formations.map(item =>
            <tr>
              <td>{item.codeFormation}</td>&nbsp;&nbsp;&nbsp;&nbsp;
              <td>{item.nomFormation}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <stencil-route-link url={"/formation/detail/"+ item.codeFormation}>
              <a class="button is-info is-outlined">Détails</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </stencil-route-link>
              <a class="button is-danger is-outlined"onClick={() => this.deleteFormation(item)}><span>Supprimer</span><span class="icon is-small"><i class="fas fa-times"></i></span></a>
              <br></br><br></br></tr>
          )}
          </tbody>
        </table>
      </div>

    );}
    }


