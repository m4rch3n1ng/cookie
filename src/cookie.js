window.cookie = {
	set: function (name, content, options) {
		if (!name || typeof name != "string" || content == undefined) return false;
		
		let path = typeof options?.path != "string" ? "/" : options.path;
		let expires = !isNaN(+options?.expires) ? new Date(Date.now() + 8.64e+7 * +options.expires).toUTCString() : "";
		content = typeof content == "object" ? JSON.stringify(content) : content;

		document.cookie = `${name}=${content};path=${path};expires="${expires}`;

		return true;
	},
	get: function (name, options) {
		let cookies = document.cookie ? document.cookie.split("; ").map(c => c.split("=")) : [];

		if (!name || typeof name != "string") return cookies;

		let value = cookies.find(([n]) => n == name);
		value = value ? value[1] : undefined;

		if (!options?.nojson && value) try { value = JSON.parse(value) } catch { };

		return value;
	},
	remove: function (name, options) {
		if (!name || typeof name != "string") return false;

		document.cookie = `${name}=;path=${options?.path == undefined ? "/" : options.path};expires=Thu, 01 Jan 1970 00:00:01 GMT`;

		return true;
	}
}
