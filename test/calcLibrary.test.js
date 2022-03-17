//Use normal functions. It is suggested in documentation

'use strict';

const expect = require('chai').expect;

const {sum,subtract,divide} = require('../calcLibrary');

describe('Test if functions are defined', function(){
    it('sum is a function', function(){
        expect(sum).to.be.a('function');
    });
    it('subtract is a function', function(){
        expect(subtract).to.be.a('function');
    });
});

describe('Testing sum(1+1)=2', function(){
    it('sum(1,1)=2',function(){
        expect(sum(1,1)).to.equal(2);
    })
});

describe('Test sum with integers',function(){
    //as opposed to jest, the testValues is an array of objects
    const testValues = [
        {a:1,   b:1,    result:2    },
        {a:2,   b:3,    result:5    },
        {a:-2,  b:-3,   result:-5   },
        {a:0,   b:0,    result:0    }
    ];

    testValues.forEach( testValue => {
        it(`sum(${testValue.a},${testValue.b})=${testValue.result}`,function(){
            expect(sum(testValue.a,testValue.b)).to.equal(testValue.result);
        });
    });

});

describe('Test sum with floats', function(){
    const testValues = [
        {a:10,      b:11.5,    result:21.5  },
        {a:-1.5,    b:-3.5,    result:-5    },
        {a:2.4,     b:-2.5,    result:-0.1  },
    ];

    testValues.forEach( testValue => {
        it(`sum(${testValue.a},${testValue.b})=${testValue.result}`,function(){
            expect(sum(testValue.a,testValue.b)).to.be.closeTo(testValue.result,0.01);
        });
    });

});

describe('Missing parameter', function(){
    const testValues = [
        {a:1    ,expected:'parameter missing'   },
        {a:'a'    ,expected:'parameter missing'   }
    ];

    testValues.forEach( testValue => {
        it(`sum(${testValue.a}) throws an exception '${testValue.expected}'`,function(){
            expect(function(){
                sum(testValue.a)
            }).to.throw(testValue.expected);
        });
    });

});

describe('Testing only numbers allowed', function(){
    it("sum(1,'a') throws an exception 'only numbers allowed'",function(){
        expect(function(){
            sum(1,'a')
        }).to.throw('only numbers allowed');
    });
});