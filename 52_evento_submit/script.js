let form = document.querySelector('form');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    let isvalid = true;

    for (let i = 0; i <this.elements.length; i++) {
        let item = this.elements[i];
        

       if(item.type !== 'submit'){ 
         if(item.value == "") {
            item.classList.add('erro');
            isvalid = false;
         }else {
            item.classList.remove('erro');
         } 
      }
    }
    console.log(isvalid);
});