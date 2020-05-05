let names = []

const addName = function (newName) {
    names = names.concat(newName)
}

const nameExists = function (name) { 
    return names.includes(name)
}