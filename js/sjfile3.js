
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getRndLetter() {
    const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var res = "";
    var rnd = Math.floor(Math.random() * list.length);
    res = list.charAt(rnd);
    return res;
  }
  function getRndDate() {
    date = "";
    month = getRndInteger(1, 13);
    if (month <= 9) {
      date = "0" + month.toString(10);;
    }
    else {
      date = month.toString(10);;
    }
    day = getRndInteger(1, 29);
    if (day <= 9) {
      date = date + "0" + day.toString(10);;
    }
    else {
      date = date + day.toString(10);;
    }
    year = new Date().getFullYear()
    year = year - 1;
    date = date + year.toString(10);;
    issueDate = date;
  }
  function getRndExpiryDate(years) {
    date = "";
    month = getRndInteger(1, 13);
    if (month <= 9) {
      date = "0" + month.toString(10);
    }
    else {
      date = month.toString(10);
    }
    day = getRndInteger(1, 29);
    if (day <= 9) {
      date = date + "0" + day.toString(10);
    }
    else {
      date = date + day.toString(10);
    }
    year = new Date().getFullYear()
    year = year - 1;
    year = year + years;
    date = date + year.toString(10);
    return date;
  }
  function fit(word, num) {
    return (word + "****************************").substr(0, num);
  }
  function go() {
    var header = "@\x0A\x1E\x0D";
    var filetype = "ANSI ";
    var iin = "XXXXXX";
    var version = "09";
    var jurVer = "00";
    var entries = "01";

    var subType = "DL"
    var offset = "XXXX"
    var lengthField = "XXXX"

    var lin = "XXXXXX";
    var issueDate = getRndDate();
    var inventoryNum = getRndLetter() + getRndLetter() + getRndInteger(100000, 999999) + getRndLetter() + getRndInteger(1000, 9999) + getRndLetter();
    var docid = getRndLetter() + getRndLetter() + getRndInteger(100000, 999999) + getRndLetter() + getRndInteger(1000, 9999) + getRndLetter();
    var audit = getRndLetter() + getRndLetter() + getRndInteger(100000, 999999) + getRndLetter() + getRndInteger(1000, 9999) + getRndLetter();
    var compliance = "F";
    var revDate = "11272016";
    var stateID = document.getElementById('states');

    var lastName = document.getElementsByName("lastName")[0].value;
    var middleName = document.getElementsByName("middleName")[0].value;
    var firstName = document.getElementsByName("firstName")[0].value;

    var formattedlastName = lastName.toUpperCase();
    var formattedmiddleName = middleName.toUpperCase();
    var formattedfirstName = firstName.toUpperCase();

    var issueDate = document.getElementsByName("issuedate")[0].value;



    var birthday = document.getElementsByName("bday")[0].value;

    var birthYear = birthday.substring(0, 4);
    var birthMonth = birthday.substring(5, 7);
    var birthDate = birthday.substring(8, 10);

    var formattedBirthday = birthMonth + birthDate + birthYear;

    var inches = document.getElementsByName("heightIn")[0].value;
    var feet = document.getElementsByName("heightFT")[0].value;
    var height = (Number(feet) * 12) + Number(inches);
    var formattedHeight = "0" + height.toString(10) + " in";

    var weight = document.getElementsByName("weight")[0].value;
    if (Number(weight) <= 99) {
      var weight = "0" + weight;
    }

    var gender = document.querySelector('input[name="gender"]:checked').value;
    if (gender == true) {
      genderFormated = "1";
    } else {
      genderFormated = "2";
    }

    var hairColor = document.getElementById('hairColor').value;
    var eyeColor = document.getElementById('eyeColor').value;

    var street = document.getElementsByName("street")[0].value;
    var formattedStreet = street.toUpperCase();
    var city = document.getElementsByName("city")[0].value;
    var formattedCity = city.toUpperCase();
    var zip = document.getElementsByName("zip")[0].value;
    var formattedZip = zip + getRndInteger(1000, 9999) + "  ";

    if (stateID.value == 'AL') {
      var iin = "636033";
      var lin = getRndInteger(1000000, 9999999);
      var expiryDate = getRndExpiryDate(4);
      var classification = "D";

    } else if (stateID.value == 'AK') {
      var iin = "636059";
      var lin = getRndInteger(1000000, 9999999);
      var expiryDate = getRndExpiryDate(5);
      var classification = "D";

    } else if (stateID.value == 'AZ') {
      var iin = "636026";
      const list = "ABDY";
      var res = "";
      var rnd = Math.floor(Math.random() * list.length);
      res = list.charAt(rnd);
      var lin = res + getRndInteger(10000000, 99999999);
      var expiryDate = getRndExpiryDate(12);
      var classification = "D";

    } else if (stateID.value == 'AR') {
      var iin = "636021";
      var lin = "9" + getRndInteger(10000000, 99999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'CA') {
      var iin = "636014";
      var lin = getRndLetter() + getRndInteger(1000000, 9999999);
      var expiryDate = getRndExpiryDate(5);
      var classification = "C";

    } else if (stateID.value == 'CO') {
      var iin = "636020";
      var lin = getRndInteger(10, 99) + "-" + getRndInteger(100, 999) + "-" + getRndInteger(1000, 9999);
      var expiryDate = getRndExpiryDate(5);
      var classification = "R";

    } else if (stateID.value == 'CT') {
      var iin = "636006";
      if ((birthYear % 2) == 0) {
        var lin = birthMonth + getRndInteger(1000000, 9999999);
      } else {
        newBirthMonth = Number(birthMonth) + Number("12");
        var lin = newBirthMonth.toString(10) + getRndInteger(1000000, 9999999);
      }
      var expiryDate = getRndExpiryDate(6);
      var classification = "D";

    } else if (stateID.value == 'DE') {
      var iin = "636011";
      var lin = getRndInteger(1000000, 9999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'FL') {
      var iin = "636010";
      var lin = lastName.substring(0, 1) + getRndInteger(100, 999) + "-" + getRndInteger(100, 999) + birthYear.substring(2, 5) + "-" + getRndInteger(100, 999) + "-" + Math.floor(Math.random() * 2).toString(10);
      var expiryDate = getRndExpiryDate(8);
      var classification = "E";

    } else if (stateID.value == 'GA') {
      var iin = "636055";
      var lin = getRndInteger(100000000, 999999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "C";

    } else if (stateID.value == 'HI') {
      var iin = "636047";
      var lin = "H" + getRndInteger(10000000, 99999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "3";

    } else if (stateID.value == 'ID') {
      var iin = "636050";
      var lin = getRndLetter() + getRndLetter() + getRndInteger(100000, 999999) + getRndLetter();
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'IL') {
      var iin = "636035";
      var lin = lastName.substring(0, 1) + getRndInteger(10000000000, 99999999999);
      var expiryDate = getRndExpiryDate(4);
      var classification = "D";

    } else if (stateID.value == 'IN') {
      var iin = "636037";
      var lin = getRndInteger(1000, 9999) + "-" + getRndInteger(10, 99) + "-" + getRndInteger(1000, 9999);
      var expiryDate = getRndExpiryDate(6);
      var classification = "D";

    } else if (stateID.value == 'IA') {
      var iin = "636018";
      var lin = getRndInteger(100000000, 999999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "C";

    } else if (stateID.value == 'KS') {
      var iin = "636022";
      var lin = "K" + getRndInteger(10, 99) + "-" + getRndInteger(10, 99) + "-" + getRndInteger(1000, 9999);
      var expiryDate = getRndExpiryDate(6);
      var classification = "C";

    } else if (stateID.value == 'KY') {
      var iin = "636046";
      var lin = lastName.substring(0, 1) + "-" + getRndInteger(100, 999) + "-" + getRndInteger(100, 999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'LA') {
      var iin = "636007";
      var lin = "00" + getRndInteger(1000000, 9999999);
      var expiryDate = getRndExpiryDate(6);
      var classification = "E";

    } else if (stateID.value == 'ME') {
      var iin = "636041";
      var lin = getRndInteger(1000000, 9999999);
      var expiryDate = getRndExpiryDate(6);
      var classification = "C";

    } else if (stateID.value == 'MD') {
      var iin = "636003";
      var lin = lastName.substring(0, 1) + "-" + getRndInteger(100, 999) + "-" + getRndInteger(100, 999) + "-" + getRndInteger(100, 999) + "-" + getRndInteger(100, 999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "C";

    } else if (stateID.value == 'MA') {
      var iin = "636002";
      var lin = "S" + getRndInteger(10000000, 99999999);
      var expiryDate = getRndExpiryDate(5);
      var classification = "D";

    } else if (stateID.value == 'MI') {
      var iin = "636032";
      var lin = lastName.substring(0, 1) + " " + getRndInteger(100, 999) + " " + getRndInteger(100, 999) + " " + getRndInteger(100, 999) + " " + getRndInteger(100, 999);
      var expiryDate = getRndExpiryDate(4);
      var classification = "D";

    } else if (stateID.value == 'MN') {
      var iin = "636038";
      var lin = getRndLetter() + getRndInteger(100000000000, 999999999999);
      var expiryDate = getRndExpiryDate(4);
      var classification = "D";

    } else if (stateID.value == 'MS') {
      var iin = "636051";
      var lin = getRndInteger(100000000, 999999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "R";

    } else if (stateID.value == 'MO') {
      var iin = "636030";
      var lin = getRndLetter() + getRndInteger(100000000, 999999999);
      var expiryDate = getRndExpiryDate(6);
      var classification = "F";

    } else if (stateID.value == 'MT') {
      var iin = "636008";
      var lin = birthMonth + getRndInteger(100, 999) + birthYear + "41" + birthDate;
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'NE') {
      var iin = "636054";
      const list = "ABCEGHV";
      var res = "";
      var rnd = Math.floor(Math.random() * list.length);
      res = list.charAt(rnd);
      var lin = res + getRndInteger(10000000, 99999999);
      var expiryDate = getRndExpiryDate(5);
      var classification = "O";

    } else if (stateID.value == 'NV') {
      var iin = "636049";
      var lin = getRndInteger(1000000000, 9999999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "C";

    } else if (stateID.value == 'NH') {
      var iin = "636039";
      var lnamelength = lastName.length;
      var lin = lastName.substring(0, 1) + lastName.substring((Number(lnamelength) - 1), Number(lnamelength)) + firstName.substring(0, 1) + birthYear.substring(2, 5) + birthDate + getRndInteger(1000, 9999);
      var expiryDate = getRndExpiryDate(5);
      var classification = "D";

    } else if (stateID.value == 'NJ') {
      var iin = "636036";
      var lin = getRndLetter() + getRndInteger(1000, 9999) + " " + getRndInteger(10000, 99999) + " " + getRndInteger(10000, 99999);
      var expiryDate = getRndExpiryDate(4);
      var classification = "D";

    } else if (stateID.value == 'NM') {
      var iin = "636009";
      var lin = getRndInteger(100000000, 999999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'NY') {
      var iin = "636001";
      var lin = getRndInteger(100, 999) + " " + getRndInteger(100, 999) + " " + getRndInteger(100, 999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'NC') {
      var iin = "636004";
      var lin = getRndInteger(100000000000, 999999999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "A";

    } else if (stateID.value == 'ND') {
      var iin = "636034";
      var lin = getRndLetter() + getRndLetter() + getRndLetter() + "-" + getRndInteger(10, 99) + "-" + getRndInteger(1000, 9999);
      var expiryDate = getRndExpiryDate(6);
      var classification = "D";

    } else if (stateID.value == 'OH') {
      var iin = "636023";
      var lin = getRndLetter() + getRndLetter() + getRndInteger(100000000, 999999999);
      var expiryDate = getRndExpiryDate(4);
      var classification = "D";

    } else if (stateID.value == 'OK') {
      var iin = "636058";
      var lin = getRndLetter() + getRndInteger(100000000, 999999999);
      var expiryDate = getRndExpiryDate(4);
      var classification = "D";

    } else if (stateID.value == 'OR') {
      var iin = "636029";
      var lin = getRndInteger(1000000, 9999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "C";

    } else if (stateID.value == 'PA') {
      var iin = "636025";
      var lin = getRndInteger(10, 99) + " " + getRndInteger(100, 999) + " " + getRndInteger(100, 999);
      var expiryDate = getRndExpiryDate(4);
      var classification = "C";

    } else if (stateID.value == 'RI') {
      var iin = "636052";
      var lin = getRndInteger(1000000, 9999999);
      var expiryDate = getRndExpiryDate(5);
      var classification = "O";

    } else if (stateID.value == 'SC') {
      var iin = "636005";
      var lin = getRndInteger(10000000000, 99999999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'SD') {
      var iin = "636042";
      var lin = getRndInteger(10000000, 99999999);
      var expiryDate = getRndExpiryDate(5);
      var classification = "1";

    } else if (stateID.value == 'TN') {
      var iin = "636053";
      var lin = getRndInteger(100000000, 999999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'TX') {
      var iin = "636015";
      var lin = getRndInteger(10000000, 99999999);
      var expiryDate = getRndExpiryDate(6);
      var classification = "C";

    } else if (stateID.value == 'UT') {
      var iin = "636040";
      var lin = getRndInteger(1000000000, 9999999999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'VT') {
      var iin = "636024";
      var VernmontIn = Math.floor(Math.random() * 2);
      if (VermontIn == 0) {
        var lin = getRndInteger(10000000, 99999999);
      } else {
        var lin = getRndInteger(1000000, 9999999) + getRndLetter();
      }
      var expiryDate = getRndExpiryDate(4);
      var classification = "1";

    } else if (stateID.value == 'VA') {
      var iin = "636000";
      var lin = getRndLetter() + getRndInteger(10, 99) + "-" + getRndInteger(10, 99) + "-" + getRndInteger(1000, 9999);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'WA') {
      var iin = "636045";
      var lin = fit(lastName, 5) + firstName.substring(0, 1) + middleName.substring(0, 1) + getRndInteger(10000, 99999);
      var expiryDate = getRndExpiryDate(6);
      var classification = "D";

    } else if (stateID.value == 'WV') {
      var iin = "636061";
      var WestVirginiaIn = Math.floor(Math.random() * 2);
      if (WestVirginiaIn == 0) {
        var lin = getRndLetter() + getRndInteger(100000, 999999);
      } else {
        var lin = getRndLetter() + getRndLetter() + getRndInteger(10000, 99999);
      }
      var expiryDate = getRndExpiryDate(8);
      var classification = "E";

    } else if (stateID.value == 'WI') {
      var iin = "636031";
      var lin = getRndLetter() + getRndInteger(100, 999) + "-" + getRndInteger(1000, 9999) + getRndInteger(1000, 9999) + getRndInteger(10, 99);
      var expiryDate = getRndExpiryDate(8);
      var classification = "D";

    } else if (stateID.value == 'WY') {
      var iin = "636060";
      var lin = getRndInteger(100000, 999999) + "-" + getRndInteger(100, 999);
      var expiryDate = getRndExpiryDate(5);
      var classification = "C";

    }

    formattedState = stateID.value;
    offset = header.length + filetype.length + iin.length + version.length + jurVer.length + entries.length + subType.length + offset.length + lengthField.length;
    formattedOffset = "00" + offset.toString(10);

    lengthField = subType.length + "DAQ".length + lin.toString(10).length + "\x0ADCS".length + formattedlastName.length + "\x0ADDEN\x0ADAC".length + formattedfirstName.length + "\x0ADDFN\x0ADAD".length + formattedmiddleName.length + "\x0ADDGN\x0ADCA".length + classification.length + "\x0ADCBNONE\x0ADCDNONE\x0ADBA".length + expiryDate.length + "\x0ADBD".length + issueDate.length + "\x0ADBB".length + formattedBirthday.length + "\x0ADBC".length + genderFormated.length + "\x0ADAY".length + eyeColor.length + "\x0ADAZ".length + hairColor.length + "\x0ADAU".length + formattedHeight.length + "\x0ADAG".length + formattedStreet.length + "\x0ADAI".length + formattedCity.length + "\x0ADAJ".length + formattedState.length + "\x0ADAK".length + formattedZip.length + "\x0ADCF".length + docid.length + "\x0ADCGUSA\x0ADCJ".length + audit.length + "\x0ADCK".length + inventoryNum.length + "\x0ADDA".length + compliance.length + "\x0ADDB".length + revDate.length + "\x0D".length;
    formattedLength = "0" + lengthField.toString(10);

    var code = header + filetype + iin + version + jurVer + entries + subType + formattedOffset + formattedLength + subType + "DAQ" + lin + "\x0ADCS" + formattedlastName + "\x0ADDEN\x0ADAC" + formattedfirstName + "\x0ADDFN\x0ADAD" + formattedmiddleName + "\x0ADDGN\x0ADCA" + classification + "\x0ADCBNONE\x0ADCDNONE\x0ADBA" + expiryDate + "\x0ADBD" + issueDate + "\x0ADBB" + formattedBirthday + "\x0ADBC" + genderFormated + "\x0ADAY" + eyeColor + "\x0ADAZ" + hairColor + "\x0ADAU" + formattedHeight + "\x0ADAG" + formattedStreet + "\x0ADAI" + formattedCity + "\x0ADAJ" + formattedState + "\x0ADAK" + formattedZip + "\x0ADCGUSA\x0ADCF" + docid + "\x0ADCJ" + audit + "\x0ADCK" + inventoryNum + "\x0ADDA" + compliance + "\x0ADDB" + revDate + "\x0D";

    console.log(code);

    PDF417.init(code, 4);
    var barcode = PDF417.getBarcodeArray();
    var bw = 2;
    var bh = 1;
    var canvas = document.createElement('canvas');
    canvas.width = bw * barcode['num_cols'];
    canvas.height = bh * barcode['num_rows'];
    document.getElementById('barcode').innerHTML = "";
    document.getElementById('barcode').appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var y = 0;
    for (var r = 0; r < barcode['num_rows']; ++r) {
      var x = 0;
      for (var c = 0; c < barcode['num_cols']; ++c) {
        if (barcode['bcode'][r][c] == 1) {
          ctx.fillRect(x, y, bw, bh);
        }
        x += bw;
      }
      y += bh;
    }

    document.getElementById("licenseNumber").innerHTML = "License Number: " + lin;
    document.getElementById("issueDate").innerHTML = "Issue Date (MMDDYYYY): " + issueDate;
    document.getElementById("expiryDate").innerHTML = "Expiry date (MMDDYYYY): " + expiryDate;
    document.getElementById("classification").innerHTML = "License Class: " + classification;
  }
