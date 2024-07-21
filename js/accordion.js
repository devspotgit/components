

/* Html
<ds-accordion>
    <ds-accordion-item>... </ds-accordion-item>
    <ds-accordion-item>... </ds-accordion-item>
    ...
</ds-accordion>
*/


/* Attributes
- ds-accordion-item
    * title
    * content
*/




class accordion extends HTMLElement{

    #data={}
    #shadow
    #sheet

    constructor(){

        super()
        
        this.#shadow=this.attachShadow({mode:"open"})
        this.#sheet=new CSSStyleSheet()
        this.#getData()
        this.#htmlRender()
        this.#cssStyle()
        this.#jsLogic()
    }

    //public method - to set data from js
    setData(index, attributeName, attributeValue){

        this.#data.items[index-1][attributeName]=attributeValue
        if(attributeName == 'title') this.#shadow.querySelector('div:nth-child('+index+') > span').innerHTML=attributeValue
        else if(attributeName == 'content') this.#shadow.querySelector('div:nth-child('+index+') > p').innerHTML=attributeValue
    }


    //public method - to get data from js
    getData(index, attributeName){

        return this.#data.items[index-1][attributeName]
    }

    //private method - to render html
    #htmlRender(){

        let items=``

        this.#data.items.forEach(item => {
            items+=`
                <div status="inactive">
                    <span>${item.title}</span>
                    <p>${item.content}</p>
                </div>
            `
        })

        const html=`
            ${items}
        `
        this.#shadow.innerHTML=html
    }


    //private method - to add style to html
    #cssStyle(){

        const css=`

            :host{
                display:block !important;
                padding:0px !important;
            }

            div{
                display:flex;
                flex-direction:column;
            }

            span{
                display:flex;
                justify-content:space-between;
                cursor:pointer;
                background:var( --accordion-item-title-background);
                padding:10px;
                align-items:center;
                color:var(--accordion-item-title-color);
                font-weight:var(--accordion-item-title-font-weight);
                font-family:var(--accordion-item-title-font-family);
            }

            span:hover{
                background:var( --accordion-item-title-hover-background);
            }

            span::after{
                content:'';
                width:30px;
                height:30px;
                background:var(--accordion-item-title-color);
                mask-repeat:no-repeat;
                mask-position:center;
                mask-size:50%;
            }

            div[status='inactive'] > span::after{
                mask-image:url('https://img.icons8.com/android/24/plus.png');
            }

            div[status='active'] > span::after{
                mask-image:url('https://img.icons8.com/material-two-tone/24/minus--v1.png');
            }

            p{
                padding-inline:10px;
                overflow-y:hidden;
                transition:all 0.5s;
                margin:0px;
                background:var(--accordion-item-content-background);
                color:var(--accordion-item-content-color);
                font-weight:var(--accordion-item-content-font-weight);
                font-family:var(--accordion-item-content-font-family);
            }

            div[status='inactive'] > p{
                height:0px;
                padding-block:0px;
            }

            div[status='active'] > p{
                height:var( --accordion-item-content-height);
                padding-block:10px;
            }

            div[status='inactive']:not(:last-child) span{
                border-bottom:1px solid var(--accordion-item-separator-color);
            }
        `
        this.#sheet.replaceSync(css)
        this.#shadow.adoptedStyleSheets = [this.#sheet]
    }


    //private method - retrieve data from html
    #getData(){

        this.#data.items=[]

        this.querySelectorAll(':scope > ds-accordion-item').forEach(item => {
            const itemData = {}
            itemData.title = item.getAttribute('title')||'Section'
            itemData.content = item.getAttribute('content')||item.innerHTML||'Some content'
            this.#data.items.push(itemData)
        })

    }

    //private method - js logic to manipulate the html and handle events
    #jsLogic(){

        this.#shadow.querySelectorAll('span').forEach(title =>{
            
            title.addEventListener('click', ()=>{
                const item=title.parentNode
                if(item.getAttribute('status')=='inactive'){
                    item.setAttribute('status','active')
                    this.#shadow.querySelectorAll('div').forEach(_item => {
                        if(_item != item && _item.getAttribute('status')=='active') _item.setAttribute('status','inactive')
                    })
                }
                else if(item.getAttribute('status')=='active')  item.setAttribute('status','inactive')
            })
        })

    }

}


customElements.define("ds-accordion", accordion)






