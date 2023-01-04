document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mode-btn');
    console.log(btn);


    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        console.log('btn clicked');
      });

    /*document.getElementById('mode-btn').addEventListener('click', () => {
        document.getElementById('mode').style.backgroundColor = 'white';
        document.getElementsByClassName('.section').style.backgroundColor = 'white';
    });*/
});