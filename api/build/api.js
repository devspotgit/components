



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
        <div class="accordion-item" status="inactive">
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







function selectItem(item){

    return `
        <span class="select-item">item</span>
    `
}


export function select(itemList){

    let output = ``

    itemList.foreach(item =>{
        output+=selectItem(item)
    })

    return `
        <div class="select">
            <span class="item-selected">select  item</span>
            <div class="select-item-list">
                ${output}
            </div>
        </div>
    `
}







export function slideshow(){


}


