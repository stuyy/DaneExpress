export class NewsArticle {
  private _title: string;
  private _id: string;
  private _description: string;
  private _date: Date;
  private _likes: number;
  private _dislikes: number;

  set title(title: string) { this._title = title }
  set id(id: string) { this._id = id }
  set description(description: string) { this._description = description }
  set date(date: Date) { this._date = date }
  set likes(likes: number) { this._likes = likes }
  set dislikes(dislikes: number) { this._dislikes = dislikes }

  get title() { return this._title }
  get id() { return this._id }
  get description() { return this._description }
  get date() { return this._date }
  get likes() { return this._likes }
  get dislikes() { return this._dislikes }

}   