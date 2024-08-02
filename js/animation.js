// anime({
//     // 애니메이션을 할 요소
//     targets: '.red',

//     // 애니메이션 속성
//     translateX: 1000,
//     easing: 'easeOutBounce',
//     duration: 1000,
//     direction: 'alternate'
//     // loop: true
// });
// anime({
//     targets: '.orange',
//     translateX: 500,
//     translateY: 400,
//     easing: 'easeOutBounce',
//     duration: 1000,
//     delay: 1000,
//     borderRadius: '100%',
//     loop: true
// });
// anime({
//     targets: '.green',
//     // 객체 안 객체
//     translateX: {
//         value: 1000,
//         duration: 5000,
//         delay: 3000
//     },
//     easing: 'easeOutBounce'
// });

// anime({
//     targets: '.box li',
//     translateX: 500,
//     easing: 'linear',
//     loop: true,

//     // 요소간 시간차
//     delay: anime.stagger(500)
// });


// 연속 애니메이션
let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000
});
tl.add({
    targets: '.yellow',
    translateX: 500,
})
.add({
    targets: '.yellow',
    translateY: 500,
})
.add({
    targets: '.yellow',
    translateX: 0,
})
.add({
    targets: '.yellow',
    translateY: 0,
})
.add({
    targets: '.green',
    translateX: 0,
    scale: 1.5,
    rotate: 360
})
.add({
    targets: '.red',
    translateX: 1000,
    scale: 1.5,
    rotate: 360
})

