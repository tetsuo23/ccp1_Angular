import { Component, OnInit } from '@angular/core';
import { PostService } from './../_services/post.service';
import Post from '../models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  angForm: FormGroup;
  posts: Post[];
  constructor(private ps: PostService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  addPost(title, content) {
    this.ps.addPost(title, content);
    this.router.navigate(['post']);
  }

  deletePost(id: any, index: number) {
    this.ps.deletePost(id).subscribe(res => {
      this.posts.splice(index, 1);
    });
  }

  ngOnInit(): void {
  }

}
