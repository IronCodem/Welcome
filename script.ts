interface Person {
  firstName: string;
  lastName:  string;
}

function greeter(person: Person) {
  return "Welcome, " + person.firstName + " " + person.lastName + ".";
}

let user = {
  firstName: "Yashas",
  lastName:  "Shah"
};

document.querySelector("#web_greeter").innerHTML = greeter(user);
