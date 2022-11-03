import topNav from './modules/topNav';
import { tnsCarousell, tnsSingle } from "./modules/tns-slider";

(() => {
    topNav();
    tnsCarousell();

    if (document.body.classList.contains('home')) {

		tnsSingle();
        
	}else if (document.body.classList.contains('page2')) {
		// functions here
		searchFilter();
	}else if (document.body.classList.contains('page3')) {
		// functions here
	}
})();