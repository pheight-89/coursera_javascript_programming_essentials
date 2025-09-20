let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthneticated = true;
let authenticationStatus = isAuthneticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let roleType = "employee";
let roleAuthorization;

switch (roleType){
    case "employee":
        roleAuthorization = "Dietary Services"
        break;
    case "member":
        roleAuthorization = "Dietary Services, 1:1 Dietician Service"
        break;
    case "subscriber":
        roleAuthorization = "Partial Dietary Services"
        break;
    case "non-subscriber":
        roleAuthorization = "Enrolling or Subscribing First"
}

console.log(`Your role is ${roleType} and you are authorized for ${roleAuthorization}`)
