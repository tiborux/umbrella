import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private geolocation: Geolocation, private toastCtrl: Toast) {}

  locationAt() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const location = 'lat ' + resp.coords.latitude + ' lang ' + resp.coords.longitude;
        this.toastCtrl.show(location, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        });
    });
  }

  ngOnInit() {
    this.locationAt();
  }
}
