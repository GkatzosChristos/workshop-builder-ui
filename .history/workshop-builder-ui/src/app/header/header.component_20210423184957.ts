import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <head>
      <title>header</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">
    </head>
    <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://localhost:4200/">
          <img src="/assets/images/workshop_logo.jpg" alt="WorkShop Builder">
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu has-text-centered">
      <div class="navbar-start">
        <a class="navbar-item has-text-white " routerLink="/"><i class="fa fa-home mr-1" aria-hidden="true"></i>Home</a>
        <a class="navbar-item has-text-white " routerLink="/projects"><i class="fa fa-tasks mr-1" aria-hidden="true"></i>Projects</a>
        <a class="navbar-item has-text-white" routerLink="/aboutUs"><i class="fa fa-building mr-1" aria-hidden="true"></i>About Us</a>
        <a class="navbar-item has-text-white " routerLink="/contactUs"><i class="fa fa-envelope mr-1" aria-hidden="true"></i>Contact Us</a>
        <div class="control has-addons">
          <p class="control is-expanded"><input class="input" type="text" placeholder="Find a project..."></p>
        </div>
        <div class="control">
          <a class="button is-light is-outlined">
            Search
          </a> 
        </div>
    </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link has-text-white">
          More
        </a>
        <div class="navbar-dropdown is-right has-background-dark ">
          <a class="navbar-item has-text-white" href="#"><i class="fa fa-cog mr-1" aria-hidden="true"></i>Settings</a>
          <a class="navbar-item has-text-white" href="#"><i class="fa fa-sign-in mr-1" aria-hidden="true"></i>Sign in</a>
          <a class="navbar-item has-text-white" href="#"><i class="fa fa-user-plus mr-1" aria-hidden="true"></i>Sign up</a>
          <hr class="navbar-divider">
          <a class="navbar-item has-text-white" href="/contactUs"><i class="fa fa-exclamation-triangle mr-1" aria-hidden="true"></i>Report an issue</a>
        </div>
        </div>
      </div>
    </div>
  </nav>
  </header>
  `,
  styles: ['nav{background: #292929;}'+
           '.navbar-item:hover{background-color:#303030 !important;}'+
           '.navbar-item has-dropdown is-hoverable has-text-white:hover{background-color:#303030 !important;}'
          ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
