function findAndReplace() {
    let elementsInsideBody = [...document.body.getElementsByTagName('*')]
    elementsInsideBody.forEach((element) => {
        element.childNodes.forEach((child) => {
            if (child.nodeType === 3) {
                replaceText(child)
            }
        })
    })

    let title = document.title
    document.title = title.replace(/Studierenden?/g, 'Studenten')
}

function replaceText(node) {
    let value = node.nodeValue
    value = value.replace(/Studierenden?/g, 'Studenten')
    node.nodeValue = value
}

window.addEventListener('load', () => {
    findAndReplace()
    setTimeout(findAndReplace, 1500)
})
