export class User {
    constructor(
        public email: string,
        public password: string,
        public username: string,
        public gender: string,
        public dateofbirth: string,
        public address: string,
        public country: string,
        public contactnumber: string
    ) { }
}