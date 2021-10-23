import {Component, OnInit} from '@angular/core';
import { User } from '../user';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User | undefined;
  title = 'User Details'

  zoom = 12
  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0
  }
  options: google.maps.MapOptions = {
    mapTypeId: 'terrain',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 1,
  }

  address: string = ''

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.getUser();

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  getUser(): void {
    const username = this.route.snapshot.paramMap.get('username');
    if (username === null){
      return
    }
    this.userService.getUser(username)
      .subscribe(user => {
        if (user === undefined) {
          this.router.navigate(['']);
          return
        }
        this.user = user
        this.center = {
          lat: Number(this.user.location.coordinates.latitude),
          lng: Number(this.user.location.coordinates.longitude),
        }
        this.address = this.user.location.street+", "+this.user.location.city+", "+this.user.location.state
      });
  }

  goBack(): void {
    this.location.back();
  }
}
