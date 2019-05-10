import ReactDOM from 'react-dom';
import NodeRSA from 'node-rsa';


export function encryptPassword(value) {
	const encryptingBase = 'base64';
	
	let key = new NodeRSA({b: 512});
	
	const encryptedPassword = key.encrypt(value, encryptingBase);
	return (encryptedPassword) ? encryptedPassword : false;
}


/***************************************************************************** */
/***************************************************************************** */
/***************************************************************************** */
/***************************************************************************** */
/***************************************************************************** */

export function numberWithCommas(number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getPercentage(partX, base100) {
  return ((partX * 100) / base100).toFixed(2);
}

export function isOutsideClick(clickEvent, node) {
	if (!node) 
		return false;
	const result = !ReactDOM.findDOMNode(node) // eslint-disable-line react/no-find-dom-node
		.contains(clickEvent.target);
	return result;
}

export function getRandomKey() {
  return `${ new Date().valueOf() }${ Math.random() }`;
}

export function numberRange(m, n) {
	if (m > n) 
		return null;

	const array = [];
	for (let i = m; i <= n; i++) {
		array.push(i);
	}
  	return array;
}

export function maxMinnumberRange(m, n) {
	if (m > n) 
		return null;

	const array = [];
	for (let i = n; i >= m; i--) {
		array.push(i);
	}
	
  	return array;
}

export function getZeroPaddedNumber(number) {
  return number > 9 ? number : `0${ number }`;
}

export function arrayMax(arr) {
	return arr.reduce((acc, next) => {
		return Math.max(acc, next);
	});
}

export function arrayMin(arr) {
	return arr.reduce((acc, next) => {
		return Math.min(acc, next);
	});
}

export function capitalizeFirstLetter(value) {
	return value.replace(/\w\S*/g, (text) => {
		return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
	});
}

export function getPageLeft(el) {
	if (!el) {
		return 0;
	}
	const rect = el.getBoundingClientRect();
	const docEl = document.documentElement;
	return rect.left + (window.pageXOffset || docEl.scrollLeft || 0);
}


export function replaceAll(target, search, replacement) {
  return target.split(search).join(replacement);
}

export function calculateWordDimensions(text, classes) {
  classes = classes || [];

	const div = document.createElement('div');
	div.setAttribute('class', classes.join(' '));
	div.setAttribute('id', 'hiddenDiv');
	div.innerHTML = text;
	document.body.appendChild(div);
  const dimensions = { width: document.getElementById('hiddenDiv').offsetWidth, height: document.getElementById('hiddenDiv').offsetHeight };
  div.parentNode.removeChild(div);
	return dimensions;
}

export function expandObjectKeys(obj) {
  const keys = Object.keys(obj);  

  try {
    for(let i = 0; i < keys.length; i++) {
      const key = keys[i],
            subKeys = key.split(','),
            content = obj[key];
      
      if (subKeys.length > 1) {
        subKeys.forEach(item => obj[item] = content);
        delete obj[key];
      }      
    }
  } catch(exception) {
    return false;
  }

  return obj;  
}

export function removeMiddleSpaces(text) {	
	text = text.trim();
	let arrayText = text.split(/[\s\t]/);
	let correctArrayText = arrayText.filter(item => !!item);
	
	let nextValue = '';
	correctArrayText.forEach((item, index) => {
		nextValue += item + (index !== correctArrayText.length - 1 ? ' ' : '');
	});

	return nextValue;
}

/** Starting of Enrollment functions */

export function greatherThan2(date) {
	var moment = require('moment');
	
	try {
		return moment(date).isBefore(moment().subtract(2, 'y'));
	} catch(e) {
		return false;
	}
}

export function underAge(date) {
	var moment = require('moment');
	
	try {
		const nextDate = moment(date);
		const newValue = moment().diff(nextDate, 'years');//nextDate.fromNow(); //.add(18, 'y');
		return newValue < 18;//!newValue.isBefore(moment());
	} catch(e) {
		return false;
	}
}

/** Ending of enrollment functions */

/**
 * receive a 12:45:55 time and returns and string
 * in the format 12h 45mm 55s 
 * @param {time} string
 */
export function formatTime(time) {
	let response = null;
	
	if (time) {
		const array = time.split(':');

		if (array[0]) {
			response = `${ array[0] }h`;
		}
		if (array[1]) {
			response += ` ${ array[1] }m`;
		}
		if (array[2]) {
			response += ` ${ array[2] }s`;
		}
	}
	return response;
}
