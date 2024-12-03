function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

function isTriangle(a,b,c)
{
   if ((a+b) > c && (a+c) > b && (b+c) > a) {
     return true
   }
  else {
    return false
  }
}

function createArrayOfTiers(num) {
    let prev = ''
    return [...num + ''].map((value) => {
        return prev += value
    }) 
}

function timeConvert(num) { 
    if (num == 0 || num < 0) {
      return "00:00"
    }
    else {
      let orak = Math.floor(num/60)
      let percek = num-orak*60
      if (orak > 9) {
        if (percek > 9) {
            return orak + ":" + percek
        }
        else {
            return orak + ":" + "0" + percek
        }
      }
      else {
        if (percek > 9) {
            return "0"+orak+":"+percek
        }
        else {
            return "0"+orak+":"+"0"+percek
        }
      }
    }
}
