const opening=document.getElementById('opening'),copy=document.getElementById('copy'),env=document.getElementById('env'),next=document.getElementById('next');
let done=false;
function effects(){
 for(let i=0;i<38;i++){
  let b=document.createElement('i');b.className='bokeh go';b.style.setProperty('--x',35+Math.random()*35+'%');b.style.setProperty('--y',45+Math.random()*12+'%');b.style.setProperty('--s',5+Math.random()*30+'px');b.style.setProperty('--blur',1+Math.random()*5+'px');b.style.setProperty('--dx',(-180+Math.random()*360)+'px');b.style.setProperty('--dy',(-150+Math.random()*360)+'px');b.style.setProperty('--d',(1.1+Math.random()*1.5)+'s');document.querySelector('.stage').appendChild(b);setTimeout(()=>b.remove(),3000);
 }
 for(let i=0;i<14;i++){
  let p=document.createElement('i');p.className='pet go';p.style.setProperty('--x',(35+Math.random()*30)+'%');p.style.setProperty('--dx',(-220+Math.random()*440)+'px');p.style.setProperty('--dy',(-80+Math.random()*420)+'px');p.style.setProperty('--d',(1.1+Math.random()*1.4)+'s');document.querySelector('.stage').appendChild(p);setTimeout(()=>p.remove(),3000);
 }
}
function start(){
 if(done)return;done=true;effects();copy.classList.add('hide');opening.classList.add('hide');
 setTimeout(()=>{env.classList.add('show');setTimeout(()=>{env.classList.add('open');next.classList.add('show')},900)},500);
}
opening.addEventListener('click',start);copy.addEventListener('click',start);document.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')start()});
next.onclick=()=>{env.classList.remove('open');setTimeout(()=>{location.hash='invitation';},600)};