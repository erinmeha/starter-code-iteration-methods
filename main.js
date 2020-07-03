// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// KATA 0
const greenEyes1 = users.filter(user => user.eyeColor === "green")

printKata(0, greenEyes1)

// KATA 1
const active = users.filter(user => user.isActive = "true")

printKata(1, active)

// KATA 2
const emails = users.map(user => user.email)

printKata(2, emails)

// KATA 3
const ovation = users.some(user => user.company = "OVATION")

printKata(3, ovation)

// KATA 4
const over38 = users.find(user => user.age > 38)

printKata(4, over38)

// Kata 5
const over38Active = users
    .filter(user => user.isActive = "true")
    .find(user => user.age > 38)

printKata(5, over38Active)

// KATA 6
const zencoBalance = users
    .filter(user => user.company = "ZENCO")
    .map(user => user.balance)

printKata(6, zencoBalance)

// KATA 7
const fugiatTag = users
    .filter(user => user.tags.includes("fugiat"))
    .map(user => user.age)

printKata(7, fugiatTag)