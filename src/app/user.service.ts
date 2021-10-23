import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  users: User[] = []
  page = 1
  results = 10
  getUsers(page: number,results: number): Observable<User[]> {
    this.page = page;
    this.results = results;
   return this.http.get<any>(`https://randomuser.me/api/?inc=login,picture,name,email,gender,dob,location&page=${page}&results=${results}&seed=alon`)
     .pipe(
       map<any,User[]>(
         (value:any) => {
           return value.results.map(
             (v: any) =>
             {
               let user:User ={
                 username: v.login.username,
                 name:{
                   firstName:v.name.first,
                   lastName:v.name.last
                 },
                 email: v.email,
                 gender: v.gender,
                 age: v.dob.age,
                 location: {
                   city: v.location.city,
                   street: v.location.street.number + ` ` + v.location.street.name,
                   state: v.location.state,
                   coordinates:{
                     latitude: v.location.coordinates.latitude,
                     longitude: v.location.coordinates.longitude
                   }
                 },
                 picture: {
                   large: v.picture.large,
                   thumbnail: v.picture.thumbnail
                 },
               }
               return user
             }
           )
         }
       )
     );
  }


  getUser(username: string): Observable<User | undefined> {
    return this.getUsers(this.page,this.results).pipe(
      map<User[],User | undefined>(
        users => {
          return users.find(user => user.username === username)
        }
      )
    ) as Observable<User | undefined>;
  }
}
