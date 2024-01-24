//* funciones de ayuda

/**
	* normaliza el input de usuario y comprueba si se
	* trata de una ipv4 o ipv6
	* @param {*} ip text
	* @returns object, { isValidIp: Boolean, ip: String }
	*/
export function cleanAndValidateIpAddress(ip) {
	// quitar espacios vacios
	let cleanIp = ip.trim().replace(/\s/g, '')

	// comprobar validez de la ip
	const IPV4_PATTERN = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/
	const IPV6_PATTERN = /^(([\da-fA-F]{1,4}):){8}$/
	const checkIp = IPV4_PATTERN.test(cleanIp + '.') ? true : IPV6_PATTERN.test(cleanIp + ':') ? true : false

	return { isValidIp: checkIp, ip: cleanIp }
}