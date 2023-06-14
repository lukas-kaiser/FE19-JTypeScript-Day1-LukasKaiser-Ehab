const content: any = document.getElementById("content");
let numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numbers.length; i++) {
    content.innerHTML += `
    <p>${numbers[i]} X 1 = ${numbers[i] * 1}</p>
    <p>${numbers[i]} X 2 = ${numbers[i] * 2}</p>
    <p>${numbers[i]} X 3 = ${numbers[i] * 3}</p>
    <p>${numbers[i]} X 4 = ${numbers[i] * 4}</p>
    <p>${numbers[i]} X 5 = ${numbers[i] * 5}</p>
    <p>${numbers[i]} X 6 = ${numbers[i] * 6}</p>
    <p>${numbers[i]} X 7 = ${numbers[i] * 7}</p>
    <p>${numbers[i]} X 8 = ${numbers[i] * 8}</p>
    <p>${numbers[i]} X 9 = ${numbers[i] * 9}</p>
    <p>${numbers[i]} X 10 = ${numbers[i] * 10}</p>
    <hr>
    `
}