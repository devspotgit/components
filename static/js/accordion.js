


export function accordion(){

    document.querySelectorAll('.accordion').forEach(item => {
        
        item.addEventListener('click', (event)=>{

            if (event.target.getAttribute('class') == 'accordion-item-title'){

                if(event.target.parentNode.getAttribute('status') =='inactive'){
                    event.target.parentNode.setAttribute('status', 'active')
                }
                else if(event.target.parentNode.getAttribute('status')=='active'){
                    event.target.parentNode.setAttribute('status', 'inactive')
                }

                item.querySelectorAll('.accordion-item').forEach(el => {

                    if(el != event.target.parentNode && el.getAttribute('status') == 'active' ) el.setAttribute('status', 'inactive')

                })

        
            }

        })

    })

}




