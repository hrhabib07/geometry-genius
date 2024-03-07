document.getElementById('para-area-calc-btn').addEventListener('click',function (){
    
    let paraBase = document.getElementById('para-base').value;
    paraBase = parseFloat(paraBase);
    let paraHeight = document.getElementById('para-height').value;
    paraHeight = parseFloat(paraHeight);
    if(!paraBase || !paraHeight ){
        return
    } else if( paraBase <= 0 || paraHeight <= 0){
        alert('Invalid input')
    } else{
    const areaCalc = document.createElement('div');
    areaCalc.innerHTML = ` <div id="">
    <span>Parallelogram </span> Area : <span class="text-xl font-medium"> <span id="m2-conversion-para">
      <span id="calculation-para-area">00</span> <span>cm<sup>2</sup></span>
    <button class="ml-2 btn btn-accent p-1" id="convert-m2-para">Convert to <span>m<sup>2</sup></span></button>
    </span> </span>
  </div>`;
  document.getElementById('area-calculation-container').appendChild(areaCalc);
    document.getElementById('calculation-para-area').innerText =  paraBase * paraHeight;
    }
    document.getElementById('para-base').value = '';
    document.getElementById('para-height').value = '';


    
document.getElementById('convert-m2-para').addEventListener('click',function (){

    
    let cm2 = document.getElementById('calculation-para-area').innerText;
    paraBase = parseFloat(cm2);
    let m2 = cm2 / 100;
    
    document.getElementById('m2-conversion-para').innerHTML = `<span id="calculation-para-area">${m2}</span> <span>m<sup>2</sup></span></span>`;
    
});

    return
});
