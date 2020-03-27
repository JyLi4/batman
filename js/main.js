$(document).ready(function () {
   // console.log('Страница загрузилась')
   let tabsItem = $('.tabs-item')
   
   tabsItem.on('click', function (event)) {
      event.preventDefault();
      // В activeContent у нас будет храниться id нужного элемента
      let activeContent = $(this).attr('href');
      // Находим элемент у которого есть класс visible и отключаем класс
      $('.visible').toggleClass('visible');
      // Находим элемент, помещенный в activeContent и присваиваем класс visible
      $(activeContent).toggleClass('visible');
      
      $('tabs-item-active').toggleClass('tabs-item-active')
      // Для блока на который кликнули нужно присвоить класс
      $(this).toggleClass('tabs-item-active')
   }


});
