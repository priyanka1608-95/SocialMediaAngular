import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  news:any;
  newslist:any;
  constructor(private service:UserServiceService) { }


    ngOnInit(): void {
    this.service.getNews().subscribe(response=>{
     console.log(response);
      this.news=response;
      console.log(this.news);
      this.newslist=this.news.newsList;
      console.log(this.newslist);
  
    
    })
  }

}
