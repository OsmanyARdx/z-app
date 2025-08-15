import { useState } from 'react';
import { Alert } from 'react-native';

export interface MaintenanceLog {
    description: string;
    miles: string;
    date: string;
}

interface LogFunctions {
    logEntries: MaintenanceLog[];
    addLogEntry: (entry: { description: string; miles: string; date: string }) => void;
}

const initialLogData = `1. Tune up / Sparkplug & Coils 10/12/2021
2. Z1 Motorsports Clutch Master Cylinder 12/10/2021
3. Tein Z CoilOvers 02/27/2022
4. Coolant temp sensor(gauge) 04/28/2023
5. Coolant temp connector pigtail(gauge) 04/28/2023
6. Injectors & Injector Seals Upgrade to 300cc 04/05/2023
7. Upper plemun gasket 04/05/2023
8. Aftermarket Oil catch can 06/09/2023
9. Windshield Wipers 05/25/2024
10.  OEM Intake Valve cover gaskets 08/10/2024
11.  Aftermarket Intake Valve Bolts and Timimg Cover (Dress up kit) 08/10/2024
12.  OEM Upper plenum gasket 08/10/2024
13.  OEM sparkplug tube oring 08/10/2024
14.  OEM injector to intake orings 08/10/2024
15.  OEM balance tube orings 08/10/2024
16.  400psi Fuel lines refresh 08/10/2024
17.  OEM Fuel Filter 08/10/2024
18. 120k Timing Service full CZP Kit @114980miles 08/29/2024
19. Rear engine coolant 3 outlet plugs 09/16/2024
20. Oil change @116090mi 10/15/2024
21. AAC valve clean. Gasket and z1 hose upgrade @117042mi 11/17/2024
22. Plenum EGR block off plate gaskets @117042mi 11/17/2024
23. Sparkplugs @117042mi 11/27/2024
24. New 4 Tires (Toyo Tires EXTENSA HPII All-Season Radial Tire - 225/50R16 92V) @117,560mi 03/23/2025
25. Oil change @118250mi 04/20/2025`;

export const parseMaintenanceLog = (logText: string): MaintenanceLog => {
    // Regular expression to find the date at the end of the string (MM/DD/YYYY)
    const dateRegex = /(\d{2}\/\d{2}\/\d{4})$/;
    const dateMatch = logText.match(dateRegex);
    const date = dateMatch ? dateMatch[1] : 'N/A';

    // Regex to find a number followed by 'miles', 'mi', or just a number after '@'
    const milesRegex = /@([\d,]+)\s*(?:mi|miles)?/;
    const milesMatch = logText.match(milesRegex);
    const miles = milesMatch ? milesMatch[1].replace(/,/g, '') : 'N/A';

    // The description is everything else after removing the date and miles.
    let description = logText.replace(dateRegex, '').replace(milesRegex, '').trim();
    // Also remove the leading number and period (e.g., "1. ")
    description = description.replace(/^\d+\.\s*/, '').trim();

    return {
        description,
        miles,
        date,
    };
};

export const useMaintenanceLogs = (): LogFunctions => {
    const parsedInitialData = initialLogData
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(parseMaintenanceLog);

    const [logEntries, setLogEntries] = useState<MaintenanceLog[]>(parsedInitialData);

    const addLogEntry = (entry: { description: string; miles: string; date: string }) => {
        if (!entry.description.trim() || !entry.date.trim()) {
            Alert.alert("Input required", "Please enter a description and a date.");
            return;
        }

        const newEntry: MaintenanceLog = {
            description: entry.description,
            miles: entry.miles || 'N/A',
            date: entry.date
        };

        setLogEntries(prevEntries => [...prevEntries, newEntry]);
    };

    return { logEntries, addLogEntry };
};