import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
}
