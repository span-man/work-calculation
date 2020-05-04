let nowTimeStamp = new Date('2020-05-02 08:15:00') - new Date('2020-05-02 00:00:00')


console.log(
    nowTimeStamp / 3600 / 1000
)
let nowTime = new Date().getho
let nowDate = nowTime.getFullYear() + '-' + String(nowTime.getMonth() + 1).padStart(2, '0') + '-' + String(nowTime.getDate()).padStart(2, '0')
console.log(nowDate)