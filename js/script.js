// saat
window.onload = startTime;

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("saat").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout("startTime()", 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
// saat

function kontrol() {
  var isim = document.forms["form"]["fname"].value;
  var soyİsim = document.forms["form"]["sname"].value;
  var email = document.forms["form"]["email"].value;

  if (isim != "" && soyİsim != "" && email != "") {
    alert("Mesajınız Başarıyla Gönderildi");
  } else {
    alert("Lütfen İsim Soyisim ve Mail Kısımlarını Doldurunuz");
    return false;
  }
}
