// count the number of each chararcter in a string
const { performance } = require('perf_hooks')

function charCount(string){
  const result = {}
  for (let i=0;  i< string.length;i++){
    let str = string[i].toLowerCase()
    if (/[a-z0-9]/.test(str)){
      if (result[str] > 0){
        result[str] ++
      }
      else ( result[str] = 1)
    }
  }
  return result
}




function charCountUsingASCII(string){
  const result = {}
  for (let i=0;  i< string.length;i++
  ){
    let str = string[i].toLowerCase()
    if (str.charCodeAt()> 96 && str.charCodeAt() <123 || str.charCodeAt()> 47 && str.charCodeAt() <58){
      if (result[str] > 0){
        result[str] ++
      }
      else ( result[str] = 1)
    }
  }
  return result
}
let t0 = performance.now()
charCountUsingASCII("ah123jhsdhbsdg234vj23hg4324h93yr8ufsdif-0o]']']'3]1'3]'31']']'1]1'1]1]]]]]]]]]]]]]]]]]]]''''''''''''''''...................lpplplplplp1lp1lp1lplp3l2p3l2j'324p234[/p32'4l/3l'3[/44;.3'd/flp[rlf,dlmfkfnlksnfjldbfsdl.d][s=f-=-df;d[flld-fp'/sxf/d's[f.;'sdlpcfdsd/fcdsp[flds'cf[sdl1257AGFCDmza")
let t1 = performance.now()
let time = t1-t0
console.log("charCount by Using ASCII value: performance time = " + ( time ) + "MS" )

t0 = performance.now()
charCount("ah123jhsdhbsdg234vj23hg4324h93yr8ufsdif-0o]']']'3]1'3]'31']']'1]1'1]1]]]]]]]]]]]]]]]]]]]''''''''''''''''...................lpplplplplp1lp1lp1lplp3l2p3l2j'324p234[/p32'4l/3l'3[/44;.3'd/flp[rlf,dlmfkfnlksnfjldbfsdl.d][s=f-=-df;d[flld-fp'/sxf/d's[f.;'sdlpcfdsd/fcdsp[flds'cf[sdl1257AGFCDmza")
t1 = performance.now()
time = t1-t0
console.log("charCount without Using ASCII value: performance time = " + ( time ) + "MS" )
