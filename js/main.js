stat = 1;
const changeText = () => {
    if (stat / 2 == 0){
        document.getElementsByClassName('text')[0].textContent="Кто сказал мяу?";
        stat = true;
    }
    else{
        document.getElementsByClassName('text')[0].textContent="Гав гав?";
        stat = false;
    }
}