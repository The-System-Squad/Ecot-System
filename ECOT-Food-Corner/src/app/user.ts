export class User {
    get(arg0: string) {
      throw new Error('Method not implemented.');
    }
    constructor (
        public firstName: string,
        public lastName: string,
        public dateofBirth: String,
        public roomNumber: string,
        public phoneNumber: string,
        public email: string,
        public password: string,
        public confirmPassword: string

    ){}
}
