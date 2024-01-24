//* tema del DOM
const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

//* funciones para manipulacion del DOM

/**
	* cambiar el tema de la app, entre claro y oscuro
	*/
export function $domToggleTheme() {
	const themeLink = $domById('theme-link')
	const htmlTag = document.querySelector('html')
	const theme = htmlTag.attributes['data-theme'].value
	if (theme === LIGHT_THEME) {
		htmlTag.setAttribute('data-theme', DARK_THEME)
		themeLink.style.color = '#e5e5e5'
	} else {
		htmlTag.setAttribute('data-theme', LIGHT_THEME)
		themeLink.style.color = '#fca311'
	}
}

/**
	* obtener elementos del DOM por su id
	* @param {*} id 
	* @returns HTMLElement | null
	*/
export function $domById(id) { 
	return document.getElementById(id) 
}

/**
	* habilita los estilos de busqueda del boton:
	* - agrega el "spinn" busy
	* - deshabilita el boton para evitar otros clicks mientras se busca
	* - establece estilos visuales de boton secundario
	* @param {*} button 
	*/
export function $domEnableSearchStyleOnButton(button) {
	button.setAttribute('aria-busy', 'true')
	button.setAttribute('disabled', '')
	button.classList.add('secondary')
}

/**
	* habilita los estilos de boton primario
	* - quita el "spinn" busy
	* - vuelve a habilitar el boton para buscar
	* - establece estilos visuales de boton primario
	* @param {*} button 
	*/
export function $domDisableSearchStyleOnButton(button) {
	button.removeAttribute('aria-busy', 'true')
	button.removeAttribute('disabled', '')
	button.classList.remove('secondary')
}

/**
	* habilita el estilo de input invalido (borde rojo)
	* @param {*} input 
	*/
export function $domEnableInputInvalid(input) {
	input.setAttribute('aria-invalid', 'true')
}

/**
	* habilita el estilo de input valido (borde verde)
	* @param {*} input 
	*/
export function $domEnableInputValid(input) {
	input.setAttribute('aria-invalid', 'false')
}

/**
	* habilita el estilo de input base (borde gris)
	* @param {*} input 
	*/
export function $domDisableInputValidationStyle(input) {
	input.removeAttribute('aria-invalid')
}

/**
	* insertar html dentro de un elemento html
	* @param {*} htmlElement nodo o elemento contenedor
	* @param {*} htmlToInsert html a insertar
	*/
export function $domInsertHtml(htmlElement, htmlToInsert) {
	htmlElement.innerHTML = JSON.stringify(htmlToInsert, null, 2)
}