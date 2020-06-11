// from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript

export function queryParams(): { [key: string]: string } {
  var match,
    pl = /\+/g, // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) {
      return decodeURIComponent(s.replace(pl, " "));
    },
    query = window.location.search.substring(1);

  const params = {};
  while ((match = search.exec(query)))
    params[decode(match[1])] = decode(match[2]);

  return params;
}
