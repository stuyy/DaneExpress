export class NewsArticle {
  private _title: string;
  private _id: string;
  private _description: string;
  private _date: Date;
  private _badges: number;

  set title(title: string) { this._title = title }
  set id(id: string) { this._id = id }
  set description(description: string) { this._description = description }
  set date(date: Date) { this._date = date }
  set badges(badges: number) { this._badges = badges }

  get title() { return this._title }
  get id() { return this._id }
  get description() { return this._description }
  get date() { return this._date }
  get badges() { return this._badges }
}