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

switch (test) {
    case 1:
        break;
    default:
        break;
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
    return;
};

const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
];

let a,
    b,
    d,
    f;

const obj = {
    [strTest]: {blubb: true},
    blubb: true,
    what: true,
    bla: "what"
};

const {
    blubb, what, bla
} = obj;

const Component = ({
    test = true, test2 = true, test3 = false, test4 = "what"
}) => {
    return (
        <div className="test" onClick={test}>
            {test || "fallback text"}
        </div>
    );
};
