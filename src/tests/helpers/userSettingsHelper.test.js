import { specifiedUserSettingsAreSet } from '../../helpers/userSettingsHelper';

describe('The results of specifiedUserSettingsAreSet helper function', () => {
    const subset = {
        a: ''
    },
    subset2 = {
        a: true
    },
    superset = {
        ...subset,
        b: ''
    };
    it('Returns true if all specified keys are settings are equal', () => {
        expect(
            specifiedUserSettingsAreSet(Object.keys(subset), subset)
        ).toEqual(
            true
        );
    });
    it('Returns true if the specified keys and settings are different but have same keys', () => {
        expect(
            specifiedUserSettingsAreSet(Object.keys(subset), subset2)
        ).toEqual(
            true
        );
    });
    it('Returns false if the settings don\'t have all the specified keys,', () => {
        expect(
            specifiedUserSettingsAreSet(Object.keys(superset), subset)
        ).toEqual(
            false
        );
    });
    it('Returns false if the settings supplied are empty and the specified keys are not,', () => {
        expect(
            specifiedUserSettingsAreSet(Object.keys(superset), {})
        ).toEqual(
            false
        );
    });
});