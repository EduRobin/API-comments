export class KomentModel {
  // tslint:disable-next-line:max-line-length variable-name
  constructor(public id: number, public body: string, public user_id: number, public author_id: {id: number, email: string, username: string}, public page: number, public page_count: number) {

  }
}
