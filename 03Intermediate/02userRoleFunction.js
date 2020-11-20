var getUserRole = function (name, role) {
    
    switch (role) {
        case "admin":
            return `${name} is an admin with all access`;
            // break;
        case "subadmin":
            return `${name} is a subadmin with access to create and delete courses`;
            // break;
        case "testprep":
            return `${name} is a test prep with access to create and delete tests`;
            // break;
        case "user":
            return `${name} is a user to consume content`;
            // break;

        default:
            return `${name} is a trial user`;
            // break;
    }
}

console.log(getUserRole("Hassan", "testprep"))

var getRole = getUserRole("Hassan", "user");
console.log(getRole)