
let y = 0;

let LienIfram = [`<iframe class="vedio" width="700" height="315" src="https://www.youtube.com/embed/4_T9nlGzBp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe class="vedio" width="700" height="315" src="https://www.youtube.com/embed/VHrsPl3X080" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe class="vedio" width="700" height="315" src="https://www.youtube.com/embed/EoTxGvng-RE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe class="vedio" width="700" height="315" src="https://www.youtube.com/embed/Tq79Aoxvc5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe class="vedio" width="700" height="315" src="https://www.youtube.com/embed/qkHmDw8gL1I?si=pkvfxE0ofTBf1IG2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe class="vedio" width="700" height="315" src="https://www.youtube.com/embed/T-vJiAtWH7E?si=T_zxTTpMQc-cIYjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe class="vedio" width="700" height="315" src="https://www.youtube.com/embed/q3MXzWWF3cw?si=_Wjq6g0L2l3xo24E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
]

let affichage = document.getElementsByClassName("afff")[0];
let elementButton = document.getElementById("rand");
elementButton.addEventListener("click",function () {
  affichage.innerHTML = LienIfram[y];

  y++;

  if(y>=LienIfram.length){

    y=0;

  }
  console.log(y);
})

