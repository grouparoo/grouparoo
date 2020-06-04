// from https://stackoverflow.com/questions/105034/how-to-create-guid-uuid

export namespace UUID {
  export function v4() {
    if (globalThis.crypto) {
      return v4_es6();
    } else {
      return v4_es5();
    }
  }

  function v4_es5(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function v4_es6(): string {
    // @ts-ignore
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
}
