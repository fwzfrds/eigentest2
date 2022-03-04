const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const output = (INPUT, QUERY) => {

    const OUTPUT = [];

    QUERY.forEach(query => {

        let count = 0;

        INPUT.forEach(input => {
            if (query === input) {
                count++;
            }
        })

        OUTPUT.push(count);

    });
    return OUTPUT;
};

console.log(output(INPUT, QUERY));



