# On The Go! EV

## Overview

On The Go! Electric is a website that provides the end user with information around owning an electric vehicle, including: top vehicles for 2023, best practices/know before you go information, and EV charging locations. The site also includes a trip planning tool that allows a user to create a new trip with details and custom notes that can be referenced  during their trip.

### Main site nav & details:

1. **Home** - Welcome page with quick info & tips on the site
2. **Before You Go** - Overview of what the end user should consider when planning a trip in an EV. Best practices, etc.
3. **Trip Planner** - Create a new trip and include all of the relevant details, such as trip name, start point, end point, option to include multiple stops, total distance, number of stops to charge (based on vehicle miles per charge), custom notes
4. **EV Charging Location** - Map that allows for location to be entered to display nearby charging stations
5. **About** - Overview of the website
6. **Contact** - Information to connect with site admins, including general information submission form

### User Stories

**Content Display:**
As an end user, I would like the ability to review a general overview and tips/tricks for using an electric vehicle for short and long haul trips so that I have the information necessary to successfully navigate from point A to point B (and any points in between).

**Acceptance Criteria (AC):**
- Home: includes an overview of general info & considerations on EV ownership
- Best Practices: includes details list on the do’s & don’ts of owning an EV and using the vehicle for short and long trips
- About: includes general information on the site, intended use purposes, general EV stats.

**Trip Planning:**
As an end user of the site, I would like the ability to leverage a form to submit all of my trip details and have the form saved to the website for future reference and adjustments so that I can keep all of my details in one place.

**AC:**
- Trip planning page includes an option to:
  - Create a new trip
  - Edit an existing trip
  - Delete an existing trip
  - Select car make/model & view fuel consumption averages
- Create a new trip form includes the following fields:
  - Trip Name
  - Trip Owner (point of contact)
  - Number of travelers (adults, children, pets…)
  - Trip Start Date
  - Trip End Date (to confirm if should be included)
  - Car Make (API?)
  - Car Model (API?)
  - Distance per 100% charge (API?)
  - Start point
  - End point
  - Middle points (optional & dynamically added or removed from form)
  - Total distance
  - Number of stops to charge (based on vehicle miles per charge)
  - Custom notes
- Trips are listed on Trip Planning index page with newest entries at the bottom
  - (Stretch) - Entries are ordered by proximity to trip start date. Trips past end date are no longer visible on page.
 
**Location Search:**
As an end user of the site, I would like the ability to enter in my location (Zip code, city, etc) to view nearby EV charging stations so that I can quickly and easily see where I can charge my vehicle nearby.

**AC:**
- Charging locations page includes the option to enter in my location or allow my browser to auto detect my location
- Both map and detail list view are visible on the page for reference
- Additional details on the location are included, such as:
  - Charging types
  - Number of chargers

**Contact Submission:**
As an end user of the site, I would like the ability to submit a form to receive more information and/or contact the site admins so that I can ask for more information, flag site issues or reach out for any other reason.

**AC:**
- Contact page includes:
  - General site information
  - Contact form with the following fields:
    - First Name
    - Last Name
    - Email
    - I’m inquiring about… (drop down with top level contact themes)
    - Message
    - Submit button
- Contact form submission includes a confirmation note
- Contact form submission does not display on an index page but is added to MongoDB

## Stretch Features

## Wireframes


