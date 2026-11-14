# StudySpot — Smart Campus Study Space Finder

StudySpot is a responsive front-end concept for CSE326. It helps students compare sample campus study spaces by study style and facilities.

## Pages
- **Home** (`index.html`) — introduces the problem and project.
- **Explore spaces** (`spaces.html`) — searchable directory with category filters.
- **Focus guide** (`guide.html`) — practical study-space and session suggestions.
- **About** (`about.html`) — objectives, implementation and project scope.

## Design
The interface uses a classic navy, warm cream, sage and muted-gold palette. Shared colours and common layout rules are kept in `styles.css` to make the design easier to maintain.

## Technologies
- HTML5 for page structure and accessible content.
- CSS3 for layout, responsive styling and visual design.
- Basic vanilla JavaScript in `script.js` for directory search, category filters and result counts.
- No frameworks, libraries, build tools or backend.

## Run locally
1. Download or clone the repository.
2. Keep all project files in the same folder.
3. Open `index.html` in a modern browser.
4. Use the navigation to explore the pages.

No installation is required. The project uses system fonts, so it does not need an external font service.

## Directory behaviour
On the Explore Spaces page, students can:
- Search by a space name, facility or description.
- Filter by quiet zones, group study, charging points or outdoor spaces.
- Combine a search term with a category filter.
- See the number of matching spaces and a message when no results match.

The JavaScript is kept in one small file and uses basic DOM selection, events, loops and conditions. It checks that the search field exists before running, so the script can be included safely on other pages later.

## Project scope
All locations and facility details are illustrative sample data, not verified campus listings. This is a front-end demonstration; it does not provide live occupancy, real maps, accounts or saved submissions. Those features would need verified data and a backend.

## Future improvements
- Add verified campus locations and opening hours.
- Connect a database and admin dashboard.
- Add real-time occupancy and accessible-route information.
- Allow students to submit corrections and save favourites.

**Course:** CSE326  
**Project:** StudySpot — Smart Campus Study Space Finder  
**Stack:** HTML5, CSS3 and basic vanilla JavaScript
