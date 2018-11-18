import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './posts.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  // don't want to directly edit this array
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
    // new array with the old objects
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPosts(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
