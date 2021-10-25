import {whattest} from "blubb";
const {
    foo,
    bar,
    lol,
} = require("foo");

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
    decon = 0,
    structed,
    props = "default",
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
    decon,
    structed,
    asdasd = "default",
    asdasdad = true,
    fddgfgfdgdgfdg = false,
    asdsadsd = "whyamisolongtralalala",
}) => {

};

const testAsyncFuncConst = async (a, b) => {
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
    bla: "what",
    blubb2: true,
    what2: true,
    bla2: "what",
};

const {
    blubb,
    what,
    bla,
} = obj;

const {
    blubb2,
    what2,
} = obj;

const {bla2} = obj;

const Component = ({
    test = true,
    test2 = true,
    test3 = false,
    test4 = "what",
}) => {
    return (
        <div className="test" onClick={test}>
            {test || "fallback text"}
        </div>
    );
};

Component.find = () => {

};


const findTest = Component.find({
    i: {am: {a: {stupid: "query"}}},
    im: {
        a: "bit",
        better: {i: "think"},
    },
});
