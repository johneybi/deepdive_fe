
const winners = ['Lee', 'Park', 'Kim', 'Choi'];

function printWinner(name) {
    const index = winners.indexOf(name);
    if (index > -1) {
        console.log(`우승자 ${name}은(는) ${index + 1}번째 회원입니다.`);
    } else {
        console.log(`${name}은(는) 우승자 명단에 없습니다.`);
    }
}

printWinner('Kim');
printWinner('Song')



const tags = ["#JS", "#CSS", "#HTML"]
function printTag(separator) {
    const result = tags.join(separator);
    console.log(result);
}

printTag(","); // "#JS,#CSS,#HTML"


const stock = ["banana", "orange", "apple", "mango"]
function printstock(item) {
    const haveItem = stock.includes(item)
    if (haveItem) {
        console.log(`${item}은(는) 재고에 있습니다.`)
    } else {
        console.log(`${item}은(는) 재고에 없습니다.`)

    }
}

printstock("apple")

printstock("grape")



const hashTags = "figma,illustrator,photoshop"

function printFormattedTags(str, separator) {
    const formatted = str
        .split(separator) // 인자로 받은 separator를 사용
        .map(tag => `#${tag.trim()}`) // trim()으로 양쪽 공백 제거
        

    console.log(formatted);
}

printFormattedTags(hashTags, ",");
