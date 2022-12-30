const countEl = document.getElementById('count-el')
const btns = document.querySelectorAll('.btn')
const btns2 = document.querySelectorAll('.btn2')
const saveBtn = document.querySelector('.save-btn')
const resetBtn = document.querySelector('.reset-btn')
let saveEl = document.getElementById('save-el')
let orderValue = document.getElementById('value')

let count = 0
let lastCount = 0

//Add and remove order
btns.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
        let btnSelector = e.target.classList

        if (btnSelector.contains('increment-btn')) {
            count++
            countEl.textContent = count
        }
        
        if (btnSelector.contains('decrement-btn')) {
            if(count > 0) {
                count--
            }
            countEl.textContent = count
        }

        if(count > 0) {
            countEl.style.color = 'darkgreen'
        }
        
    })
})

// clears order
btns2.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('clear-btn')) {
            count = 0
            countEl.textContent = count
        }
    })

})

saveBtn.addEventListener('click', ()=> {
    orderValue.textContent = lastCount + count

    countEl.textContent = 0
    lastCount = lastCount + count

    count = 0
})

//reset button
resetBtn.addEventListener('click', ()=> {
    orderValue.textContent = 0
    countEl.textContent = 0
})


