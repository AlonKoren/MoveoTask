import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import { UserService } from '../user.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['picture', 'full_name', 'email', 'gender', 'age'];
  users: User[] = []
  title = 'All users'


  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit() {
  }

  pageNumber = 1
  resultCount = 10

  getUsers(): void {
    this.userService.getUsers(this.pageNumber,this.resultCount).subscribe(users => this.users = users);
  }

  gotoItems(user: User) {
    const username = user.username;
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['detail',username]);
  }

  maxPage :number = this.pageNumber;

  onPageChange(event: any){
    this.pageNumber = event.pageIndex+1;
    this.getUsers();
    this.maxPage = Math.max(event.pageIndex+1,this.maxPage);
  }

  announceSortChange(event: Sort) {
    // this.userService.getUsers(this.pageNumber, this.resultCount).subscribe(users => this.users = users);
  }
}
