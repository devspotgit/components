

/*accordion

<ds-accordion>

    <ds-item>
    
        <ds-title>...</ds-title>

        <ds-content>...</ds-content>
    
    </ds-item>

    <ds-item>
    
        <ds-title>...</ds-title>

        <ds-content>...</ds-content>
    
    </ds-item>

    ....

</ds-accordion>

*/




export function accordion(){

    document.querySelectorAll('ds-accordion').forEach(el => {
        el.addEventListener('click', ()=>{
            const itemClicked = el.querySelector(':scope > ds-item[clicked = "true"]')
            if(itemClicked){
                itemClicked.setAttribute('clicked', false)
                el.querySelectorAll(':scope > ds-item').forEach(item =>{
                    if(item != itemClicked) item.setAttribute('status','inactive')
                })
            }
        })
    })


    document.querySelectorAll('ds-accordion > ds-item').forEach(item => {
        item.setAttribute('status', 'inactive')
    })

    document.querySelectorAll('ds-accordion > ds-item').forEach(item => {
        item.addEventListener('click', ()=>{
            const titleClicked = item.querySelector(':scope > ds-title:first-child[clicked = "true"]')
            if(titleClicked){
                titleClicked.setAttribute('clicked', 'false')
                item.setAttribute('clicked', 'true')
                if(item.getAttribute('status') == 'inactive') item.setAttribute('status', 'active')
                else if(item.getAttribute('status') == 'active') item.setAttribute('status', 'inactive')
            }
        })
    })

    document.querySelectorAll('ds-accordion > ds-item > ds-title:first-child').forEach(title =>{
        title.addEventListener('click', ()=>{
            title.setAttribute('clicked', 'true')
        })
    })

}












/*export function accordion(){

    document.querySelectorAll('ds-accordion').forEach(el => {
        el.querySelectorAll(':scope > ds-item').forEach(item => {
            item.setAttribute('status', 'inactive')
        })
    })

    document.querySelectorAll('ds-accordion').forEach(el => {
        el.querySelectorAll(':scope > ds-item > ds-title:first-child').forEach(title => {
            title.addEventListener('click', ()=>{
                const parent = title.parentNode
                if(parent.getAttribute('status') == 'active') parent.setAttribute('status', 'inactive')
                else if(parent.getAttribute('status') == 'inactive'){
                    parent.setAttribute('status', 'active')
                    el.querySelectorAll(':scope > ds-item').forEach(item => {
                        if(item != parent && item.getAttribute('status') == 'active') item.setAttribute('status', 'inactive')
                    })
                }
            })
        })
    })
}*/


