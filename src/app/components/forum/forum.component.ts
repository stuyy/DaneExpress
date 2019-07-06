import { Component, OnInit } from '@angular/core';
import  { ForumCategory, ForumSubCategory }  from '../../models/Forum';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  private categories: Array<ForumCategory>;
  constructor() { 
    this.categories = new Array<ForumCategory>();
    let categories = [
      {
        title: 'Welcome',
        categoryDescription: 'DaneExpress offers a rich, customized Forum for users to discuss about various topics.',
        forumSubcategories: [ 
          new ForumSubCategory('General Discussion', 'A place to discuss about all topics relevant to UAlbany.'),
          new ForumSubCategory('Rules & Announcements', 'All new members must read and enforce our policy across this platform')
        ]
      },
      {
        title: 'Off-Topic',
        categoryDescription: 'Off-Topic Discussions that do not pertain to UAlbany.',
        forumSubcategories: [ 
          new ForumSubCategory('Off-Topic Discussion', 'A place to discuss about all off-topic interests.'),
          new ForumSubCategory('Memes', 'Post all of your memes here.'),
          new ForumSubCategory('Buying & Selling', 'A place to post listings or make offers for items.')
        ]
      },
      {
        title: 'Support',
        categoryDescription: 'Troubleshoot any errors or report any public issues.',
        forumSubcategories: [ 
          new ForumSubCategory('Bugs & Issues', 'Report all website bugs and issues here'),
          new ForumSubCategory('Memes', 'Post all of your memes here.')
        ]
      },
    ]
    for(var i in categories)
      this.categories.push(Object.assign(new ForumCategory(), categories[i]));
  }

  ngOnInit() {
  }

}
