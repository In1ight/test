/* Взаимодействия с элементами по атрибутам */

// $('a[download]').css('border', '1px solid red'); // Простой атрибут
// $('a[href="http://ya.ru"]').css('border', '1px solid red'); // Полное соответсвие
// $('a[href!="http://ya.ru"]').css('border', '1px solid red'); // Полное несоответствие
// $('a[href^="http"]').css('border', '1px solid red'); // Начинается с ...
// $('a[href$=".com"]').css('border', '1px solid red'); // Заканчивается на ... 
// $('a[href*="google"]').css('border', '1px solid red'); // Содержит ... 
// $('a[data-target|="main"]').css('border', '1px solid red'); // Имеет префикс - ... 
// $('a[href][download]').css('border', '1px solid red'); // Имеет одновременно несколько атрибутов 

//изменил js
/* $('a[href]').css('border', '2px solid #000');
$('a[src^="img/"]').css('border', '2px solid #000');
$('a[src$=".js"]').css('border', '2px solid #000');
$('a[src] [title').css('border', '2px solid #000'); */
/* ====== События, связанные с мышью ===== */

// $('button').click(function() {
// 	console.log('Ты кликнул на кнопку');
// }); // Клик мышью

// $('button').dblclick(function() {
// 	console.log('Ты кликнул на кнопку дважды');
// }); // Двойной клик мышью

// $('ul li').mouseenter(function(event) {
// 	$(this).css('color', 'red');
// }); // Наведение мыши на элемент

/* $('ul li').mousedown(function(event) {
	$(this).css('color', 'red');
}); // Момент нажатия кнопки мыши

$('ul li').mouseup(function(event) {
	$(this).css('color', '#333');
}); // Момент "отжатия" кнопки мыши :)

$('ul li').mouseover(function(event) {
	$(this).css('color', 'blue');
});  // Мышь наезжает на площадь элемента

$('ul li').mouseout(function(event) {
	$(this).css('color', 'black');
}); // Мышь покидает площадь элемента

$('ul li').mousemove(function(event) {
	$(this).toggleClass('blue');
}); // Движение мыши над элементом
 */



//~~~~~~~~~~~~~~~~~~lesson 9
/* $('img').load(function(){
    $('p').text('Текст').delay(3000).attr('alt', 'картинка готова');
}); */
$('img').ready(
    $('p').text('Готов')
).delay(3000).attr()

var attr = $('img').attr('alt', 'Готовооо')

/* $('img').ready($('p').text('Дом загружен').delay(3000).attr('alt', 'картинка загружена')) */


/* $(function () {
    $('p').text('Дом загружен');
}); */

/* $('img').function() {
    $('p').text('Дом загружен').delay(3000);
    
    $('img').attr('alt', 'rrrrrr');
};

 */

