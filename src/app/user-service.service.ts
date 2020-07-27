import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  getUserById(id: any) {
    return this.http.get("http://localhost:8080/socialmedia/users/getUserById/"+id)
  }

  newPost(post)
  {
    return this.http.post("http://localhost:8080/socialmedia/posts/newPost",post);
  }

  deletePost(id: any)
  {
    return this.http.delete("http://localhost:8080/socialmedia/posts/deletePost/"+id);
    
  }

  constructor(public http:HttpClient) { }

  login(user)
  {
    return this.http.post("http://localhost:8080/socialmedia/users/login",user);
  }

  getAllUsers()
  {
    return this.http.get("http://localhost:8080/socialmedia/users/getAllUsers");
  }

  addOrUpdatePost(post)
  {
    return this.http.post("http://localhost:8080/socialmedia/users/addOrUpdatePost",post);
  }

  getNews()
  {
    return this.http.get("http://localhost:8080/socialmedia/news");
  }
}
