import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from 'src/app/models/NewsArticle';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {

  @Input() article: NewsArticle;
  constructor() { }

  ngOnInit() {

  }
  react(article, event) {
    if(event.target.id === "like") {
      console.log("Liking.")
      article.likes++;
    }
    else if(event.target.id === "dislike")
    {
      console.log("Disliking.")
      article.dislikes++;
    }
  }
}
