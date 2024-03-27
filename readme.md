# Meet App

Welcome to the Meet App! This application is designed to help users discover and manage events easily. Whether you're looking for upcoming events in your city or exploring events across different locations, Meet App has got you covered.


## Features

### 1. Filter Events By City

- **Scenario 1: Show Upcoming Events from All Cities**
  - Given the user hasn't searched for a city
  - When they view upcoming events
  - Then they should see events from all cities

- **Scenario 2: List of Suggestions for City Search**
  - Given the user is on the Meet App
  - When they search for a city
  - Then they should see a list of suggestions

- **Scenario 3: Select City from Suggested List**
  - Given the user has searched for a city
  - When they select a city from the suggested list
  - Then they should see events specific to the selected city


### 2. Show/Hide Event Details

- **Scenario 1: Collapsed by Default**
  - Given the user is viewing a list of events
  - When they initially load the page
  - Then event details should be collapsed by default

- **Scenario 2: Expand Event Details**
  - Given the user is viewing a list of events
  - When they choose to expand event details
  - Then they should see additional information about the event

- **Scenario 3: Collapse Event Details**
  - Given the user has expanded event details
  - When they choose to collapse event details
  - Then they should see a condensed view of the event list


### 3. Specify Number of Events

- **Scenario 1: Default Display**
  - Given the user hasn't specified the number of events
  - When they view the events
  - Then they should see 32 events displayed by default

- **Scenario 2: Customize Display**
  - Given the user has specified a custom number of events
  - When they view the events
  - Then they should see the specified number of events


### 4. Use the App When Offline

- **Scenario 1: Show Cached Data**
  - Given the user has previously used the app and has data cached
  - When they launch the app without an internet connection
  - Then they should see the cached data

- **Scenario 2: Error on Search Setting Changes**
  - Given the user is offline
  - When they attempt to change search settings (city, number of events)
  - Then they should see an error message indicating the changes can't be applied without an internet connection


### 5. Add an App Shortcut to the Home Screen

- **Scenario 1: Install Shortcut**
  - Given the user is on their device home screen
  - When they choose to install the Meet App as a shortcut
  - Then they should see the Meet App shortcut added to their home screen


### 6. Display Charts Visualizing Event Details

- **Scenario 1: City-wise Event Chart**
  - Given the user is viewing a chart with upcoming events in each city
  - When they analyze the chart
  - Then they should be able to easily identify cities with a high concentration of events


## Getting Started

To get started with the Meet App, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/HeliaTutueanu/meet
```

2. Install dependencies.

```bash
cd meet
npm install
```

3. Run the app.

```bash
npm start
```

4. Open your web browser and navigate to `http://localhost:3000` to use the Meet App.