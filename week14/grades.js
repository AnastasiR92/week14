//Создаем пустой массив от 1 до 100 для 12 студентов 

let grades = [];

for (let i = 0; i < 12; i++) {
    grades.push(Math.floor(Math.random() * 100));
}

//2.ищем средне арифмитическое
const averageGrade = grades.reduce((acc, grade) => { 
    return acc + grade;}, 
    0); //(acc, grade) => { return acc + grade;} - это всё функция колбэк
console.log(averageGrade);
console.log(averageGrade/grades.length); //ищем среднее арифмитическое (делим сумму на кол-во элементов)

//3.находим и выводим максимальный балл среди студентов

const max = Math.max.apply(null, grades);
console.log(max)

//4.Находим минимальный балл среди студентов

const min = Math.min.apply(null, grades);
console.log(min);

//5 Считаем и выводим количество студентов, получивших положительную оценку (балл выше или равен 60)
const goodGrade = grades.filter((grade) => {
    if (grade >=60) {
        return grade;
    }
});
console.log(goodGrade);
console.log(goodGrade.length);

//Преобразуем числовые оценки в формат буквенных оценок A/B/C/D/E по правилам
function convertGradeToLetter(grade) {
    if (grade >= 80 && grade <= 100) {
      return 'A';
    } else if (grade >= 60 && grade < 80) {
      return 'B';
    } else if (grade >= 40 && grade < 60) {
      return 'C';
    } else if (grade >= 20 && grade < 40) {
      return 'D';
    } else if (grade < 20) {
      return 'E';
    } else {
      return 'Неверная оценка'; // Для случаев, когда оценка вне диапазона 0-100
    }
  }

console.log('Оценка: ' + convertGradeToLetter(85));//для проверки (можно как-то автоматически настроить подставление значения...?)