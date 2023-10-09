import { StrToJsonPipe } from './str-to-json.pipe';

describe('StrToJsonPipe', () => {
  it('create an instance', () => {
    const pipe = new StrToJsonPipe();
    expect(pipe).toBeTruthy();
  });
});
