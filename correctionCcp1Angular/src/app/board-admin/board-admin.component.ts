import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from './../_services/token-storage.service';



@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';
  private roles: string[];
  isLoggedIn = false;
  username: string;
  email: string;
  password: string;
  role: string;
  user: string;

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.email = user.email;
      this.password = user.password;
      this.roles = user.roles;
      this.role = user.role;

    }
  }

}

