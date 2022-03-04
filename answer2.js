const sentence = "Saya sangat senang mengerjakan soal algoritma";

const longestSentence = (sentence) => {
    const words = sentence.split(" ");
    let longestWord = words[0];

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    });
    return console.log(longestWord);

}

longestSentence(sentence);