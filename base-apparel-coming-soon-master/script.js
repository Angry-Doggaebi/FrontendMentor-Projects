function checkEmail(self){
    var useremail = document.getElementById('email').value;
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (regex.test(useremail)==false){
      document.getElementById('notice').innerHTML = 'Please provide a valid email';
    } else {
      document.getElementById('notice').innerHTML = 'Good';
    }
}