import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Profile } from './model/profile';
import { ProfileService } from './model/service/profile.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http-client';
  dataList: any;

  constructor(
    private http: HttpClient,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    // this.fetchData();
    this.fetchPro();
  }
  // private fetchData() {
  //   this.http.get('https://dummyjson.com/users').subscribe((data) => {
  //     this.detailsList = data;
  //     console.log("ressssss", data)
  //   })
  // }

  private fetchPro() {
    this.profileService.fetchProfile().subscribe((data => {
      this.dataList = data;
      console.log('444444444444',this.dataList)
    }))
  }
}
