import { Component, OnInit } from '@angular/core';
import { Blague } from '../blague';
import { BlagueApiService } from '../blague-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  blague: Blague;

  constructor(private blagueapi: BlagueApiService) {}

  ngOnInit(): void {
    this.getBlagueLimite();
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
