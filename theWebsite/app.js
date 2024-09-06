// const lessons = [
//     {
//         id:1,
//         img:"images/10.jpg",
//         h3Absolute:"Coding",
//         title:"The Elite Way",
//         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis ex incidunt natus sit consequatur?",
//     },
//     {
//         id:2,
//         img:"images/10.jpg",
//         h3Absolute:"Coding",
//         title:"The Elite Way",
//         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis ex incidunt natus sit consequatur?",
//     },
//     {
//         id:3,
//         img:"images/10.jpg",
//         h3Absolute:"Coding",
//         title:"The Elite Way",
//         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis ex incidunt natus sit consequatur?",
//     },
//     {
//         id:4,
//         img:"images/10.jpg",
//         h3Absolute:"Coding",
//         title:"The Elite Way",
//         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis ex incidunt natus sit consequatur?",
//     },
//     {
//         id:5,
//         img:"images/10.jpg",
//         h3Absolute:"Coding",
//         title:"The Elite Way",
//         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis ex incidunt natus sit consequatur?",
//     },
//     {
//         id:6,
//         img:"images/10.jpg",
//         h3Absolute:"Coding",
//         title:"The Elite Way",
//         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis ex incidunt natus sit consequatur?",
//     },
//     {
//         id:7,
//         img:"images/10.jpg",
//         h3Absolute:"Coding",
//         title:"The Elite Way",
//         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis ex incidunt natus sit consequatur?",
//     },
//     {
//         id:8,
//         img:"images/10.jpg",
//         h3Absolute:"Coding",
//         title:"The Elite Way",
//         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis ex incidunt natus sit consequatur?",
//     },
//     {
//         id:9,
//         img:"images/10.jpg",
//         h3Absolute:"Coding",
//         title:"The Elite Way",
//         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis ex incidunt natus sit consequatur?",
//     }
// ]

const lessonGrids = document.querySelector(".lesson-grids")
const grids = document.querySelectorAll(".grid")
const selectLinks = document.querySelectorAll(".select")
const option = document.querySelector('.select-list .select').value
const navbar = document.querySelector(".navbar")
const LinksContainer = document.querySelector(".links-container1")
const links = document.querySelector(".link")
const scrollLinks = document.querySelectorAll(".link")
const navToggle = document.querySelector(".open-slide1")
const lessonLinks = document.querySelectorAll(".lesson-link")
const modalProjectBtn = document.querySelector(".modal-btnpro")
const modalProjectOverlay = document.querySelector(".modal-pro-overlay")
const closeDiv = document.querySelector(".close-div")
const modalContainer = document.querySelector(".modal-container")
const main = document.querySelector(".main")
const openSlide = document.querySelector(".open-slide1")

const sidebar = document.querySelector(".sidebar")
const closeX = document.querySelector(".close-x span")

const date = document.getElementById("date")

const hoverlink = document.querySelectorAll(".ul-container ul li")
const hoverlinkA = document.querySelectorAll(".ul-container ul li a")
const topLink = document.querySelector(".top-link")



date.textContent = new Date().getFullYear()


const hoverDivs = document.querySelectorAll('.img-textabsolute')
const divContents = document.querySelectorAll('.absolute-div')

const dollarspan = document.querySelectorAll(".dollar span")
const supportTags = document.querySelectorAll(".support")
const headerContent = document.querySelectorAll(".header-content")


openSlide.addEventListener("click", function(){
    sidebar.classList.add("show-sidebar")
})

closeX.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar")
})

dollarspan.forEach(function(span){
    span.style.display = "none"
})
supportTags.forEach(function(tag){
    tag.innerHTML = `<img src="images/heart.svg" alt="">`
})
// navToggle.addEventListener("click", function(){
//     navbar.classList.toggle("show-containerlinks")
//     // let containerHeight = LinksContainer.getBoundingClientRect().height
//     // let linksHeight = links.getBoundingClientRect().height

//     // if(containerHeight === 0){
//     //     navbar.style.height = `${linksHeight}px`
//     // }
//     // else{
//     //     navbar.style.height = "0px"

//     // }
// })


window.addEventListener("scroll", function(){
    let scrollHeight = window.pageYOffset
    let navHeight = navbar.getBoundingClientRect().height

    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav")
    }
    else{
        navbar.classList.remove("fixed-nav")
    }
    if(scrollHeight > 900){
        topLink.classList.add("show-toplink")
    }
    else{
        topLink.classList.remove("show-toplink")
    }
})


scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        let specLink = e.currentTarget
        specLink.classList.add('active')
        scrollLinks.forEach(function(itemLink){
            if(itemLink !== specLink){
                itemLink.classList.remove("active")
            }
        })
    })
})

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault()
        let id = e.currentTarget.getAttribute("href").slice(1)
        let element  = document.getElementById(id)

        const navHeight = navbar.getBoundingClientRect().height
        let position = element.offsetTop - navHeight

        let fixedNav = navbar.classList.contains("fixed-nav")
        if(!fixedNav){
            position = position - navHeight
        }
        window.scrollTo({
            left:0,
            top:position
        })
    })
})

lessonLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault()
        let specLink = e.currentTarget
        let linkId = e.currentTarget.getAttribute("id")
        specLink.classList.add("active")
        if(linkId === "popular"){
            grids.forEach(function(grid){
                grid.classList.add("active")
            })
        }
        else{
            grids.forEach(function(grid){
                grid.classList.remove("active")
                let gridId = grid.classList.contains(linkId)
                if(gridId){
                    grid.classList.add("active")
                }
            })
        }
        lessonLinks.forEach(function(itemLink){
            if(itemLink !== specLink){
                itemLink.classList.remove("active")
            }
        })
    })
})




modalProjectBtn.addEventListener("click", function(){
    modalProjectOverlay.classList.add('show-overlay') 
})


hoverDivs.forEach(function(hoverDiv){
    hoverDiv.addEventListener("mouseover", function(e){
        let specDiv = e.currentTarget
        let content = specDiv.querySelector('.absolute-div')
        content.classList.add('show-div')
    })
    hoverDiv.addEventListener("mouseout", function(e){
        let specDiv = e.currentTarget
        let content = specDiv.querySelector('.absolute-div')
        let btn = content.querySelector(".view-project")
        btn.style.transition = "none"
        content.classList.remove('show-div')
    })
})
closeDiv.addEventListener("click", function(e){
    e.preventDefault()
    modalProjectOverlay.classList.remove('show-overlay')
})

