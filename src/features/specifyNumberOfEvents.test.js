import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppComponent;

    test('When the user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('a user has not specified the number of events', () => {

        });

        when('the user views the events section', () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            expect(EventListDOM).toBeInTheDocument();
        });

        then(/^(\d+) events are shown by default$/, async (arg0) => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('When the user specifies the number of events.', ({ given, when, then }) => {
        given('a user has specified the number of events', async () => {
            const user = userEvent.setup();
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('spinbutton');
            await user.type(numberOfEventsInput, '{backspace}{backspace}10');
        });

        when('the user views the events section', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            expect(EventListDOM).toBeInTheDocument();
        });

        then('the app displays exactly as many events as the user specified', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
            expect(allRenderedEventItems.length).toEqual(10);
        });
    });
});