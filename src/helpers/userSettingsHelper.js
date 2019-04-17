// Return a new object with every key in userSettingKeys:
// If the key is set in the userSettings, use this value, otherwise use the default value
export function getUserSettingsWithDefault(userSettingKeys, userSettings, defaultUserSettings) {
    let newUserSettings = {};
    userSettingKeys.forEach((key) => {
        newUserSettings[key] = userSettings.hasOwnProperty(key) ?
            userSettings[key] :
            defaultUserSettings[key]
    });
    return newUserSettings;
}

// Returns whether the userSettings are equal on the specified keys
export function specifiedUserSettingsAreEqual(specifiedUserSettingKeys, userSettings1, userSettings2) {
    return specifiedUserSettingKeys.every(
        settingKey => 
            userSettings1[settingKey] === userSettings2[settingKey]
    );
}

// Returns an object with only the keys in specifiedUserSettingKeys from unsanitisedUserSettings
export function getSanitisedUserSettings(specifiedUserSettingKeys, unsanitisedUserSettings) {
    const sanitisedUserSettings = {};
    specifiedUserSettingKeys.forEach((settingKey) => {
        sanitisedUserSettings[settingKey] = unsanitisedUserSettings[settingKey]
    });
    return sanitisedUserSettings;
}

export function specifiedUserSettingsAreSet(specifiedUserSettingKeys, userSettings) {
    return specifiedUserSettingKeys.every(
        settingsKey => 
            userSettings.hasOwnProperty(settingsKey)
    );
}