import { Component, OnInit } from '@angular/core';

import { MemberService } from '../member.service';
import Member from '../Member';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  members: Member[];
  constructor(private ms: MemberService) { }
  deleteMember(id: any, index: number) {
    this.ms.deleteMember(id).subscribe(res => {
      this.members.splice(index, 1);
    });
  }
  ngOnInit() {
    this.ms
      .getMembers()
      .subscribe((data: Member[]) => {
        this.members = data;
      });
  }

}

