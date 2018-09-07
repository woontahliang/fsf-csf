import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from '../../services/backend/backend.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  errorMsg: string = "";

  foods: Food[] = [
    { value: 'SGP', viewValue: 'Singapore' },
    { value: 'MYS', viewValue: 'Malaysia' },
    { value: 'IND', viewValue: 'Indonesia' }
  ];

  constructor(private backendSvc: BackendService, private router: Router) { }

  ngOnInit() {
  }

  processForm(myForm: NgForm) {
    console.log('RegistrationFormComponent processForm: ', myForm.value);

    for (let i in myForm.value) {
      console.log('i = ', i, ', v = ', myForm.value[i]);
    }

    // var toProcess: User = { album_name: myForm.value.albumName, artist_name: myForm.value.artistName, album_rating: myForm.value.albumRating, image_url: myForm.value.albumCoverImage };
    var toProcess: User = new User(myForm.value.email, myForm.value.password, myForm.value.username, myForm.value.gender, myForm.value.dateofbirth, myForm.value.address, myForm.value.country, myForm.value.contactnumber);;
    console.log('RegistrationFormComponent toProcess: ', toProcess);
    this.backendSvc.registerData(toProcess)
      .subscribe(
        response => {
          console.log('RegistrationFormComponent Success!', response);
          this.router.navigate(['/display']);
        },
        error => {
          this.errorMsg = error.statusText;
        }
      );

    myForm.reset();
  }
}
