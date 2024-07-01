


/*select

<ds-select>

    <ds-item>...</ds-item>

    <ds-item>...</ds-item>
    
    ....

</ds-select>

*/

document.querySelectorAll('ds-select').forEach(el => {
    el.attachShadow({mode:'open'})
    el.shadowRoot.innerHTML=`
        <span>Select</span>
        <div class="menu" status="closed">
            <slot></slot>
        </div>
    `
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(`
        .menu{
            display:flex;
            flex-direction:column;
            position:absolute;
            top:100%;
            width:100%;
            left:0px;
            max-height:0px;
            overflow-y:hidden;
            transition:max-height 0.5s;
            z-index:1;
        }
        
        span{
            display:contents;
        }

        :host{
            display:flex;
            position:relative;
            padding:10px;
            cursor:pointer;
            justify-content:space-between;
            align-items:center;
        }

        :host::after{
            content:"";
            width:30px;
            height:30px;
            background:${el.getAttribute('icon-color')||'black'};
            mask-image:url("https://img.icons8.com/ios/50/expand-arrow--v2.png");
            mask-repeat:no-repeat;
            mask-position:center;
            mask-size:50%;
        }

        .menu[status="open"]{
            max-height:500px;
        }
    `)
    el.shadowRoot.adoptedStyleSheets = [sheet]
    el.addEventListener('click', () => {
        const itemClicked = el.querySelector(':scope > ds-item[clicked="true"]')
        if(itemClicked){
            itemClicked.setAttribute('clicked', 'false')
            el.shadowRoot.querySelector('span').innerHTML=itemClicked.innerHTML
            itemClicked.setAttribute('selected', 'true')
            el.querySelectorAll(':scope > ds-item').forEach(item => {
                if(item != itemClicked) item.setAttribute('selected', 'false')
            })
        }
        else{

            if(el.shadowRoot.querySelector('.menu').getAttribute('status') == 'closed'){
                el.shadowRoot.querySelector('.menu').setAttribute('status', 'open')
            }
            else if(el.shadowRoot.querySelector('.menu').getAttribute('status') == 'open'){
                el.shadowRoot.querySelector('.menu').setAttribute('status', 'closed')
            }

        }

    })

})


document.querySelectorAll('ds-select > ds-item').forEach(item => {
    item.addEventListener('click', ()=>{
        item.setAttribute('clicked', 'true')
    })
})










