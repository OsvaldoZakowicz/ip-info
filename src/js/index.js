import {
	API_URL,
	OPTIONS
} from './env.js'

import { 
	$domById,
	$domEnableSearchStyleOnButton,
	$domDisableSearchStyleOnButton,
	$domToggleTheme,
	$domEnableInputValid,
	$domEnableInputInvalid,
	$domDisableInputValidationStyle,
	$domInsertHtml
} from './dom.js'

import {
	cleanAndValidateIpAddress
} from './helpers.js'

//* API key y host son privadas
//* 1- Comenta o elimina el import de env.js
//* 2- Descomenta e incluye las credenciales de la API que usaras,
//* para este proyecto se uso: https://rapidapi.com/xakageminato/api/ip-geolocation-ipwhois-io

/* const API_URL = 'your_api_url'
const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'your_api_key',
		'X-RapidAPI-Host': 'your_api_host'
	}
} */

//* constantes DOM
const form = $domById('search-form')
const input = $domById('search-input')
const resultBox = $domById('search-results')
const searchButton = $domById('search-button')

// evento principal submit en el formulario
form.addEventListener('submit', async (event) => {
	event.preventDefault()

	// si no hay valor, retornar
	let { value } = input
	if (!value) return

	// validar ip
	let procesedIp = cleanAndValidateIpAddress(input.value)
	let { isValidIp, ip } = procesedIp
	// si la ip no es valida, retornar
	if (!isValidIp) {
		$domEnableInputInvalid(input)
		return
	}

	// input valido
	$domEnableInputValid(input)
	// agregar animacion y estado de busqueda al boton de busqueda
	$domEnableSearchStyleOnButton(searchButton)

	// buscar informacion sobre la ip
	const ipInfo = await fetchIpInfo(ip)

	// volver el input al estado inicial
	$domDisableInputValidationStyle(input)
	// quitar animacion y estado de busqueda al boton de busqueda
	$domDisableSearchStyleOnButton(searchButton)

	// mostrar informacion obtenida sobre la ip
	if (ipInfo) {
		$domInsertHtml(resultBox, ipInfo)
	}

})

/**
	* obtener informacion de una ip via api
	* la ip como parametro debe ser previamente verificada en
	* formato y tipo
	* @param {*} ip
	* @returns promise
	*/
function fetchIpInfo(ip) {
	return fetch(API_URL + ip, OPTIONS)
		.then(response => response.json())
		.catch(error => console.error(error))
}

const themeLink = $domById('theme-link')
// cambiar de tema oscuro a claro, o viceversa
themeLink.addEventListener('click', (event) => {
	$domToggleTheme()
})