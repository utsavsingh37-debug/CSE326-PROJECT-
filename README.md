# StudySpot — Smart Campus Study Space Finder

A professional, responsive front-end project for CSE326. StudySpot helps students choose a suitable campus study environment based on the type of work they need to do and the facilities they prefer.

## The problem

Students can waste valuable time searching for a suitable place to study. A quiet revision session, a group assignment and a laptop-based task all need different environments. StudySpot organises sample study spaces by purpose and facilities so students can make a more informed choice.

## Pages

- **Home** (`index.html`) — project introduction, problem statement and how it works.
- **Explore spaces** (`spaces.html`) — sample campus directory with CSS-only category filters.
- **Focus guide** (`guide.html`) — task-to-space suggestions and a simple study routine.
- **About** (`about.html`) — objectives, technologies, scope and future improvements.
- **Styles** (`styles.css`) — shared responsive design system.

## Technologies

- HTML5 for semantic structure and accessible content.
- CSS3 for layout, responsive design, visual styling, hover states and radio-button filters.
- No JavaScript, frameworks, database or backend.

## Run locally

1. Download or clone this repository.
2. Keep all five files in the same folder.
3. Open `index.html` in a modern web browser.
4. Use the navigation links to explore the pages.

No build tools or installation are required. An internet connection is only needed if you want the optional Google Fonts to load; the site uses fallback fonts otherwise.

## CSS-only filter

The Explore Spaces page uses HTML radio inputs and CSS sibling selectors to show cards tagged with the selected category. This is a lightweight demonstration of front-end interaction without JavaScript.

## Important scope note

This is a front-end prototype. The listed campus spaces and facility descriptions are illustrative sample data and must be replaced with verified information for a real campus deployment. HTML and CSS alone cannot save form submissions, manage user accounts, fetch live occupancy or update listings dynamically.

## Future scope

- Connect a database and admin dashboard for verified space information.
- Add real-time occupancy and opening-hour updates.
- Add a campus map and accessible-route information.
- Allow students to submit corrections and save favourite spaces.

## Academic project

**Course:** CSE326  
**Project:** StudySpot — Smart Campus Study Space Finder  
**Implementation:** HTML5 + CSS3
