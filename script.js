const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
console.log(loadText);

let load = 0

let int = setInterval(blurring, 30)
// 計時器:每 30 毫秒執行一次 blurring

function blurring(){
    load++
    // 每次執行都會 +1
    if(load > 99){
        // 如果大於 99
        clearInterval(int)
        // 停止計時
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // 改變載入的數字透明度，需透過 scale 轉換數字範圍，因 opacity 只能有 0 或 1，但 load 的數字是從 0 ~ 100

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// map a range of numbers to anther range of numbers
// 轉換數字範圍