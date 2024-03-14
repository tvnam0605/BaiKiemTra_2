function divide(){
    const numbA = document.getElementById("numb-a").value;
    const numbB = document.getElementById("numb-b").value;
    const result = document.getElementById("ketqua")
    result.innerHTML = (numbB/numbA)*-1;

}

function bai2() {
    const name = document.getElementById("bai2-ten").value;
    const phone = document.getElementById("bai2-sdt").value;
    const email = document.getElementById("bai2-email").value;
    const option = document.getElementById("bai2-option");
    const optionText = option.options[option.selectedIndex].text;
    const mathe = document.getElementById("bai2-mathe").value;   
    const invoiceid = document.getElementById("bai2-invoiceid").value;
    const textarea = document.getElementById("input-description").value;

    window.alert(
        "Họ và tên: " + name + "\n" +
        "Mã thẻ: " + mathe + "\n" +
        "Số điện thoại: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Loại KH: " + optionText + "\n" +
        "Nội dung góp ý: " + textarea
    );
}


function bai3(){
    const hoten = document.getElementById("bai3-ten").value;
    const email = document.getElementById("bai3-email").value;
    const title = document.getElementById("bai3-title").value;
    const textarea = document.getElementById("bai3-input-description").value;

    const confirmBox = confirm(
        "Họ và tên: " + hoten + "\n" +
        "Email: " + email + "\n" +
        "Tiêu đề: " + title + "\n" +
        "Nội dung góp ý: " + textarea
    );

    if (confirmBox) {
        document.getElementById("bai3-ten").value = "";
        document.getElementById("bai3-email").value = "";
        document.getElementById("bai3-title").value = "";
        document.getElementById("bai3-input-description").value = "";
    }
}

function bai4() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Vui lòng nhập đúng cân nặng và chiều cao.");
        return;
    }
    
    const bmi = weight / (height * height);
    

    document.getElementById("bai4-number").innerText = "Chỉ số BMI của bạn là: " + bmi.toFixed(2);
    

    let category;
    if (bmi < 18.5) {
        category = "Gầy";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Bình thường";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Thừa cân";
    } else if (bmi >= 30 && bmi < 34.9) {
        category = "Béo phì độ I";
    } else if (bmi >= 35 && bmi < 39.9) {
        category = "Béo phì độ II";
    } else {
        category = "Béo phì độ III";
    }
    document.getElementById("categories").innerText = "Phân loại: " + category;
    
    let message;
    if (age === 0) {
        message = "Khám định kỳ";
    } else if (age === 1) {
        message = "Tập thể dục thường xuyên";
    } else {
        if (bmi >= 30 && bmi < 34.9) {
            message = "Béo phì độ I - Thay đổi lối sống và chế độ ăn uống";
        } else if (bmi >= 35 && bmi < 39.9) {
            message = "Béo phì độ II - Tham khảo ý kiến bác sĩ";
        } else {
            message = "Béo phì độ III - Tham khảo ý kiến bác sĩ và thực hiện phương pháp giảm cân";
        }
    }
    document.getElementById("message").innerText = "Khuyến nghị: " + message;
}


function bai5() {
    const passWord = document.getElementById("bai5-password");
    const confirmShowPassword = confirm("Bạn có muốn hiển thị mật khẩu không?");
    if (confirmShowPassword) {
        passWord.type = 'text';
    }
}

