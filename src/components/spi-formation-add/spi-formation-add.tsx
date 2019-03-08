import {Component, State, Prop} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-formation-add",
  styleUrl: "spi-formation-add.scss"
})
export class spiFormationAdd {
  @State() codeFormation : String;
  @State() debutAccreditation : Date ;
  @State() diplome : String ;
  @State() doubleDiplome : String ;
  @State() finAccreditation : Date ;
  @State() n0Annee : number ;
  @State() nomFormation : String ;
  @Prop()   home : RouterHistory;

  postFormation(f) {
    f.preventDefault();
    const codeFormation = this.codeFormation;
    const debutAccreditation = this.debutAccreditation;
    const diplome = this.diplome ;
    const doubleDiplome=this.doubleDiplome;
    const finAccreditation=this.finAccreditation;
    const n0Annee=this.n0Annee;
    const nomFormation=this.nomFormation;

    const payload = {
      codeFormation,
      debutAccreditation,
      diplome,
      doubleDiplome,
      finAccreditation,
      n0Annee,
      nomFormation,
    };

    fetch("https://api-dosispi.cleverapps.io/formations", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) {
        return res.json();
      })
      .then(() => {location.href='/formation/add';
      });
  }

  render() {
    return (
              
              <form>
            
    
    
    <div class="columns is-multiline is-mobile"> 
    
              <div class="column is-half">
              
              <input type="text" placeholder="Nom formation..." class="input is-primary is-rounded" onInput={(e: any) => (this.nomFormation = e.target.value)}/>
              <br></br><br></br>
              <input type="text" placeholder="Début accreditation..." class="input is-primary is-rounded" onInput={(e: any) => (this.debutAccreditation = e.target.value)}/>
    
          <br></br><br></br>
              <input type="email" placeholder="Code formation..." class="input is-primary is-rounded" onInput={(e: any) => (this.codeFormation = e.target.value)}/>
              <br></br><br></br>    
              <input type="tel" placeholder="Numero année..." class="input is-primary is-rounded" onInput={(e: any) => (this.n0Annee = e.target.value)}/>
              <br></br><br></br>

              
      </div>
      <div class="column is-half">
             
              <input type="tel" placeholder="Fin accréditation..." class="input is-primary is-rounded" onInput={(e: any) => (this.finAccreditation= e.target.value)}/>
              <br></br><br></br>
              <input type="text" placeholder="diplome ..." class="input is-primary is-rounded" onInput={(e: any) => (this.diplome = e.target.value)}/>
              <br></br><br></br>
             
              <div title="This is my tooltip">
              <div class="select is-primary is-rounded" >
              <select  onInput={(e: any) => (this.doubleDiplome = e.target.value)} >
             <option value="">Double diplome ?</option> 
            <option value="OUI" >OUI</option>
            <option value="NON" >NON</option>
          </select>
          </div>
             </div>
              <br></br><br></br>
              </div>
    
              
             
     </div> 
     <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <button onClick={this.postFormation.bind(this)} class="button is-success ">Submit</button>
      </p>
      <p class="control">
      <button type="reset" value="Vider les champs"  class="button is-light is-tooltip-danger tooltip is-tooltip-multiline" data-tooltip="en cliquant sur le bouton tout les champs seront vides" > Reset </button>
       
      </p>
    </div>
    
      </form>

    );
}
}


