# My Pizza App

My Pizza App is a React Native application for ordering pizzas. The app features a list of pizzas, detailed views for each pizza, a cart system, and navigation between screens. The app also includes state management using Redux and persistent storage for the cart items using AsyncStorage.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running the App](#running-the-app)
- [Screens](#screens)
- [Navigation](#navigation)
- [State Management](#state-management)
- [Styling](#styling)
- [Dependencies](#dependencies)

## Features

- **Home Screen**: Displays a list of available pizzas fetched from a mock API.
- **Details Screen**: Shows detailed information about a selected pizza.
- **Cart Screen**: Displays the items added to the cart.
- **Persistent Storage**: Uses AsyncStorage to persist cart data across sessions.
- **Redux Integration**: Manages cart state using Redux.

## Project Structure

```
├── src/
│ ├── hooks/
│ │ └── usePersistentStorage.ts
│ ├── navigation/
│ │ ├── AppNavigator.tsx
│ │ └── types.ts
│ ├── screens/
│ │ ├── HomeScreen.tsx
│ │ ├── CartScreen.tsx
│ │ ├── DetailsScreen.tsx
│ ├── services/
│ │ └── pizzaService.ts
│ ├── store/
│ │ ├── cartSlice.ts
│ │ └── store.ts
│ └── styles/
│ └── styles.ts
├── index.tsx
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- `npm` or `yarn`
- Expo CLI (if using Expo)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/regmi-keshav/My-Pizza-App.git
   cd My-Pizza-App
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Install Expo CLI globally (if not already installed):
   ```sh
   npm install -g expo-cli
   ```

## Running the App

### For React Native CLI

1. Start Metro Bundler:
   ```sh
   npx react-native start --reset-cache
   ```
2. Run the app on your emulator or device:
   ```sh
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

### For Expo

1. Start Expo:
   ```sh
   npx expo start --reset-cache
   ```
2. Follow the instructions in the terminal to run the app on your emulator, device, or web.

## Screens

#### Home Screen

- Displays a list of pizzas fetched from a mock API.
- Each pizza item includes a "View Details" and "Add to Cart" button.

#### Details Screen

- Shows detailed information about a selected pizza.
- Accessible from both the Home Screen and Cart Screen.
- Includes a back button to return to the previous screen.

#### Cart Screen

- Displays the items added to the cart.
- Each item includes the pizza name and quantity.

## Navigation

- Uses React Navigation to navigate between Home, Details, and Cart screens.
- Two tabs: "`Home`" and "`Cart`".
- Stack navigation for detailed views.

## State Management

- Uses Redux to manage cart state.
- The `cartSlice.ts` file defines actions and reducers for adding, removing, and updating cart items.
- Persistent storage using AsyncStorage is managed by a custom hook (`usePersistentStorage.ts`).

## Styling

- Basic styling is applied using React Native's `StyleSheet`.
- Styles are defined in the `styles.ts` file.

## Dependencies

- React Native
- Redux
- Redux Toolkit
- React Navigation
- AsyncStorage
- Other dependencies as listed in `package.json`
