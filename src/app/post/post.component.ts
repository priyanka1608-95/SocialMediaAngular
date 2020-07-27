import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post :any;
  @Input() requestType:string;
  id: any;
  user: any;
  content: any;
  buttonType: any;
  postRequest={} as any;

  postForm = new FormGroup({
    postContent: new FormControl('')
  });


  constructor(public service: UserServiceService,public router:Router) { }
  
  upsertPost() {
    console.log(this.postForm.value.postContent)
    if (this.requestType=="update") {
      this.post.content = this.postForm.value.postContent;

      this.postRequest.post=this.post;
      this.postRequest.userId = sessionStorage.getItem('userId');
      this.postRequest.requestType="update";
     
    }
    else {
      this.post = {}
      this.post.content = this.postForm.value.postContent;

      this.postRequest.post=this.post;
      this.postRequest.userId = sessionStorage.getItem('userId');
      this.postRequest.requestType="create";

    }
    this.service.addOrUpdatePost(this.postRequest).subscribe(response=>{
      console.log(response);
      this.router.navigate(['home']);

    })
  }

  

  ngOnInit(): void {
    
    if (this.requestType=="update") {
      this.content = this.post.content;
      this.buttonType = "Update";
    }
    else {
      this.buttonType = "Create";
    }

  }

}
