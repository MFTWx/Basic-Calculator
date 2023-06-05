// deklarasi
const display =  document.querySelector(`.display`); // bakal mencari class pertama display di html 
const key = document.querySelectorAll(`input`); // bakal mencari semua input di html
const operator = [`+`, `-`, `*`, `/`, `=`, `%`]; //membuat array
let result = ''; // inisialisasi kosong

// function perhitungan
const calculate = (value) => { //anonymous function
    if (value === 'C') result = ''; //reset result
    else if (value === 'DE') result = result.toString().slice(0, -1); //buat delete 1 kata
    else if ((value === '0' && result === '') || (value === '00' && result === '') || (operator.includes(value) && result === '')) return; //operator includes ngecek value yang ada di array kalau ada berarti true
    // else if (value === '=' && result != '') result = eval(result.toString()); //fungsi eval, dari string lalu result.tostring (<- buat ngecek string) bakal ngecek apakah ada operator/operasi, kalau ada maka akan di hitung, output number
    else if (value === '=' && result != '') result = eval(result.replace('%', '/100')); //replace, % ga masuk eval jadi harus bikin konversinya dulu
    else result += value; //menambahkan value ke result
    
    display.value = result; //output
};

// looping pencet2
// untuk setiap input, coba lakukan sebuah hal
key.forEach( //looping
    (button) => button.addEventListener(`click`, (e) => calculate(e.target.dataset.value))
);