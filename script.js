let appContainer = null
let names = ['Ala', 'Ela']
let searchPhrase = 'Ela'
let isSearchFocused = false

const addName = function (newName) {

    if (!newName) return

    names = names.concat(newName)

    searchPhrase = ''

    render()

}

const nameExists = function (name) {
    return names.includes(name)
}

const renderList = function () {

    const ul = document.createElement('ul')

    for (let i = 0; i < names.length; i++) {

        const li = document.createElement('li')

        li.innerText = names[i]

        ul.appendChild(li)
    }

    return ul

}

const renderNewNameInput = function () {

    const form = document.createElement('form')

    const input = document.createElement('input')
    const button = document.createElement('button')

    input.setAttribute('placeholder', 'Add new name')
    button.innerText = 'ADD'

    form.addEventListener(
        'submit',
        function (event) {
            event.preventDefault()
            
            addName(input.value)
        }
    )

    form.appendChild(input)
    form.appendChild(button)

    return form

}

const renderSearchInput = function () {

    const div = document.createElement('div')

    const input = document.createElement('input')

    input.setAttribute('placeholder', 'Search name')
    input.value = searchPhrase

    if (isSearchFocused) {
        setTimeout(
            function () {
                input.focus()
            },
            0
        )
    }

    input.addEventListener(
        'input',
        function () {
            searchPhrase = input.value
            isSearchFocused = true

            render()
        }
    )

    div.appendChild(input)

    return div

}

const renderSearchResult = function () {

    const p = document.createElement('p')

    if (nameExists(searchPhrase)) {
        p.innerText = 'Exists'
    } else {
        p.innerText = 'NOT exists'
    }

    return p

}

const render = function () {

    if (!appContainer) {
        appContainer = document.createElement('div')
    }

    appContainer.innerHTML = ''

    const list = renderList()
    const newNameInput = renderNewNameInput()
    const searchInput = renderSearchInput()
    const searchResult = renderSearchResult()

    appContainer.appendChild(list)
    appContainer.appendChild(newNameInput)
    appContainer.appendChild(searchInput)
    appContainer.appendChild(searchResult)

    isSearchFocused = false

    return appContainer

}

const init = function (containerSelector) {
    const container = document.querySelector(containerSelector)

    if (!container) return

    const app = render()

    container.appendChild(app)
}

init('body')