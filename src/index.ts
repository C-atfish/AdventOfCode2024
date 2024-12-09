import fs from "fs/promises";
import * as path from "path";

async function main() {
  let totalSum = 0;
  try {
    const data = await fs.readFile(
      path.join(__dirname, "inputData.txt"),
      "utf8"
    );
    const matches = data.match(/mul\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/g);
    if (matches) {
      matches.forEach((match) => {
        const firstNumberEnd = match.indexOf(",");
        const firstNumber = match.substring(4, firstNumberEnd);
        const secondNumberEnd = match.indexOf(")");
        const secondNumber = match.substring(
          firstNumberEnd + 1,
          secondNumberEnd
        );

        let result = parseInt(firstNumber) * parseInt(secondNumber);
        totalSum += result;
      });
    }
  } catch (error) {
    console.error("Error reading file:", error);
  }

  console.log("total sum is ");
  console.log(totalSum);
}

main();
