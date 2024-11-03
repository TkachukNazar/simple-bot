const phrases = [
  "Наш менеджер передзвонить Вам найближчим часом!",
  "Уточнити деталі можна за телефоном 123456789",
  "Залишайтеся на зв'язку!",
  "З Вами дуже приємно спілкуватися!",
];

const goodBye = "До побачення, радий був поспілкуватися!";
let str;
while (true) {
  str = prompt("Ваше запитання");
  if (str === "До побачення" || str === "!" || str === "") {
    alert(goodBye);
    break;
  } else {
    alert(phrases[Math.floor(Math.random() * phrases.length)]);
  }
}
