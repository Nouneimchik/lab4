function checkPassword(password, confirmPassword){
//    if(password === confirmPassword)
//        return "Passwords match";
//    else
//        return "Passwords do not match";

    if(password.length != confirmPassword.length){
        return "Passwords do not match";
    }

    for(let i = 0; i < password.length; i++){
        if(password[i] != confirmPassword[i]){
            return 'Passwords do not match';
        }
    }

    return "Passwords match";
}

console.log(checkPassword("f8G7cB2d", "f8G7cB2d")); // "Passwords match"
console.log(checkPassword("A9c7J3m2K5pR", "A9c7J3m2")); // "Passwords do not match"
console.log(checkPassword("abc123", "abc123")); // "Passwords match"
console.log(checkPassword("12345678", "87654321")); // "Passwords do not match"