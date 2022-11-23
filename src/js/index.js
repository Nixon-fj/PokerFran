import topNav from './components/topNav';
import { tnsCarousell, tnsSingle } from "./components/tns-slider";
import tabs from './components/tabs';
import accordion from './components/accordion'; 

(() => {
	topNav();
	tnsCarousell();
	if (document.body.classList.contains('home')) {
		tnsSingle();
	} else if (document.body.classList.contains('Banca')) {
		tabs();
	} else if (document.body.classList.contains('ReglasDeportes')) {
		accordion();
	}
})();
