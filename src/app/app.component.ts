import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterModule,Router , ActivatedRoute, Params} from '@angular/router';
=======

>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
<<<<<<< HEAD
sideBarIsOpened = false;
constructor(private router: Router) { }
onClickSubmit() {

this.router.navigate(['/login']);
    }

  ngOnInit() {
    this.sideBarIsOpened = true;
  }

  toggleSideBar(shouldOpen: boolean) {
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }




=======
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
}
