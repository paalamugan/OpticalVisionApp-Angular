import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-frame-type',
  templateUrl: './frame-type.component.html',
  styleUrls: ['./frame-type.component.scss']
})
export class FrameTypeComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
   
  }

}
