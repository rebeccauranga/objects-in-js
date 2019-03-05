
function translate(originalString) {
    const leetDictionary = {
    // Keys are strings, just like in python
    // But in JS, quotes are optional
        A: "4",
        E: "3",
        G: "6",
        I: "1",
        O: "0",
        S: "5",
        T: "7",
    };

    let result = '';

    // loop through each letter in originalString
    // if it's in the dictionary, 
    // put its value in `result`

    for (let i = 0; i < originalString.length; i++) {
        let theLetter = originalString[i].toUpperCase();
        // console.log(theLetter);
        // console.log(leetDictionary[theLetter]);
        if (leetDictionary[theLetter]) {
            result += leetDictionary[theLetter];
        } else {
            // if it's not just copy the letter into `result`
            result += theLetter;
        }
    }

    return result;
}

const addressBook = {
    DigitalCrafts: {
        phone: '404-555-1234', 
        address: '3423 Piedmont', 
        city: 'Atlanta'
    },
    "Rebecca Uranga": {
        phone: '404-123-0000', 
        address: 'Main Street USA', 
        city: 'Atlanta',
    },
};

