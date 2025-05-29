const findNiceStrings = require('./day5.js');

const list = `qjhvhtzxzqqjkmpb
aaa
xxyxx
ieodomkazucvgmuy
uurcxstgmygtbstg
abcdefg`

test("nice and naughty list", () => {
    expect(findNiceStrings("qjhvhtzxzqqjkmpb")).toBe(1);
    expect(findNiceStrings("xxyxx")).toBe(1);
    expect(findNiceStrings("uurcxstgmygtbstg")).toBe(0);
    expect(findNiceStrings("aaa")).toBe(0);
    expect(findNiceStrings("abcdefg")).toBe(0);
    expect(findNiceStrings(list)).toBe(2);
})