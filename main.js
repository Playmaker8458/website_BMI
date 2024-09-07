function myfunction() {
    var Bodyweight = Number(document.getElementById("body_weight").value);
    var Height = Number(document.getElementById("height").value) / 100;
    var Bmi = Bodyweight / (Height ** 2);
    
    if (Bmi >= 0 && Bmi < 18.50) {
        var criteria = "น้ำหนักน้อย / ผอม";
        var Disease_risk = "มากกว่าคนปกติ";
    } else if (Bmi >= 18.50 && Bmi < 23) {
        var criteria = "ปกติ (สุขภาพดี)";
        var Disease_risk = "เท่าคนปกติ";
    } else if (Bmi >= 23 && Bmi < 25) {
        var criteria = "ท้วม / โรคอ้วนระดับ 1";
        var Disease_risk = "อันตรายระดับที่ 1";
    } else if (Bmi >= 25 && Bmi < 30) {
        var criteria = "อ้วน / โรคอ้วนระดับ 2";
        var Disease_risk = "อันตรายระดับที่ 2";
    } else if (Bmi >= 30) {
        var criteria = "อ้วน / โรคอ้วนระดับ 3";
        var Disease_risk = "อันตรายระดับที่ 3";
    } else {
        var criteria = "ผอม/ โรคผอมแห้งระดับสุดยอด";
        var Disease_risk = "ผอมแห้งระดับอันตราย";
    }

    var text1 = "BMI : " + Bmi.toFixed(2);
    var text2 = "อยู่ในเกณท์: " + criteria;
    var text3 = "ภาวะเสี่ยงต่อโรค: " + Disease_risk;

    document.getElementById("demo1").innerHTML = text1;
    document.getElementById("demo2").innerHTML = text2;
    document.getElementById("demo3").innerHTML = text3;
}
