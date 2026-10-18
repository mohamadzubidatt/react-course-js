import { students } from "./data.js";
import withStatus from "./report.js";

for (const { name, status } of withStatus(students)) {
  console.log(`${name}: ${status}`);
}

console.log(students[0].status);
