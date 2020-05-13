window.onload = function (){
    document.querySelector('#show-description').onclick = 
    function (){
        document.querySelector('.description').classList.toggle('hide');
    
        let descriptionClasses = document.querySelector('.description').classList;//это не массив, а коллеекция элементов
        let classArray = Array.from(descriptionClasses); // преобразовываем коллекцию в массив

        if (classArray.indexOf('hide') != -1 ){
            document.querySelector('#show-description').style.backgroundImage = 'url("/img/Arrow_down.png")';
        }
        else{
            document.querySelector('#show-description').style.backgroundImage = 'url("/img/Arrow_up.png")';
        }
    }
}