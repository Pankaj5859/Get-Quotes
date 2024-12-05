const button=document.getElementById("bttn")
const dabba=document.getElementById("dabba")


button.addEventListener("click",()=>{

    const getData= async()=>{
        let res= await fetch("https://dummyjson.com/quotes")
        let data= await res.json() 

        for( let item of data.quotes)
        {

            
            let outerDiv=document.createElement("div")
            let authorName=document.createElement("h3")
            let quoteText=document.createElement("p")
            let delBtn=document.createElement("button")

            delBtn.innerText="Delete"
            delBtn.addEventListener("click",()=>{
                delBtn.parentElement.remove()
            })
            
            // outerDiv.addEventListener("click",()=>{
            //     outerDiv.remove()
            // })

            authorName.innerText=item.author
            quoteText.innerText=item.quote

            outerDiv.appendChild(authorName)
            outerDiv.appendChild(quoteText)
            outerDiv.appendChild(delBtn)

            outerDiv.style.border="2px solid red"
            outerDiv.style.margin="20px"
            outerDiv.style.padding="10px"
            outerDiv.style.backgroundColor="beige"
            quoteText.style.color="red"
            quoteText.style.fontStyle="italic"
            delBtn.style.backgroundColor="lightblue"
            authorName.style.fontStyle="italic"

            dabba.appendChild(outerDiv)

        }
    }
    getData()

    
})