const JSEncrypt = require('node-jsencrypt')
function doLogin() {
    var password_old = '123456';
    var encrypt = new JSEncrypt();
    var public_key = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDaP+rYm6rqTMP565UmMU6YXq46KtAN3zwDSO8LNa15p0lJfsaY8jXY7iLsZqQZrGYr2Aayp6hYZy+Q+AMB/VUiSpD9ojPyOQ7r9jsf9jZbTOL4kj6iLZn37fEhp4eLvRgy5EJCyQoFyLCsgLechBTlYl2eA95C3j4ZUFhiV6WFHQIDAQAB';
    encrypt.setPublicKey(public_key);
    var pass_new = encrypt.encrypt(password_old);
    return pass_new
    // $("#MemberPassword").val(pass_new);
    // $("#login_button").submit()
}
console.log(doLogin())