
document.getElementById('check1').onchange = function func(){
var checkb = document.getElementById('check1');
if(checkb.checked){
	console.log("The button was checked!");
}else{console.log("The button was not checked");};
};

document.getElementById('checker').onclick = function func0(){
	var radio = document.getElementsByName('rad');
	for (var i = 0; i < radio.length; i++) {
		if(radio[i].checked){
			console.log('The ' + (i+1) + ' radio was checked!');
		}
	}
}

document.getElementById('mySelect').onchange = function func1(){
var sel = document.getElementById('mySelect').selectedIndex;
var options = document.getElementById('mySelect').options;
console.log('Выбран элемент: ' + options[sel].text);
}

document.getElementById('ran').oninput = function func2(){
	var rng = document.getElementById('ran');
	var p = document.getElementById('out');
	p.innerHTML=rng.value;
}

//menu

document.getElementById('nav').onmouseover = function openMenu(event) {
	var target = event.target;
	if(target.className == 'menu-item'){
		var s = target.getElementsByClassName('submenu');
		closeMenu();
		s[0].style.display = 'flex';
	};
}

document.onmouseover = function (event){
	var target = event.target;
	if (target.className != 'menu-item' && target.className != 'submenuli') {closeMenu();}
}

function closeMenu() {
	var menu = document.getElementById('nav');
	var subm = document.getElementsByClassName('submenu');
	for (var i = 0; i < subm.length; i++) {
		subm[i].style.display = "none";
	}

}
	// var calculator = {
	// 	read: function (){
	// 		this.a = +prompt('a');this.b = +prompt('b');
	// 	},
	// 	sum: function(){
	// 		return this.a + this.b;
	// 	},
	// 	mul: function(){
	// 		return this.a * this.b;
	// 	}

	// }

	// calculator.read();
	// alert(calculator.sum());
	// alert(calculator.mul());
	var greet = function () {
		return "Hi my name is " + this.name;
	}
	var person = {
		name : "John",
		greet : greet
	}
	//console.log(person.greet());


// var avatar = document.getElementById('nav');
// var box = avatar.getBoundingClientRect();
//
// var avatarTop = avatar.offsetHeight + box.top;
//
// document.onscroll = function() {
//   var scrolled = window.pageYOffset;
//
//   if (scrolled > avatarTop) {
// 	avatar.style.position = 'fixed';
// 	avatar.style.top = '15px';;
//   } else {
// 	avatar.style.position = 'static';
//   }
//}

	//счетчик четных чисел

// for (var i = 2; i < 100; i += 2) {
// 	console.log(i);
// }
	//счетчик среднего арифметического
// var a = [1, 2, 3, 7, 6, 9];
// var sum = 0;
// for (var i = 0; i < a.length; i++) {
// 	sum += arr[i];
// }
// var res = sum / a.length;
// console.log(res);

	//счетчик по нажатию

var res = document.getElementById('num');
var e = function (event){
	return res.value++;
};

var d = function (event){
	 if(res.value>0){return res.value--};
};

function func() {
	var number = +res.value+ +this.value;
	if (number != 0){
		res.value = number;
 	} else {
		res.value = 0;
	}
}
