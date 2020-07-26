import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any
  id:any
  user:any

  constructor(public service:UserServiceService) { }
  addpost(Formdata)
  {


  }

  upsertPost(data) {
    console.log(this.post);
    console.log(data.target.value);
  }

  getUserById()
  {
    this.id=sessionStorage.getItem('id');
      this.service.getUserById(this.id).subscribe(response=>{
        console.log(response);
        this.user=response;

      });
  }

  ngOnInit(): void {
  }

}
