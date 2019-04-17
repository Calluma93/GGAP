export const boolValuesWithDefault = (defaultLabel, trueLabel, falseLabel) => [
    { value: '', label: defaultLabel },
    { value: true, label: trueLabel },
    { value: false, label: falseLabel },
];
  
export const arrayOfValuesWithDefault = (defaultLabel, options) => [
    { value: '', label: defaultLabel },
    ...options.map(option => ({ value: option, label: option }))
];