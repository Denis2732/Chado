//Окно подтверждение с приветствием по имени
var button2 = document.getElementById("btn5")
    button2.onclick = handleButtonClick2;

function handleButtonClick2() {
    var textInput = document.getElementById("name");
    var name = textInput.value;
    alert("Привет " + name + "! Мы перезвоним Вам в течении 15 минут");
};
//Слайдер
		var back = document.getElementById('backm');
		var next = document.getElementById('nextm');
		var polosa = document.getElementById('polosam'); 
		var right = 0;

			next.onclick = function sliderLeft(){
				right = right - 300;
				if (right < -1200) {
					right = -1200;
				}
				polosam.style.left = right+"px";
			};
			back.onclick = function(){
				right = right +300; 
				if (right > 0) {
					right = 0;
				}
				polosam.style.left = right+"px";
			};
		var back = document.getElementById('back');
		var next = document.getElementById('next');
		var polosa = document.getElementById('polosa'); 
		var right = 0;

			next.onclick = function sliderLeft(){
				right = right - 650;
				if (right < -2600) {
					right = -2600;
				}
				polosa.style.left = right+"px";
			};
			back.onclick = function(){
				right = right +650; 
				if (right > 0) {
					right = 0;
				}
				polosa.style.left = right+"px";
			};
//Скролл по якорям 
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
		behavior: "smooth",
		block: "start"	
		})	
	})
};