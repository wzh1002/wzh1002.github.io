import { uuid, pluralize, classNames } from './index';
import NAME_SPACE from '../constants/namespace';

describe('Test utils', () => {
    it('Test uuid function', () => {
        const reg = /^\w{4}(\w{4}-){4}\w{12}$/;

        reg.test(uuid()).should.be.equal(true);
        (uuid() !== uuid()).should.be.equal(true);
    });

    it('Test pluralize function', () => {
        const word = 'item';
        let count = 6;
        pluralize(count, word).should.be.equal(`${word}s`);
        count = 0;
        pluralize(count, word).should.be.equal(`${word}s`);
        count = 1;
        pluralize(count, word).should.be.equal(word);
    });

    it('Test classNames function', () => {
        classNames('class1').should.be.equal('class1');
        classNames('class1', {
            class2: false,
            class3: true
        }).should.be.equal('class1 class3');
        classNames(['class1', 'class2'], ['class3']).should.be.equal('class1 class2 class3');
        classNames({
            class1: false,
            class2: true
        }, {
            class3: true,
            class4: false
        }).should.be.equal('class2 class3');
    });
});