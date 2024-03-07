
document.getElementById('triangle-area-btn').addEventListener('click',function (){
    
    let base = document.getElementById('triangle-base').value;
    base = parseFloat(base);
    let height = document.getElementById('triangle-height').value;
    height = parseFloat(height);
    

    if(!base || !height ){
        return
    } else if( base <= 0 || height <= 0){
        alert('Invalid input')
    } else{
    document.getElementById('triangle-area').innerText = .5 * base * height;
    }
    
    document.getElementById('triangle-height').value = '';
    document.getElementById('triangle-base').value = '';
    return
});
