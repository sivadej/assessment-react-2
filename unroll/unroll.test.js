const unroll = require('./unroll');

describe('test unroll() function', function () {

  test('is a function', function () {
    expect(typeof unroll).toEqual('function');
  });

  test('unrolls strings and numbers', function() {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);

    const smallerSquare = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ];
    expect(unroll(smallerSquare)).toEqual(['a', 'b', 'c', 'f', 'i', 'h', 'g', 'd', 'e']);
  });
  
  test('unrolls 1x1', function() {
    const oneEl = [
      ['x']
    ];
    expect(unroll(oneEl)).toEqual(['x']);
  })

});
