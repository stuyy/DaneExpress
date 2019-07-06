import { Component, OnInit } from '@angular/core';
import { NewsArticle } from '../../models/NewsArticle';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  private news: Array<NewsArticle>;
  constructor() {
    this.news = new Array();
    let news = [
      {
        'id' : '1',
        'title' : 'Dane Mascot for UAlbany replaced!',
        'description' : "UAlbany's Mascot, the Great Dane, for the past four years was played by John Smith. Today UAlbany announced that a new student part of the Student Association would take the role for the upcoming academic year from 2019 to 2020.",
        'date' : new Date().toLocaleString(),
        'likes' : 0,
        'dislikes': 0
      },
      {
        'id' : 2,
        'title' : 'UAlbany Campus Brings new room for Green Dining',
        'description' : "We're finally seeing more room for healthier, organic, and rich options for dining. No more needing to worry about counting your calories, everything offered at our new Green Life store is under 200 calories!",
        'date' : new Date().toLocaleString(),
        'likes' : 0,
        'dislikes': 0
      },
      {
        'id' : 3,
        'title' : "SUNY Albany's class of 2020 will be the largest class to graduate since the class of 2000.",
        'description' : "This upcoming class of 2020 will make records in all of SUNY history - They will be the largest graduating class since the class of 2000 at Stony Brook. We are proud and excited for the class of 2020, and we can't wait to celebrate this achievement.",
        'date' : new Date().toLocaleString(),
        'likes' : 0,
        'dislikes': 0
      }
    ]
    for(var newsarticle in news)
    {
      let article = new NewsArticle();
      Object.assign(article, news[newsarticle]);
      this.news.push(article);
    }
   }

  ngOnInit() {


  }

}
