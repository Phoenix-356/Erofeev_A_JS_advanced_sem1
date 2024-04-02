"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

// Создаем объект "Музыкальная коллекция"
const musicCollection = {
  // Массив альбомов
  albums: [
      { title: "Thriller", artist: "Michael Jackson", year: "1982" },
      { title: "Back in Black", artist: "AC/DC", year: "1980" },
      { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: "1973" },
      { title: "Abbey Road", artist: "The Beatles", year: "1969" },
  ],
  // Метод для создания итератора
  [Symbol.iterator]: function() {
      // Индекс текущего альбома
      let currentIndex = 0;
      // Возвращаем объект итератора
      return {
          // Метод next() возвращает следующий альбом в коллекции
          next: () => {
              // Проверяем, достигли ли конца коллекции альбомов
              if (currentIndex < this.albums.length) {
                  // Получаем текущий альбом
                  const album = this.albums[currentIndex++];
                  // Возвращаем объект с данными альбома
                  return { value: `${album.title} - ${album.artist} (${album.year})`, done: false };
              } else {
                  // Если конец коллекции, возвращаем done: true
                  return { done: true };
              }
          }
      };
  }
};

// Используем цикл for...of для перебора альбомов в музыкальной коллекции и вывода их в консоль
for (const album of musicCollection) {
  console.log(album);
}