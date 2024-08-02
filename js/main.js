new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    navigation:true,
	navigationPosition: 'right',
	anchors:['num0','num1','num2','num3','num4'],

	afterLoad: function(origin, destination, direction){
		// destination = 해당 섹션에 들어왔을때
		// origin = 해당 섹션을 벗어났을때
		var origin = this;
		console.log(origin)
		// console.log(`원래섹션:${old_sec} 다음섹션:${destination} 방향:${direction}`)

		// using index
		if(destination.index == 0){
			sec_in0();
		}
		if(destination.index == 1){
			sec_in1();
		}
		if(destination.index == 2){
			sec_in2();
		}
		if(destination.index == 3){
			sec_in3();
		}
		if(origin.index == 1){
			sec_out2();
		}
		// if(origin.index == 2){
		// 	sec_out2();
		// }
	}
});
function sec_in0(){
	// alert("나의 소개 페이지입니다")
}
function sec_in1(){
	// alert("나의 소개 페이지에 오신 것을 환영합니다")
	
	// 애니메이션
	var tl = anime.timeline({
		easing: 'linear',
		duration: 500
	});
	tl.add({
		targets: '.gg1',
		width: '95%',
		delay: 1000
	})
	.add({
		targets: '.gg2',
		width: '85%'
	})
	.add({
		targets: '.gg3',
		width: '95%'
	})
	.add({
		targets: '.gg4',
		width: '90%'
	})
	.add({
		targets: '.gg5',
		width: '95%'
	})
	.add({
		targets: '.gg6',
		width: '80%'
	})
	.add({
		targets: '.gg7',
		width: '75%'
	})
	.add({
		targets: '.gg8',
		width: '90%'
	});
}

function sec_out1(){
	// alert("나의 소개 페이지를 봐주셔서 감사합니다")
	anime({
		targets: '.gagein',
		width: 0
	})
}

function sec_in2(){
	// alert("프로파일 페이지를 보실래요?")
	var tl = anime.timeline({
		easing: 'linear',
		duration: 500
	});
}

function sec_out2(){
	anime({
		targets: '.gagein2',
		width: 0
	})
}


function sec_in3(){
	// alert("갤러리 페이지를 보실래요?")
}

// 문서객체선택
let btn = document.querySelector(".btn_menu")
console.log(btn)
let nav = document.querySelector('nav')
console.log(nav)
let cover = document.querySelector('#cover')
console.log(cover)

// 이벤트 발생
btn.addEventListener("click",function(){
    btn.classList.toggle('on')
	nav.classList.toggle('on')
    cover.classList.toggle('on')




})


