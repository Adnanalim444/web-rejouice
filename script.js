


function cursorEffect(){


    var page1content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")
page1content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1content.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
        scale:1,
        scale:1
    })
})

page1content.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
}

cursorEffect()

function page2Animation(){
    gsap.form(".elem h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 47%",
            end:"top 46%",
            markers:true,
            scrub:2
        }
    })
}

page2Animation()