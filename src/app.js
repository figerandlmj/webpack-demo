import './css/common.css';
import Layer from './components/layer/layer.js';
import $ from 'jquery';

const App = function(){
	// const NUM=1;
	// alert(NUM);
	// console.log(layer);
	// var dom = document.getElementById('app');
	var dom = $('#app');
	var layer = new Layer();

	// dom.innerHTML = layer.tpl;
	dom.innerHTML = layer.tpl({
		name:'John',
		arr:['apple','muui']
	});
}

new App();