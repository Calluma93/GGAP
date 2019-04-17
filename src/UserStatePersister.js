export class UserStatePersister {

    constructor(initialUserState) {
        this.initialUserState = initialUserState;
        this.localStorageKey = "http://guitarguitar.co.uk:userState";
    }

    loadUserState() {
        try {
            let serializedState = localStorage.getItem(this.localStorageKey);

            if (serializedState === null) {
                return this.initialUserState;
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initialUserState;
        }
    }

    saveUserState(userState) {
        try {
            let serializedState = JSON.stringify(userState);
            localStorage.setItem(this.localStorageKey, serializedState);

        }
        catch (err) {
        }
    }
}