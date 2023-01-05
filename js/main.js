
//Boton de modo noctruno/claro
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mode-btn');
    console.log(btn);


    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        console.log('btn clicked');
      });

});
