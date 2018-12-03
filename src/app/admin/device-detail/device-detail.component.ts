import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  constructor(private deviceService: DeviceService,
    private route: ActivatedRoute) { }
  device: Device;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.deviceService.getDevice(id)
    .subscribe(data => {
      console.log(data);
      this.device = data;
    });
  }

  saveDevice() {
    this.deviceService.updateDevice(this.device)
      .subscribe(data => {
        console.log();
        this.device = data;
      });
  }

}
