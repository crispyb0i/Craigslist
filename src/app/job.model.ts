export class Job {
  public favorite: boolean = false;
  constructor (
    public title: string,
    public description: string,
    public compensation: string,
    public id: number) { }
}
