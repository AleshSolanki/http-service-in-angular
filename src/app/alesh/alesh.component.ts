import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-alesh',
  templateUrl: './alesh.component.html',
  styleUrls: ['./alesh.component.css']
})
export class AleshComponent implements OnInit {
public result:any;
  constructor(private user:UserService) { }

  ngOnInit() {
this.user.getUser().subscribe((data =>{
  this.result=data;
}))
  }

}
