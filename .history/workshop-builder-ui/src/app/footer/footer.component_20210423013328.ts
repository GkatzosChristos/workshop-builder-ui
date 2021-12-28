import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->

    <head>
      <title>Footer</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">
    </head>

    <footer class="container-fluid bg-grey py-5">
    <div class="container">
      <div class="row">
          <div class="col-md-6">
            <div class="row">
                <div class="col-md-6 ">
                  <div class="logo-part">
                      <img src="/assets/images/workshop_logo.jpg" class="w-50 logo-footer" >
                      <p>WorkShop Builder created in Methoni Pierias by <a href="https://www.linkedin.com/in/christos-gkatzos/">Gkatzos Christos</a>.</p>
                      <p>Use this website to manage your projects and check their progress.</p>
                  </div>
                </div>
                <div class="col-md-6 px-4">
                  <h6> About Us</h6>
                  <p>We are all about making real progress with your work while you having fun.</p>
                  <a href="#" class="btn-footer"> More Info </a><br>
                  <a href="#" class="btn-footer"> Contact Us</a>
                </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
                <div class="col-md-6 px-4">
                  <h6> Help us</h6>
                  <div class="row ">
                      <div class="col-md-6">
                        <ul>
                            <li> <a href="#"> Home</a> </li>
                            <li> <a href="#"> Projects</a> </li>
                            <li> <a href="#"> Team</a> </li>
                            <li> <a href="#"> Help</a> </li>
                            <li> <a href="#"> Contact Us</a> </li>
                        </ul>
                      </div>
                      <div class="col-md-6 px-4">
                        <ul>
                            <li> <a href="#"> Cab Faciliy</a> </li>
                            <li> <a href="#"> Fax</a> </li>
                            <li> <a href="#"> Terms</a> </li>
                            <li> <a href="#"> Policy</a> </li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div class="col-md-6 ">
                  <h6> Newsletter</h6>
                  <div class="social">
                      <a href="#"><i class="fa fa-facebook mr-1" aria-hidden="true"></i></a>
                      <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                  </div>
                  <form class="form-footer my-3">
                      <input type="text"  placeholder="search here...." name="search">
                      <input type="button" value="Go" >
                  </form>
                  <p>Here is your chance to find new projects and have fun creating new stuff!</p>
                </div>
            </div>
          </div>
      </div>
    </div>
    </footer>
    <!-- Credit to https://bootsnipp.com/snippets/M56El  -->
  `,
  styleUrls: ['./footerStyles.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
