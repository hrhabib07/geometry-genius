document.getElementById('ellipse-area-calc-btn').addEventListener('click',function (){
    
    let ellipseA = document.getElementById('ellipse-a').value;
    ellipseA = parseFloat(ellipseA);
    let ellipseB = document.getElementById('ellipse-b').value;
    ellipseB = parseFloat(ellipseB);
    const doesExist = document.getElementById('m2-conversion-ellipse');
    const childElementID = document.getElementById('ellipse-exist-checker');
    if( !ellipseA || !ellipseB ){
        return
    }  else if( ellipseA <= 0 || ellipseB <= 0){
        alert('Invalid input')
    } else{
        if (doesExist){
            document.getElementById('area-calculation-container').removeChild(childElementID);
            const areaCalc = document.createElement('div');
            areaCalc.setAttribute('id', 'ellipse-exist-checker')
            areaCalc.innerHTML = ` <div>
            <span>Parallelogram </span> Area : <span class="text-xl font-medium"> <span id="m2-conversion-ellipse">
              <span id="calculation-ellipse-area">00</span> <span>cm<sup>2</sup></span>
            <button class="ml-2 btn btn-accent p-1" id="convert-m2-ellipse">Convert to <span>m<sup>2</sup></span></button>
            </span> </span>
          </div>`;
          document.getElementById('area-calculation-container').appendChild(areaCalc);
            document.getElementById('calculation-ellipse-area').innerText =  3.1415 * ellipseA * ellipseB;
        } else{
            const areaCalc = document.createElement('div');
            areaCalc.setAttribute('id', 'ellipse-exist-checker')
            areaCalc.innerHTML = ` <div>
            <span>ellipse </span> Area : <span class="text-xl font-medium"> <span id="m2-conversion-ellipse">
              <span id="calculation-ellipse-area">00</span> <span>cm<sup>2</sup></span>
            <button class="ml-2 btn btn-accent p-1" id="convert-m2-ellipse">Convert to <span>m<sup>2</sup></span></button>
            </span> </span>
          </div>`;
          document.getElementById('area-calculation-container').appendChild(areaCalc);
            document.getElementById('calculation-ellipse-area').innerText = 3.1415 * ellipseA * ellipseB;
        }
   
    }
    document.getElementById('ellipse-a').value = '';
    document.getElementById('ellipse-b').value = '';


    
document.getElementById('convert-m2-ellipse').addEventListener('click',function (){

    
    let cm2 = document.getElementById('calculation-ellipse-area').innerText;
    ellipseA = parseFloat(cm2);
    let m2 = cm2 / 100;
    
    document.getElementById('m2-conversion-ellipse').innerHTML = `<span id="calculation-ellipse-area">${m2}</span> <span>m<sup>2</sup></span></span>`;
    
});

    return
});
