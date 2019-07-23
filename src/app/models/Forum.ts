class ForumCategory {
  private title: string;
  private categoryDescription: string;
  private forumSubcategories: Array<ForumSubCategory>;
}

class ForumSubCategory {
  private title: string;
  private topicDescription: string;
  private totalPosts: number;
  private recentPost: string;
  private route: string;

  constructor(title: string, desc: string, route: string)
  {
    this.title = title;
    this.topicDescription = desc;
    this.route = route;
  }
}

export { ForumCategory, ForumSubCategory };