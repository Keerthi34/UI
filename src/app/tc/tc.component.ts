import { Component, OnInit ,NgModule,
  Pipe
  } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/toPromise';

import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-tc',
  templateUrl: './tc.component.html',
  styleUrls: ['./tc.component.css']
})
export class TcComponent implements OnInit {

<<<<<<< HEAD
  constructor( private http: Http, private router: Router, private route: ActivatedRoute) {
=======
  constructor( private http: Http, private router: Router, private route: ActivatedRoute) { 
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
  }
  private headers =new Headers({'ContentType':'application/json'})
   teacher=[];
   class=[];
   section=[];
   subjects=[];
   timein=[];
   timeout=[];
   day=[];
   fetchDate=function()
   {

     this.http.get("http://10.10.5.54:3004/fetch").subscribe (
       (res:Response) =>{
         this.teacher=res.json();
           // var teacherslist=this.teacher[0].First_Name;
         console.log(this.teacher)

<<<<<<< HEAD

         console.log(this.Teacher_Name)


=======
         
         console.log(this.Teacher_Name)

      
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
       }
  )
   }
fetchclass=function()
{
<<<<<<< HEAD
  this.http.get("http://10.10.5.59:5000/getclass").subscribe (
=======
  this.http.get("http://10.10.5.4:5000/getclass").subscribe (
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
    (res:Response) =>{
      this.class=res.json();

       // var classes=this.class[0].classname;

     // console.log("vsjfbvckjs "+this.teacherslist)

<<<<<<< HEAD

=======
   
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
    }
)
}
fetchsection=function(pro)
{
  var hash={};
  hash['one']='onellll';
  console.log(hash['one'])
<<<<<<< HEAD
  this.http.get("http://10.10.5.59:5000/getclass").subscribe (
=======
  this.http.get("http://10.10.5.4:5000/getclass").subscribe (
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classid;
          hash[data[i].classes.classname]=data[i].classes.sections
       }
<<<<<<< HEAD

this.section=hash[pro]

=======
  
this.section=hash[pro]
      
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
    }
  )
}

fetchsubjects=function(pro)
{
  var hash={};
<<<<<<< HEAD

  this.http.get("http://10.10.5.59:5000/getclass").subscribe (
=======
  
  this.http.get("http://10.10.5.4:5000/getclass").subscribe (
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classid;
          hash[data[i].classes.sections[i]]=data[i].classes.subjects
       }
<<<<<<< HEAD

this.subjects=hash[pro]

=======
  
this.subjects=hash[pro]
      
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
    }
  )
}


/*fetchtimein=function()
{
  var hash={};

  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.timein=res.json();
      console.log(this.timein)
<<<<<<< HEAD



=======
     
     
   
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
    }
)
}
fetchtimeout=function()
{
  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.timein=res.json();
      console.log(this.timeout)

<<<<<<< HEAD


=======
     
   
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
    }
)
}*/

/*fetchday=function()
{
  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.day=res.json();
      console.log(this.day)

<<<<<<< HEAD


=======
     
   
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
    }
)
}*/

  ngOnInit() {
    this.fetchDate();
this.fetchclass();
 // this.fetchsection();
//this.fetchtimein();
 //this.fetchtimeout();
 //this.fetchday();
  }
  onSubmit=function(Teacher_Name) {
    alert(JSON.stringify(Teacher_Name))
<<<<<<< HEAD

=======
   
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3

    if(confirm("ARE U SURE FOR UPDATE?"))
    {
      alert(Teacher_Name.Teacher_Name)
      var tname=Teacher_Name._id;
      console.log(Teacher_Name)
      //const url="http://10.10.5.54:3004/update"+"/"+tname;
      const url="http://10.10.5.54:3004/post";

alert(url)

      return this.http.post(url,Teacher_Name).toPromise()
      .then(res => console.log(<any[]> res.json()))
<<<<<<< HEAD


      .then(data => { return data; });
     // alert("successfully updated....!")

    }
}
}
=======
                   
      
      .then(data => { return data; });
     // alert("successfully updated....!")
    
    }
}
}
>>>>>>> 98a7afc94dee7425bdb9b049f82a25f6aa0f01c3
