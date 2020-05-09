const {
  MUNINI,
  IBINYABUMWE,
  IBINYACUMI,
  IBINYEJANA,
  IBINYEJANA_EXTRA,
  IBINYAGIHUMBI,
  IBINYAGIHUMBI_EXTRA,
  AMAMILIYONI,
  AMAMILIYALI,
  AMAMILIYALI_EXTRA
} = require("./constants");
const ingombajwi = ["i", "e", "u"];
/**
 * Convert a number to a string in kinyarwanda
 * ranges from 0 up to 1 trillion
 *
 * @param {umubare|string} umubare
 * @param ijambo
 * @returns {*}
 */
function mushyashya(umubare, ijambo = []) {
  let umubare_ijambo = "";
  umubare = parseInt(umubare, 10);

  if (!Number.isInteger(umubare)) {
    throw new TypeError("Number is incorrect");
  }

  if (umubare === MUNINI) {
    return ("tiliyoni imwe");
  }
  if (umubare > MUNINI) {
    return ("umubare munini cyane");
  }

  if (umubare === 0) {
    return ijambo.length == 0 ? "zeru" : ijambo.join(" ").replace(/,$/, "")
  }

  if (umubare < 20) {
    umubare_ijambo = IBINYABUMWE[umubare];
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = 0;
  } else if (umubare < 100) {
    umubare_ijambo = IBINYACUMI[Math.floor(umubare / 10)];
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 10;
  } else if (umubare < 1000) {
    umubare_ijambo = IBINYEJANA[Math.floor(umubare / 100)];
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 100;
  } else if (umubare < 10000) {
    umubare_ijambo = IBINYAGIHUMBI[Math.floor(umubare / 1000)];
    if (umubare_ijambo === 1) {
      umubare_ijambo = "igihumbi" + umubare_ijambo;
    }
    // umubare_ijambo = "ibihumbi " + umubare_ijambo;
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 1000;
  } else if (umubare < 100000) {
    umubare_ijambo = IBINYAGIHUMBI_EXTRA[Math.floor(umubare / 10000)];
    umubare_ijambo = "ibihumbi " + umubare_ijambo;
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 10000;
  } else if (umubare < 1000000) {
    umubare_ijambo = IBINYEJANA_EXTRA[Math.floor(umubare / 100000)];
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 100000;
  } else if (umubare < 10000000) {
    umubare_ijambo = AMAMILIYONI[Math.floor(umubare / 1000000)];
    umubare_ijambo = "miliyoni " + umubare_ijambo;
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 1000000;
  } else if (umubare < 100000000) {
    umubare_ijambo = IBINYACUMI[Math.floor(umubare / 10000000)];
    umubare_ijambo = "miliyoni " + umubare_ijambo;
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 10000000;
  } else if (umubare < 1000000000) {
    umubare_ijambo = IBINYEJANA[Math.floor(umubare / 100000000)];
    umubare_ijambo = "miliyoni " + umubare_ijambo;
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 100000000;
  } else if (umubare < 10000000000) {
    umubare_ijambo = AMAMILIYALI[Math.floor(umubare / 1000000000)];
    umubare_ijambo = "miliyari " + umubare_ijambo;
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 1000000000;
  } else if (umubare < 100000000000) {
    umubare_ijambo = AMAMILIYALI_EXTRA[Math.floor(umubare / 10000000000)];
    umubare_ijambo = "miliyari " + umubare_ijambo;
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 10000000000;
  } else if (umubare < 1000000000000) {
    umubare_ijambo = IBINYEJANA[Math.floor(umubare / 100000000000)];
    umubare_ijambo = "miliyari " + umubare_ijambo;
    if (
      ingombajwi.includes(umubare_ijambo.slice(0, -umubare_ijambo.length + 1))
    ) {
      umubare_ijambo = "n'" + umubare_ijambo;
    } else {
      umubare_ijambo = "na " + umubare_ijambo;
    }
    umubare = umubare % 100000000000;
  }
  ijambo.push(umubare_ijambo);
  return mushyashya(umubare, ijambo);
}

/**
 * Convert a number to a string in kinyarwanda
 * ranges from 0 up to 1 trillion
 *
 * @param {umubare|string} umubare
 * @returns {string}
 */
function hindura(umubare) {
  igisubizo = mushyashya(umubare);
  len = String(umubare).length;
  let gishya = igisubizo.slice("na ");
  if (igisubizo.startsWith("n'")) {
    gishya = igisubizo.slice(2);
  }
  if (igisubizo.startsWith("na")) {
    gishya = igisubizo.slice(3);
  }
  if (igisubizo.includes("igihumbi")) {
    ind = gishya.indexOf("igihumbi");
    fpart = gishya.slice(0, ind + "igihumbi".length + 1);
    lpart = gishya.slice(ind + "igihumbi".length + 1);
    gishya = fpart + lpart.replace(/n'igihumbi/g, "na");
    gishya = andikaNeza(gishya);
  }
  if (igisubizo.includes("ibihumbi")) {
    ind = gishya.indexOf("ibihumbi");
    fpart = gishya.slice(0, ind + "ibihumbi".length + 1);
    lpart = gishya.slice(ind + "ibihumbi".length + 1);
    gishya = fpart + lpart.replace(/n'ibihumbi/g, "na");
    gishya = andikaNeza(gishya);
  }
  if (igisubizo.includes("miliyoni")) {
    ind = gishya.indexOf("miliyoni");
    fpart = gishya.slice(0, ind + "miliyoni".length + 1);
    lpart = gishya.slice(ind + "miliyoni".length + 1);
    gishya = fpart + lpart.replace(/na miliyoni/g, "na");
    gishya = andikaNeza(gishya);
  }
  if (igisubizo.includes("miliyari")) {
    ind = gishya.indexOf("miliyari");
    fpart = gishya.slice(0, ind + "miliyari".length + 1);
    lpart = gishya.slice(ind + "miliyari".length + 1);
    gishya = fpart + lpart.replace(/na miliyari/g, "na");
    gishya = andikaNeza(gishya);
  }
  return gishya;
}

function andikaNeza(gishya) {
  gishya = gishya.replace(/\s+na\s+i/g, " n'i");
  gishya = gishya.replace(/\s+na\s+u/g, " n'u");
  gishya = gishya.replace(/\s+na\s+e/g, " n'e");
  return gishya;
}

module.exports = {
  hindura
};
