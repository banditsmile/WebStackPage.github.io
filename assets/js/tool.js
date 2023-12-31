    const menuItem={
    href:"",
    i_class:"",
    title:"",
    pages:[
    // {url:"https://dribbble.com/",original_title:"https://dribbble.com/",img:"../assets/images/logos/dribbble.png",comment:"全球UI设计师作品分享平台。",name:"Dribbble"}
    ],
    sub_menu:[

    ]
}
    const pageItem={url:"https://dribbble.com/",original_title:"https://dribbble.com/",img:"../assets/images/logos/dribbble.png",comment:"全球UI设计师作品分享平台。",name:"Dribbble"}
    const NavData = [
    {
        href:"#常用推荐",
        i_class:"linecons-star",
        title:"常用推荐",
        pages:[
    {url:"https://dribbble.com/",original_title:"https://dribbble.com/",img:"../assets/images/logos/dribbble.png",comment:"全球UI设计师作品分享平台。",name:"Dribbble"}
        ],
        sub_menu:[

        ]
    }
    ]
    // console.log("[")
    let nav = []
    let tempMenu = {}
    let tempPage = {}
    let subMenu = {}
    $("ul#main-menu>li>a").each(function () {
    // tempMenu = Object.assign({},menuItem)
    tempMenu = JSON.parse(JSON.stringify(menuItem))
    // console.log(tempMenu)
    // console.log(menuItem)
    // console.log("{href:\"",$(this).attr("href"), "\",i_class:\"",$(this).find("i").attr("class"),"\",title:\"", $(this).find("span").text(),"\",pages:[],sub_menu:[")
    var page_row;
    if ($(this).attr("href")) {
    tempMenu.href = $(this).attr("href")
    page_row = $(tempMenu.href).parent().next()
    page_row.find('div.col-sm-3').each(function(){
    tempPage=JSON.parse(JSON.stringify(pageItem))
    var $pageDiv = $(this).find('div[data-original-title]').first()
    var onClick = $pageDiv.attr('onclick')
    tempPage.url = $pageDiv.data('original-title')
    tempPage.original_title = $pageDiv.data('original-title')
    tempPage.toggle  = $pageDiv.data('toggle')
    tempPage.placement  = $pageDiv.data('placement')
    tempPage.img = $pageDiv.find('div.xe-comment-entry>a>img[data-src]').data('src')
    tempPage.name = $pageDiv.find('div.xe-comment-entry>div.xe-comment>a').text().trim()
    // tempPage.name= $.trim(tempPage.name)
    tempPage.comment = $pageDiv.find('div.xe-comment-entry>div.xe-comment>p').text().trim()
    // tempPage.comment.$.trim(tempPage.comment)

    tempMenu.pages.push(tempPage)
})

}
    tempMenu.i_class= $(this).find("i").attr("class")
    tempMenu.title=$(this).find("span").text()

    if($(this).parent().find("ul")){
    $(this).parent().find("ul>li>a").each(function(){
    // subMenu = Object.assign({},menuItem)
    subMenu = JSON.parse(JSON.stringify(menuItem))
    // console.log("{href:\"",$(this).attr("href"), "\",i_class:\"",$(this).find("i").attr("class"),"\",title:\"", $(this).find("span").text(),"\",pages:[],sub_menu:[]},")
    if ($(this).attr("href")){
    subMenu.href=$(this).attr("href")
    page_row = $(subMenu.href).parent().next()
    page_row.find('div.col-sm-3').each(function(){
    tempPage=JSON.parse(JSON.stringify(pageItem))
    var $pageDiv = $(this).find('div[data-original-title]').first()
    var onClick = $pageDiv.attr('onclick')
    tempPage.url = $pageDiv.data('original-title')
    tempPage.original_title = $pageDiv.data('original-title')
    tempPage.toggle  = $pageDiv.data('toggle')
    tempPage.placement  = $pageDiv.data('placement')
    tempPage.img = $pageDiv.find('div.xe-comment-entry>a>img[data-src]').data('src')
    tempPage.name = $pageDiv.find('div.xe-comment-entry>div.xe-comment>a').text().trim()
    // tempPage.name= $.trim(tempPage.name)
    tempPage.comment = $pageDiv.find('div.xe-comment-entry>div.xe-comment>p').text().trim()
    // tempPage.comment.$.trim(tempPage.comment)

    subMenu.pages.push(tempPage)
})
}
    subMenu.i_class= $(this).find("i").attr("class")
    subMenu.title=$(this).find("span").text()
    tempMenu.sub_menu.push(subMenu)
})
}
    nav.push(tempMenu)
    // console.log("]},")
})
    // console.log("]")
    console.log(JSON.stringify(nav))
