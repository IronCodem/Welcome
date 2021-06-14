interface Person {
  firstName: string;
  lastName:  string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName + ".";
}

let user = {
	firstName: "Yashas",
  lastName:  "Shah"
};

document.querySelector("#app").innerHTML = greeter(user);
