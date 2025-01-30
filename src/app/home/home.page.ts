import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  imageData: any;
  fecha: string = '';

  constructor(private nasaService: NasaService) {}

  asignarFecha() {
    if (this.fecha) {
      this.nasaService.getImageOfTheDay(this.fecha).subscribe((data) => {
        this.imageData = data;
      });
    }
  }

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((data) => {
      this.imageData = data;
    });
  }

}
