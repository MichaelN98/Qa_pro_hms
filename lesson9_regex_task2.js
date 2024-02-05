var email_list = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Ця адреса не підходить
    },
];

function isValidEmail(email) {                                                                                  //проверка формата почты
    var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
    return emailRegex.test(email);
}

function isTrustedDomain(email) {                                                               //проверенная почта
    var domain = email.split('@')[1];
    return domain === 'gmail.com' || domain === 'yahoo.com';
}

var trustedEmails = email_list.filter(obj => {                                                         // фильр выборки почты
    return isValidEmail(obj.email) && isTrustedDomain(obj.email);
});


console.log(trustedEmails);
