import {activeMenuItem} from "./modules/verticalMenu";
import {swDetecter} from './modules/swDetecter';
(()=>{ 
	swDetecter();
	activeMenuItem();
	if (document.body.classList.contains('home')) { 
		// functions here
	}else if (document.body.classList.contains('page2')) {
		// functions here
	}else if (document.body.classList.contains('page3')) {
		// functions here
	}
	else if (document.body.classList.contains('page4')) {
		// functions here
	}
})();
