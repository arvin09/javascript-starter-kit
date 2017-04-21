import numeral from 'numeral';
import './index.css';

const teamValue = numeral(1000).format('$0,0.00');
console.log(`Team value of Mumbai Indians is ${teamValue}`);
