import { getActivePath } from '../../helpers/sideNavHelper';

describe('getActivePath', () => {

    it('Returns an empty active path if the page has no items', () => {
        const activePath = getActivePath({
            parent: null,
            sideNavItems: []
        });

        expect(
            activePath.length
        ).toEqual(
            0
        );
    });

    it('Returns an array containing only p where p is a page with an active item, that has no sub page', () => {
        const page = {
            parent: null,
            sideNavItems: [
                {
                    text: "Item",
                    active: true,
                    subSideNavPage: null
                }
            ]
        },
        activePath = getActivePath(page);

        expect(
            activePath.length
        ).toEqual(
            1
        );
        expect(
            activePath[0]
        ).toEqual(
            page
        );
    });

    it('Returns an array containing the sub page and parent page when provided with a page which has a subpage', () => {
        const subPage = {
            parent: {
                text: "Parent",
                to: "/"
            },
            sideNavItems: [
                {
                    text: "Item",
                    active: true,
                    subSideNavPage: null
                }
            ]
        },
        page = {
            parent: null,
            sideNavItems: [
                {
                    text: "Item",
                    active: true,
                    subSideNavPage: subPage
                }
            ]
        },
        activePath = getActivePath(page);

        expect(
            activePath.length
        ).toEqual(
            2
        );
        expect(
            activePath[0]
        ).toEqual(
            page
        );
        expect(
            activePath[1]
        ).toEqual(
            subPage
        );
    });
});