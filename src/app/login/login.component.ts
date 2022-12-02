import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

declare const $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private http : HttpClient) { 
  }

  ngOnInit(): void {
  }

  showPeringatanModal(message: string): void{
    $("#peringatanModal").modal();
    $("#pm_message").html(message);
  }

}
