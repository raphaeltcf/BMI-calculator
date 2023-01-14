const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputheight = e.target.querySelector('#height');
    
    const weight = Number(inputWeight.value);
    const height = Number(inputheight.value);

    if (!weight){
        setResult('weight invalid', false)
        return;
    }

    if (!height){
        setResult('height  invalid', false)
        return;
    }

    const mbi = getMbi(weight, height);
    const levelMbi = getLevel(mbi);
    
    const msg = `Your MBI is ${mbi} (${levelMbi}).`;
    
    setResult(msg, true);
});

function getLevel (mbi) {
    const level = ['Under weight', 'Normal weight', 'Overweight', 'Grade 1 obesity', 'Grade 2 obesity', 'Grade 3 obesity'];
    if (mbi >= 39.9) return level[5];
    if (mbi >= 34.9) return level[4];
    if (mbi >= 29.9) return level[3];
    if (mbi >= 24.9) return level[2];
    if (mbi >= 18.9) return level[1];
    if (mbi < 18.9) return level[0];
}

function getMbi (weight, height) {
    const mbi = weight / height ** 2;
    return mbi.toFixed(2);
}

function createP () {
    const p = document.createElement('p');
    return p;
}

function setResult (msg, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = createP();
        p.innerHTML = msg;
        result.appendChild(p);

    if (isValid) { p.classList.add('p-result');
    
    } else {
        p.classList.add('bad');
    }
}