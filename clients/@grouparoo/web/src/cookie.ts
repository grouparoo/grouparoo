// from https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript

export namespace Cookie {
  export function set(
    name: string,
    value: string | number | boolean,
    ttl?: number
  ) {
    let expires = "";
    if (ttl) {
      const date = new Date();
      date.setTime(date.getTime() + ttl);
      expires = "; expires=" + date.toUTCString();
    }
    window.document.cookie =
      name + "=" + (value.toString() || "") + expires + "; path=/";
  }

  export function get(name: string) {
    const nameEQ = name + "=";
    const ca = window.document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) {
        const value = c.substring(nameEQ.length, c.length);
        if (!value || value === "") {
          return null;
        } else {
          return value;
        }
      }
    }
    return null;
  }

  export function clear(name: string) {
    window.document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  }
}
