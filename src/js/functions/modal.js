import GraphModal from '../vendor/graph-modal.js'
import '../../css/vendor/graph-modal.css'
// import { isDesktop } from 'check-viewport';

export const modal = new GraphModal({
	isOpen: () => {
		//? динамическая загрузка валидации
		// (async () => {
		//   await import('./validation.js')
		// })();
		//? автофокус на первом поле после открытия окна
		// if (isDesktop()) {
		//   const modalWindow = document.querySelector('.modal')
		//   const name = modalWindow.querySelector('#name')
		//   setTimeout(function(){
		//     name.focus()
		//   }, 100);
		// }
	}
})
