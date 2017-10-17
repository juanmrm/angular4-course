import { ReversePipe } from './reverse.pipe';
describe('Pipe: Reverse', () => {

  it('should reverse the text', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});


