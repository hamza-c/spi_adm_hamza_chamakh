import {Component, Prop, State} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-detail-formation",
  styleUrl: "spi-detail-formation.scss"
})
export class SpiFormationDetail {
  @Prop()   home : RouterHistory;
  @Prop()   match : MatchResults;
  @State()
  item: any;
  componentWillLoad() {
    let id = this.match.params.id;
    return  fetch("https://api-dosispi.cleverapps.io/formations/"+id)
        .then(response => response.json())
        .then(data => {
          this.item = data;});
  }

  render() {
    return (
      <div>
        <h1 class="title is-3 en"> Formations </h1>
        <table class="table">
          <thead>
          <tr>
            <th>Code</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Nom</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>debut Accreditation</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>diplome</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>double Diplome</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>fin Accreditation</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>n0 Annee</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.item.codeFormation}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>{this.item.nomFormation}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>{this.item.debutAccreditation}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>{this.item.diplome}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>{this.item.doubleDiplome}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>{this.item.finAccreditation}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>{this.item.n0Annee}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </tr>
          </tbody>
        </table>
      </div>

    );}
}