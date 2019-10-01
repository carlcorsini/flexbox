window.onload = function() {
  $('.ui.dropdown')
  .dropdown();
  let main = document.querySelector('#main');
  let buttonContainer = document.querySelector('#button-container');
  let numberOfBoxes = document.querySelector('#number-of-boxes')
  let label = document.querySelector('#label')
  let button, option, box
  let boxes = 3
  let options = 16

  for (let i = 1; i <= boxes; i++) {
    option = document.createElement
    box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = i
    main.appendChild(box)
  }

  for (let i = 1; i <= options; i++) {
    option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    numberOfBoxes.appendChild(option)
  }

  let justify = [
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-evenly',
    'space-between',
  ];

  for (let i = 0; i < justify.length; i++) {
    button = document.createElement('button');
    button.classList.add('ui', 'basic', 'button', 'huge');
    button.id = justify[i];
    button.addEventListener('click', justifyContent);
    button.innerHTML = justify[i];
    buttonContainer.appendChild(button);
  }

  numberOfBoxes.addEventListener('change', function(event){
    boxes = event.target.value
    main.innerHTML = ''

    for (let i = 1; i <= boxes; i++) {
      option = document.createElement
      box = document.createElement('div')
      box.classList.add('box')
      box.innerHTML = i
      main.appendChild(box)
    }
  })


  function justifyContent(event) {
    main.style.justifyContent = event.target.id;
    label.innerHTML = `justify-content: ${event.target.id};`
  }
};
