import { heartBeat } from './heart-beat';

describe('heartBeat', () => {
  it('should work', () => {
    expect(heartBeat()).toEqual('heart-beat');
  });
});
