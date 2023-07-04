// alert('하이')
//이미지1 태그를 선택
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');


//랜덤 번호
const randomNumber1 = Math.floor(Math.random() * 6 + 1); //최댓값도 포함, 최솟값도 포함
const randomNumber2 = Math.floor(Math.random() * 6 + 1); //최댓값도 포함, 최솟값도 포함

img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

console.log(randomNumber1)
console.log(randomNumber2)
// h1.innerText ='🎶누가 이겼는지?🎶'

//if else문으로 플레이어1,2중 누가 이겼는지 표시하라!
if (randomNumber1 > randomNumber2) {
    h1.innerText = '🎶player1 win'
} else if (randomNumber1 < randomNumber2) {
    h1.innerText = '🎉player2 win'
} else {
    h1.innerText = '🙌draw'
}