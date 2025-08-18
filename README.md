# Welcome to the Z-APP

## Why

- **Problem Statement:**
  - Everything built for Z’s are old. The available apps/software for connecting to the ECUs in the cars are old and dated, missing functionalities and should be FREE at this point.
- **Solution**:
  - To create a modern solution for diagnostics, logging, community, and more. All open-source and should hopefully get some help coming in.
    Target Audience: Nissan Z owners, more specifically: 300zx owners (maybe ODB2 vehicles too).
- **Unique Selling Proposition (USP):**
  - Every software for these cars is paid. Stop paying for software from the 90s. It should be free at this point, and this will bring value to the car community as well as interest in keeping old cars alive, by simplifying old tech with today’s standards.

## Features

Feature 1: Connect to ECU for data reading

Feature 2: Maintance Logs - Keep your car's documentation up to date

Feature 3: TBA

## Build

### Technology Stack

- **Frontend:**
  - **React Native:** Current framework.
  - **Expo:** (`expo`) For development, build, and deployment.
  - **Expo Router:** (`expo-router`) For file-system based routing.
  - **React:** (`react`) Core library.
  - **TypeScript:** (`typescript`) For type safety and better developer experience.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run start
   ```

3. To view app in a iphone/android device: download the "expo go" app from the store and scan the QR code from the terminal when you run the start.

## TODOs ✅🏁:

1. Build the "Function Center" UI - This will contain:

   ```bash
   - A selection of tools for debugging a car (Common functions -> "Trouble scanning", "Error logs", "Live sensor monitor", "Battery Check")
   - A selection of resources for learning more about the car (owner manuals, diagnosing pdfs, youtube tutorials).
   - Trip management (to track driven miles, locations, time, and miles per galon)
   ```

2. Build the "Home Screen" UI - This will contain:

   ```bash
   - Welcome message at the top of the screen
   - A graphical representation of the car (3D if possible, spins)
   - A connect to car function button (this will connect the phone app to the car via a wired/bluetooth connection to the OBD port)
   - Common data (mpg, and a 3 common used tools from the function center)
   ```

3. Build the "Maintenance Logs" Screen UI - This will contain:

   ```bash
   - Custom image display at the top of the screen (this is where user can set an image of their car)
   - A list of the maintenance logs done to this car. This should contain (Maintenance description, Mile mark, and date ) Will be pulled from a .txt file or maybe a mongodb, and will be constantly updated by user.
   - A add log entry with all the fields mentioned above. ( This will add a new entry to be documented )
   ```
