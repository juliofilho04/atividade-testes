function ehPalindromo(String) {
    if (Number.isFinite(String)) {
      throw new Error("Não é uma String");
    } else {
      var invertido = "";
      for (var i = String.length - 1; i >= 0; i--) {
        invertido += String[i];
      }
      if (String == invertido) {
        return true;
      } else {
        return false;
      }
    }
  }

  module.exports = {
    ehPalindromo
  };