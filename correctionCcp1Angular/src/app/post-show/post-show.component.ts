import { Component, OnInit } from '@angular/core';
import Post from '../models/post';
import { PostService } from '../_services/post.service';
import { TokenStorageService } from './../_services/token-storage.service';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {
  posts: Post[];
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  constructor(private ps: PostService, private tokenStorageService: TokenStorageService) { }
  deletePost(id: any, index: number) {
    this.ps.deletePost(id).subscribe(res => {
      this.posts.splice(index, 1);
    });
  }

  ngOnInit() {
    this.ps
      .getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });



    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    }
  }
}
