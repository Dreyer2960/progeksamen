class  User{
    constructor(firstName, lastName, age, gender, username, password, email, like, dislike, match){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;
        this.username=username;
        this.password=password;
        this.email=email;
        this.like=like;
        this.dislike=dislike;
        this.match=match;
    }
}

let Oscar = new User("Oscar", "Pedersen", 20, "Male", "Oscar123", "password1", "oscar123@gmail.com", [Mike], [Christian, Kristine], []);
let Mike = new User ("Mike", "Jensen", 21, "Male", "Mike123", "password2", "Jensen123@gmail.com", [Oscar, Kristine, Christian], [Anna], []);
let Christian = new User("Christian", "Bredgaard", 20, "Male", "Chistian123", "password3", "Bredgaard123@gmail.com", [Anna], [Oscar, Mike]);
let Anna = new User("Anna", "Nielsen", 22, "Female", "Anna123", "password4", "Anna123@gmail.com", [Christian, Mike], [Oscar, Kristine], []);
let Kristine = new User("Kristine", "Andersen", 21, "Female", "Kristine123", "password5", "Andersen123@gmail.com", [Anna, Christian], [Oscar, Mike], []);

