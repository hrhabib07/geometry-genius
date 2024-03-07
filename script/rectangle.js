document.getElementById('rectangle-area-calc-btn').addEventListener('click',function (){
    
    let width = document.getElementById('rectangle-width').value;
    width = parseFloat(width);
    let length = document.getElementById('rectangle-length').value;
    length = parseFloat(length);
    const doesExist = document.getElementById('m2-conversion');
    const childElementID = document.getElementById('rec-exist-checker');
    if(!width || !length ){
        return
    } else if( width <= 0 || length <= 0){
        alert('Invalid input')
    } else{
        if(doesExist){
            document.getElementById('area-calculation-container').removeChild(childElementID);
            
    const areaCalc = document.createElement('div');
    areaCalc.setAttribute('id', "rec-exist-checker")
    areaCalc.innerHTML = ` <div id="">
    <span>Rectangle </span> Area : <span class="text-xl font-medium"> <span id="m2-conversion">
      <span id="calculation-rectangle-area">00</span> <span>cm<sup>2</sup></span>
    <button class="ml-2 btn btn-accent p-1" id="convert-m2-rectangle">Convert to <span>m<sup>2</sup></span></button>
    </span> </span>
  </div>`;
  document.getElementById('area-calculation-container').appendChild(areaCalc);
    document.getElementById('calculation-rectangle-area').innerText =  width * length;

        } else{

            const areaCalc = document.createElement('div');
            areaCalc.setAttribute('id', "rec-exist-checker")
            areaCalc.innerHTML = ` <div id="">
            <span>Rectangle </span> Area : <span class="text-xl font-medium"> <span id="m2-conversion">
              <span id="calculation-rectangle-area">00</span> <span>cm<sup>2</sup></span>
            <button class="ml-2 btn btn-accent p-1" id="convert-m2-rectangle">Convert to <span>m<sup>2</sup></span></button>
            </span> </span>
          </div>`;
          document.getElementById('area-calculation-container').appendChild(areaCalc);
            document.getElementById('calculation-rectangle-area').innerText =  width * length;
        }
    }
    document.getElementById('rectangle-width').value = '';
    document.getElementById('rectangle-length').value = '';


    
document.getElementById('convert-m2-rectangle').addEventListener('click',function (){

    
    let cm2 = document.getElementById('calculation-rectangle-area').innerText;
    width = parseFloat(cm2);
    let m2 = cm2 / 100;
    
    document.getElementById('m2-conversion').innerHTML = `<span id="calculation-rectangle-area">${m2}</span> <span>m<sup>2</sup></span></span>`;
    
});

    return
});
