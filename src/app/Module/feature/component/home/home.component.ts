import { Component } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { kurtaPage1 } from 'src/Data/Kurta/Kurta';
import { menJeans } from 'src/Data/Men/men_jeans';
import { mensShoesPage1 } from 'src/Data/Men/men_shore';
import { lengha_page1 } from 'src/Data/Women/LenghaCholi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menJeans:any
  womenGouns:any
  lenghaCholi:any
  mensKurta:any
  mensShore:any

  ngOnInit() {
    this.menJeans = menJeans.slice(0,5)
    this.womenGouns = gounsPage1.slice(0,5)
    this.lenghaCholi = lengha_page1.slice(0,5)
    this.mensKurta = kurtaPage1.slice(0,5)
    this.mensShore = mensShoesPage1.slice(0,5)
  }
}
