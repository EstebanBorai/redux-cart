import ReduxCartError from '../src/ReduxCartError';

describe.only('Redux Cart Error', () => {
  it('should return an error matching the snapshot', () => {
    expect(new ReduxCartError('Test Error')).toThrowErrorMatchingSnapshot();
  });
});
