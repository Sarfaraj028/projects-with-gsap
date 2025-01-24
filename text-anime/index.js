function breakTheText() {
    
    let text = document.querySelector("h1").innerText
    console.log(text);
    
    let splittedText = text.split("")
    console.log(splittedText)

    let clutter = ""
    let firstHalf = splittedText.length / 2;
    console.log(firstHalf);
    
    splittedText.forEach( (element, index) => {
        if(index <= firstHalf+1 ){
            clutter += `<span class="a">${element}</span>`
        }
        else{
            clutter += `<span class="b">${element}</span>`
        }
    }) 
    
    console.log(clutter);

    let h1 = document.querySelector("h1")
    h1.innerHTML = clutter
}
breakTheText()

gsap.from(".a",{
    y: 50,
    opacity: 0,
    duration: .5,
    stagger: .3,
    ease: "back.out"
})

gsap.from(".b",{
    y: 50,
    opacity: 0,
    duration: .5,
    stagger: .5,
    ease: "back.out"
})