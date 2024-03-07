document.getElementById('pentagon-area-calc-btn').addEventListener('click',function (){
    
    let pentagonP = document.getElementById('pentagon-p').value;
    pentagonP = parseFloat(pentagonP);
    let pentagonB = document.getElementById('pentagon-b').value;
    pentagonB = parseFloat(pentagonB);
    const doesExist = document.getElementById('m2-conversion-pentagon');
    const childElementID = document.getElementById('pentagon-exist-checker');
    if( !pentagonP || !pentagonB ){
        return
    }  else if( pentagonP <= 0 || pentagonB <= 0){
        alert('Invalid input')
    } else{
        if (doesExist){
            document.getElementById('area-calculation-container').removeChild(childElementID);
            const areaCalc = document.createElement('div');
            areaCalc.setAttribute('id', 'pentagon-exist-checker')
            areaCalc.innerHTML = ` <div>
            <span>Parallelogram </span> Area : <span class="text-xl font-medium"> <span id="m2-conversion-pentagon">
              <span id="calculation-pentagon-area">00</span> <span>cm<sup>2</sup></span>
            <button class="ml-2 btn btn-accent p-1" id="convert-m2-pentagon">Convert to <span>m<sup>2</sup></span></button>
            </span> </span>
          </div>`;
          document.getElementById('area-calculation-container').appendChild(areaCalc);
            document.getElementById('calculation-pentagon-area').innerText =  .5 * pentagonP * pentagonB;
        } else{
            const areaCalc = document.createElement('div');
            areaCalc.setAttribute('id', 'pentagon-exist-checker')
            areaCalc.innerHTML = ` <div>
            <span>pentagon </span> Area : <span class="text-xl font-medium"> <span id="m2-conversion-pentagon">
              <span id="calculation-pentagon-area">00</span> <span>cm<sup>2</sup></span>
            <button class="ml-2 btn btn-accent p-1" id="convert-m2-pentagon">Convert to <span>m<sup>2</sup></span></button>
            </span> </span>
          </div>`;
          document.getElementById('area-calculation-container').appendChild(areaCalc);
            document.getElementById('calculation-pentagon-area').innerText = .5 * pentagonP * pentagonB;
        }
   
    }
    document.getElementById('pentagon-p').value = '';
    document.getElementById('pentagon-b').value = '';


    
document.getElementById('convert-m2-pentagon').addEventListener('click',function (){

    
    let cm2 = document.getElementById('calculation-pentagon-area').innerText;
    pentagonP = parseFloat(cm2);
    let m2 = cm2 / 100;
    
    document.getElementById('m2-conversion-pentagon').innerHTML = `<span id="calculation-pentagon-area">${m2}</span> <span>m<sup>2</sup></span></span>`;
    
});

    return
});
