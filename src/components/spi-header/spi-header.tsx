import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav
      class="navbar is-primary "
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          
          <span class="navbar-item">
            
            <strong>SPI-ADMIN </strong>
          
          </span>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-content"
            onClick={() => this.toggleBurger()}
            ref={el => (this.burger = el)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbar-content" class="navbar-menu" ref={el => (this.menu = el)}>
            <div class="navbar-start">
              <span class="navbar-item">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-chalkboard-teacher"></i>
                  Enseignant
                </a>
                  
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-user-graduate"></i>
                  Candidat
                </a>
                  
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-book-reader"></i>
                  Formation
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item" href="/formation">Afficher toutes les formations</a>
                    <a class="navbar-item" href="/formation/add">Ajouter une formation </a>
                    <a class="navbar-item" href="/formation/search">Rechercher une formation</a>
                  
                </div>
                  
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-graduation-cap"></i>
                  Promotion
                </a>
                  
            </div>
            </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
