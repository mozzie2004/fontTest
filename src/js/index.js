import { tabs } from './modules/tabs';
import { parseURL } from './modules/parseURL';
import '../scss/style.scss';

window.addEventListener('DOMContentLoaded', ()=>{
  'use strict'; 

  tabs();

  const obj = parseURL('http://ffwagency.com/do/any.php?a=1#foo');

  console.log(obj.hash);
  console.log(obj.hostname);
  console.log(obj.pathname);

});