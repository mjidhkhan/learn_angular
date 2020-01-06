import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  myVariable ='Test'
  myDisabledValue =false
  constructor() { 
   
    setInterval(()=>{
      this.myVariable = Math.random().toString()
      this.myDisabledValue = Math.random() >0.5
    }, 1000)
  }

  ngOnInit() {
     this.myVariable =''
    this.myDisabledValue =false
  }

}
