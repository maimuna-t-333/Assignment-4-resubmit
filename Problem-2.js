function validEmail(email) {

    if (typeof email !== 'string') {
        return 'Invalid'
    }

    const firstChar = email[0];
    if (".-_+@".includes(firstChar)) {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }
     const atCount = email.split("@").length - 1;
    if (atCount !== 1) {
        return false;
    }
    if (!email.endsWith('.com')) {
        return false;
    }
    return true
}

// console.log(validEmail("he ro@alom.com"));