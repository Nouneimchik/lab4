function generateAndCheckPassword(length){
    let password = generatePassword(length);
    if(confirm("You want to see the generated password?")){
        alert("Generated password: " + password);
    }
    let confirmPassword = prompt("Enter generated password to confirm");
    alert(checkPassword(password, confirmPassword));
}

generateAndCheckPassword(8);