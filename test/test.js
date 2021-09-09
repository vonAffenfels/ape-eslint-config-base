const strTest = "";
const strTestTempl = `
    Hello ${strTest}!
`;

function test() {

}

// line comment
async function testAsync() {

}

/**
 * Comment
 */
class Test {
    constructor(test = "asd") {
        return null;
    }
}

const testConst = ({
    decon = 0, structed, props = "default"
}) => {

    if (decon) {
        // nothing
    } else {
        // cant be empty
    }

    decon++;

    return;
};

const testConstLong = ({
    decon, structed,
    props = "default", asdasdad = true, fddgfgfdgdgfdg = false, asdsadsd = "why am i so long tralalala"
}) => {

};

const testAsyncFuncConst = async () => {

};

const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
];

const obj = {
    [strTest]: {blubb: true},
    bla: "what"
};

const Component = ({test = true}) => {
    return (
        <div className="test" onClick={test}>
            {test || "fallback text"}
        </div>
    );
};
