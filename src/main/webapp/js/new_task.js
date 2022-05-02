let task__add = document.querySelector('.task__add_inner');
let creator = document.querySelector('.creator__wrapper');
let creator__button = document.querySelector('.creator__button');
let creator__close = document.querySelector('.creator__close');
task__add.onclick = function () {
   creator.classList.add('active');
   back.classList.add('locked');
}
creator__button.onclick = function () {
   creator.classList.remove('active');
   back.classList.remove('locked');
}
creator__close.onclick = function () {
   creator.classList.remove('active');
   back.classList.remove('locked');
}

let creator__select = document.getElementById('creator__select');
let input__owner = document.getElementById('input__owner');
let input__owner_text = document.getElementById('input__owner_text');
let input__dates = document.querySelectorAll('.dates__invisible');
creator__select.onchange = function () {
   if (creator__select.value == "waiting-for") {
      input__owner.classList.remove('creator__input_owner');
      input__owner_text.classList.remove('creator__input_owner');
      for (let input__date of input__dates) {
         input__date.classList.remove('creator__input_dates');
      }
   }
   else {
      input__owner.classList.add('creator__input_owner');
      input__owner_text.classList.add('creator__input_owner');
      for (let input__date of input__dates) {
         input__date.classList.add('creator__input_dates');
      }
   }
}