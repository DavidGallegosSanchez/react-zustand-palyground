import './style.css'
//import './bases/01-const-let' 
//import './bases/02-template-let' 
//import './bases/03-object-literal' 
//import './bases/04-arrays' 
//import './bases/05-functions' 
//import './bases/06-obj-destructuring' 
//import './bases/07-array-destructuring'
//import './bases/08-imp-exp'
//import './bases/09-promises'
//import './bases/10-fetch-api'
import './bases/11-async-await'

import { getHeoresByOwner } from './bases/08-imp-exp';
import { Owner } from './bases/data/heroes.data';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <h1>Hola Mundo</h1>
  </div>
</section>

<div class="ticks"></div>


<div class="ticks"></div>
<section id="spacer"></section>
`

//console.log(getHeoresByOwner(Owner.Marvel));
//console.log(getHeoresByOwner(Owner.DC));