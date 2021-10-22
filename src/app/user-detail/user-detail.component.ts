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

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(username)
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
        console.log(this.user)
      });
  }

  goBack(): void {
    this.location.back();
  }

}
