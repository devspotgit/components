



function accordionItemTitle(title){

    return `
        <span class="accordion-item-title">
            ${title}
        </span>
    `
}

function accordionItemContent(content){

    return `
        <p class="accordion-item-content">
            ${content}
        </p>
    `
}

function accordionItem(item){

    return `
        <div class="accordion-item">
            ${accordionItemTitle(item.title)}
            ${accordionItemContent(item.content)}
        </div>
    `
}

export function accordion(itemList){

    let output = ``

    itemList.forEach(item => {
        output+=accordionItem(item)
    })

    return `
        <div class="accordion">
            ${output}
        </div>
    `
}



