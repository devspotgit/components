


class component extends HTMLElement{

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
    setData(){

        //...

    }


    //public method - to get data from js
    getData(){

        //...
    }

    //private method - to render html
    #htmlRender(){

        const html=`
            ...
        `
        this.#shadow.innerHTML=html
    }


    //private method - to add style to html
    #cssStyle(){

        const css=`
           ...
        `
        this.#sheet.replaceSync(css)
        this.#shadow.adoptedStyleSheets = [this.#sheet]
    }


    //private method - retrieve data from html
    #getData(){

        //...
    }

    //private method - js logic to manipulate the html and handle events
    #jsLogic(){

        //...
    }

}


customElements.define("custom-component", component)





