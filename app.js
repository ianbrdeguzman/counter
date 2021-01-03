/*
select all buttons
*/
const buttons = document.querySelectorAll('.btn');

/*
initialize counter
*/
let counter = 0;

/*
add eventlistener for each button
*/
buttons.forEach( (btn) => {
    btn.addEventListener('click', (btn) => {
        const value = document.getElementById('value')

        // checks the current btn class list
        const list = btn.currentTarget.classList; 

        if (list.contains('decrease')) { //if btn contains decrease class
            counter--;
            value.textContent = counter;
        } else if (list.contains('increase')) { //if btn contains increase class
            counter++;
            value.textContent = counter;
        } else {
            counter = 0;
            value.textContent = counter;
        }
        
        // style value color
        if (counter > 0) {
            value.style.color = 'green'; 
        } else if (counter === 0) {
            value.style.color = 'black';
        } else {
            value.style.color = 'red';
        }
    });
});

/*
toggle about modal window function
*/
const about = () => {
    document.querySelector('.modal')
        .classList.toggle('active');
};

/*
add event listener for about button
*/
document.getElementById('about')
    .addEventListener('click', about);
/*
add event listener for x button
*/
document.getElementById('close')
    .addEventListener('click', about);