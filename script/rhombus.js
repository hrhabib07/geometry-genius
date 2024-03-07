document.getElementById('rhombus-area-calc-btn').addEventListener('click',function (){
    
    let rhombusD1 = document.getElementById('rhombus-d1').value;
    rhombusD1 = parseFloat(rhombusD1);
    let rhombusD2 = document.getElementById('rhombus-d2').value;
    rhombusD2 = parseFloat(rhombusD2);
    const doesExist = document.getElementById('m2-conversion-rhombus');
    const childElementID = document.getElementById('rhombus-exist-checker');
    if( !rhombusD1 || !rhombusD2 ){
        return
    }  else if( rhombusD1 <= 0 || rhombusD2 <= 0){
        alert('Invalid input')
    } else{
        if (doesExist){
            document.getElementById('area-calculation-container').removeChild(childElementID);
            const areaCalc = document.createElement('div');
            areaCalc.setAttribute('id', 'rhombus-exist-checker')
            areaCalc.innerHTML = ` <div>
            <span>Parallelogram </span> Area : <span class="text-xl font-medium"> <span id="m2-conversion-rhombus">
              <span id="calculation-rhombus-area">00</span> <span>cm<sup>2</sup></span>
            <button class="ml-2 btn btn-accent p-1" id="convert-m2-rhombus">Convert to <span>m<sup>2</sup></span></button>
            </span> </span>
          </div>`;
          document.getElementById('area-calculation-container').appendChild(areaCalc);
            document.getElementById('calculation-rhombus-area').innerText =  rhombusD1 * rhombusD2;
        } else{
            const areaCalc = document.createElement('div');
            areaCalc.setAttribute('id', 'rhombus-exist-checker')
            areaCalc.innerHTML = ` <div>
            <span>Rhombus </span> Area : <span class="text-xl font-medium"> <span id="m2-conversion-rhombus">
              <span id="calculation-rhombus-area">00</span> <span>cm<sup>2</sup></span>
            <button class="ml-2 btn btn-accent p-1" id="convert-m2-rhombus">Convert to <span>m<sup>2</sup></span></button>
            </span> </span>
          </div>`;
          document.getElementById('area-calculation-container').appendChild(areaCalc);
            document.getElementById('calculation-rhombus-area').innerText = .5 * rhombusD1 * rhombusD2;
        }
   
    }
    document.getElementById('rhombus-d1').value = '';
    document.getElementById('rhombus-d2').value = '';


    
document.getElementById('convert-m2-rhombus').addEventListener('click',function (){

    
    let cm2 = document.getElementById('calculation-rhombus-area').innerText;
    rhombusD1 = parseFloat(cm2);
    let m2 = cm2 / 100;
    
    document.getElementById('m2-conversion-rhombus').innerHTML = `<span id="calculation-rhombus-area">${m2}</span> <span>m<sup>2</sup></span></span>`;
    
});

    return
});
