import { Component, OnInit } from '@angular/core';

import { MemberService } from '../member.service';
import Member from '../Member';
import Users from '../../../node-js-jwt-auth-mongodb'
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  user: Users[];

  users: any;
  MemberService: any;
  currentUser = null;
  currentIndex = -1;

  constructor(private ms: MemberService) { }

  // ngOnInit() {
  //   this.retrieveUsers();
  // }

  // retrieveUsers() {
  //   this.MemberService.getAll()
  //     .subscribe(
  //       data => {
  //         this.users = data;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  // setActiveUser(tutorial, index) {
  //   this.currentUser = tutorial;
  //   this.currentIndex = index;
  // }

  // removeAllTutorials() {
  //   this.MemberService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.retrieveUsers();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  // deleteMember(id: any, index: number) {
  //   this.ms.deleteMember(id).subscribe(res => {
  //     this.members.splice(index, 1);
  //   });
  // }
  ngOnInit() {
    this.ms
      .getAll()
      .subscribe((data: Users[]) => {
        this.users = data;
      });
  }

}

