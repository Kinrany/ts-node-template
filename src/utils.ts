import { Decoder } from 'io-ts';
import { isLeft } from 'fp-ts/lib/Either';
import reporter from 'io-ts-reporters';

export const decodeOrThrow = <I, A>(decoder: Decoder<I, A>, value: I, onError = () => {}): A => {
    const result = decoder.decode(value);
    if (isLeft(result)) {
        onError();
        throw new Error(reporter.report(result).join('\n'));
    }
    return result.right;
};
