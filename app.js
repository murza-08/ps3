/* JS for accessibility */

const btt = document.querySelector('button');
const list = document.querySelector('ul');

btt.addEventListener('click', function() {
   
   const isExpanded = this.getAttribute('aria-expanded');
   this.setAttribute('aria-expanded', 
      (isExpanded === 'false')? 'true' : 'false'
   );
   
   if (isExpanded === 'false') {
     list.removeAttribute('inert');
     btt.focus();
   }
   else {
     list.setAttribute('inert', '');    
   }
});


document.body.addEventListener('keyup', function(ev) {
  if (ev.key === 'Escape' &&
     btt.getAttribute('aria-expanded') === 'true') {
     list.setAttribute('inert', '');
     btt.setAttribute('aria-expanded', false);
    
     if (list.matches(':focus-within')) {
       btt.focus();
     }
  }  
});