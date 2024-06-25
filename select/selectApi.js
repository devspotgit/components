


function selectItem(item){

    return `
        <span class="select-item">item</span>
    `
}


export default function select(itemList){

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

