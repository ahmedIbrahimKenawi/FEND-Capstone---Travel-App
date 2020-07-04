import {
    coordinates,
    weatherbit,
    pixabay,
    countryInfo
} from '../client/js/sendReqests.js'


describe('Test, the function "coordinates()" should exist' , () => {
    test('It should return true', () => {
        expect(coordinates).toBeDefined();
    });
});
describe('Test, the function "coordinates()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof coordinates).toBe("function");
    });
});


describe('Test, the function "weatherbit()" should exist' , () => {
    test('It should return true', () => {
        expect(weatherbit).toBeDefined();
    });
});
describe('Test, the function "weatherbit()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof weatherbit).toBe("function");
    });
});


describe('Test, the function "pixabay()" should exist' , () => {
    test('It should return true', () => {
        expect(pixabay).toBeDefined();
    });
});
describe('Test, the function "pixabay()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof pixabay).toBe("function");
    });
});


describe('Test, the function "countryInfo()" should exist' , () => {
    test('It should return true', () => {
        expect(countryInfo).toBeDefined();
    });
});
describe('Test, the function "countryInfo()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof countryInfo).toBe("function");
    });
});