// 1. 인사말 메시지
// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성
function greetUser(username) {
    return "안녕하세요! " + username + "님. 좋은 하루되세요!";
}

console.log(greetUser("남도현"));
console.log(typeof greetUser("남도현"));

// 2. 원가 계산
// 판매가를 입력 받아 원가를 계산하는 함수를 작성
let calculateOriginalPrice = function (priceWithTax) {
    return priceWithTax / 1.033;
};

console.log(parseInt(calculateOriginalPrice(10000)) + "원");
console.log(typeof calculateOriginalPrice(10000));

// 3. 주류 판매 가능 여부
// 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성
const registrationCard = {
    name: "남도현",
    age: 26,
    gender: "남성",
};

let canSellAlcohol = (registrationCard) => {
    return Boolean(registrationCard.age >= 19);
};

console.log(canSellAlcohol(registrationCard));
console.log(typeof canSellAlcohol(registrationCard));

// 4. 할인가 계산
// 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성
function getDiscountedPrice(originalPrice, discountPercent) {
    finalCost = originalPrice - (originalPrice * discountPercent) / 100;
    return finalCost;
}

console.log(getDiscountedPrice(18700, 20) + "원");
console.log(typeof getDiscountedPrice(18700, 20));

// 5. 등급 판단
// 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성
function myGrade(myScore) {
    // 결과를 받아줄 객체 생성
    const gradeChart = {
        score: null,
        grade: null,
        description: null,
    };

    // 조건문으로 출력할 결과 구분, 객체에 삽입
    if (myScore > 100) {
        gradeChart.grade = "F";
        gradeChart.description = "거짓말은 나쁜짓";
    } else if (myScore <= 100 && myScore >= 90) {
        gradeChart.grade = "A";
        gradeChart.description = "매우 우수";
    } else if (myScore >= 80) {
        gradeChart.grade = "B";
        gradeChart.description = "우수";
    } else if (myScore >= 70) {
        gradeChart.grade = "C";
        gradeChart.description = "보통";
    } else if (myScore >= 60) {
        gradeChart.grade = "D";
        gradeChart.description = "미달. 통과 기준 근접";
    } else {
        gradeChart.grade = "F";
        gradeChart.description = "낙제";
    }

    // 입력한 점수 객체에 삽입
    gradeChart.score = myScore;

    return gradeChart;
}

console.log(myGrade(87));
console.log(typeof myGrade(87));
