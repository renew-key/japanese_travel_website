(function() {
    const backgroundImage = document.getElementById('carousel-img');
    let index = 0;
    const imgArr = [
        '../images/日本櫻花.jpg',
        '../images/京都古城.jpg',
        '../images/北海道雪景.jpg',
        '../images/大阪街頭.jpg',
        '../images/富士山.jpg',
        '../images/清水寺.jpg'
    ]
  
    const changeImg = ()=>{
        index++;
        if(index<0){
            index = imgArr.length-1;
        }else if(index>=imgArr.length){
            index = 0;
        }
    }
    setInterval(() => {
        const url = imgArr[index];
        backgroundImage.style.backgroundImage = `url('${url}')`;
        changeImg();
    }, 3000);
})();