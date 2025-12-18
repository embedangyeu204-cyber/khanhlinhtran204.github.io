'use strict';

function calculate() {
  var a = document.frmCal.txta;
  var b = document.frmCal.txtb;
  var o = document.frmCal.sltop;
  var r = document.frmCal.txtr;

  var numberFormat = /^[+-]?\d+(\.\d+)?$/;

  if (!numberFormat.test(a.value)) {
    alert('a must be a number!');
    a.focus();
  } else if (!numberFormat.test(b.value)) {
    alert('b must be a number!');
    b.focus();
  } else if ((o.value === '/' || o.value === '%') && parseInt(b.value, 10) === 0) {
    alert("b can't be 0!");
    r.value = '';
    b.focus();
  } else {
    r.value = eval(a.value + o.value + b.value);
  }
}
