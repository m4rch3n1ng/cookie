if (window.$) window.$.cookie = {
	set: function (name, content, options) {
		if (!name || typeof name != "string" || content == undefined) return false;

		let path = typeof options?.path != "string" ? "/" : options.path;
		let expires = +options?.expires ? new Date(Date.now() + 8.64e+7 * +options.expires).toUTCString() : "";
		content = typeof content == "object" ? JSON.stringify(content) : content;

		document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(content)};path=${path};expires="${expires}`;

		return true;
	},
	get: function (name, options) {
		let cookies = document.cookie ? document.cookie.split("; ").map(cookie => cookie.split("=")).map(([k, ...v]) => [k, v.join("=")]) : [];
		cookies = cookies.map(([key, val]) => {
			try { key = decodeURIComponent(key) } catch { };
			try { val = decodeURIComponent(val) } catch { };
			return [key, val || ""];
		});

		if (!name || typeof name != "string") return name?.json ? Object.fromEntries(cookies) : cookies;

		let value = cookies.find(([n]) => n == name)?.[1];

		if (!options?.nojson && value) try { value = JSON.parse(value) } catch { };

		return value;
	},
	remove: function (name, options) {
		if (!name || typeof name != "string") return false;

		document.cookie = `${encodeURIComponent(name)}=;path=${typeof options?.path != "string" ? "/" : options.path};expires=Thu, 01 Jan 1970 00:00:01 GMT`;

		return true;
	}
}
