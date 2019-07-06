import { Component, OnInit, Input } from '@angular/core';
import { ForumCategory } from 'src/app/models/Forum';

@Component({
  selector: 'app-forum-section',
  templateUrl: './forum-section.component.html',
  styleUrls: ['./forum-section.component.css']
})
export class ForumSectionComponent implements OnInit {

  @Input() forumSection: ForumCategory;
  constructor() { }

  ngOnInit() {
  }

}
