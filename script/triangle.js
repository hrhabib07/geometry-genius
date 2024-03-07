document.getElementById('triangle-area-btn').addEventListener('click',function (){
    
    let base = document.getElementById('triangle-base').value;
    base = parseFloat(base);
    let height = document.getElementById('triangle-height').value;
    height = parseFloat(height);
    const doesExist = document.getElementById('converted-m2-triangle');
    const childElementID = document.getElementById('tri-exist-checker');
    

    if(!base || !height ){
        return
    } else if( base <= 0 || height <= 0){
        alert('Invalid input')
    } else{
    if(doesExist){
        document.getElementById('area-calculation-container').removeChild(childElementID);     
    const areaCalc = document.createElement('div');
    areaCalc.setAttribute("id", "tri-exist-checker")
    areaCalc.innerHTML = ` <div id="">
    <span>Triangle </span> Area : <span class="text-xl font-medium"> <span id="converted-m2-triangle">
      <span id="calculation-triangle-area">00</span> <span>cm<sup>2</sup></span>
    <button class="ml-2 btn btn-accent p-1" id="convert-m2-tri">Convert to <span>m<sup>2</sup></span></button>
    </span> </span>
  </div>`;
  const areaCalcContainer = document.getElementById('area-calculation-container').appendChild(areaCalc);
    document.getElementById('calculation-triangle-area').innerText = .5 * base * height;    
    } else{
        
    const areaCalc = document.createElement('div');
    areaCalc.setAttribute("id", "tri-exist-checker")
    areaCalc.innerHTML = ` <div id="">
    <span>Triangle </span> Area : <span class="text-xl font-medium"> <span id="converted-m2-triangle">
      <span id="calculation-triangle-area">00</span> <span>cm<sup>2</sup></span>
    <button class="ml-2 btn btn-accent p-1" id="convert-m2-tri">Convert to <span>m<sup>2</sup></span></button>
    </span> </span>
  </div>`;
  const areaCalcContainer = document.getElementById('area-calculation-container').appendChild(areaCalc);
    document.getElementById('calculation-triangle-area').innerText = .5 * base * height;
    }
    }
    document.getElementById('triangle-height').value = '';
    document.getElementById('triangle-base').value = '';


    
document.getElementById('convert-m2-tri').addEventListener('click',function (){    
    let cm2 = document.getElementById('calculation-triangle-area').innerText;
    base = parseFloat(cm2);
    let m2 = cm2 / 100;
    
    document.getElementById('converted-m2-triangle').innerHTML = `<span id="calculation-triangle-area">${m2}</span> <span>m<sup>2</sup></span></span>`;    
});

    return
});
