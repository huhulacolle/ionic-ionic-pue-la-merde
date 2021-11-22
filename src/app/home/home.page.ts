import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blague } from '../blague';
import { BlagueApiService } from '../blague-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  blague: Blague;
  content = false;
  warning = 0;
  message: string;

  constructor(private blagueapi: BlagueApiService, private router: Router) {}

  ngOnInit(): void {
    this.loading();
    this.getBlagueLimite();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.refresh();
      event.target.complete();
    }, 0);
  }

  refresh(): void {
   this.content = false;
   this.loading();
   this.getBlagueLimite();
  }

  loading(): void {
    setTimeout(() => {
      this.content = true;
    }, 2000);
  }

  getBlagueLimite(): void {
    this.blagueapi.getBlagueLimite().subscribe(
      data => {
        this.blague = data;
        console.log(this.blague);
      }
    );
  }


}
