@AGENTS.md
Module 1
Task 1 - install sanity.io and nodemailer packages, 
Task 2 - header navs should be: About, Our Expertise, Our People, Contact. Create respective page folder for them.
Task 3: footer navs should be of 3 grid cols:
1: logo at the top, Short description at the bottom
2: Here we have 2 grid col: 
i: heading: "Our Expectise" - listed below Category of Services
ii: heading: "Sitemaps":Website Navigations displayed. Also add a career nav too which is only visible in the footer nav..
3: heading: "Get notified about new programs & cohort openings". Subscription form with yup validation and subscription service created and implmented for mail delivery.

Module 2
create schemas for lawyers and practice area folowing the structure below:
Category of practice: Name of practice area, excerpts and Multi  tags options.


module 3
create a lawyer schema for 
lawyer: full Name, slug, position, and multi practice area selection which can be gotten from practices.


Module 4
covert all inline styles to respective tailwind css classes across all pages.

Module 5
Integrate font schema across all pages with font-size, line-height and letter-spacing variables implemeted across pages. Body fonts is DM Sans while Heading fonts is Cormorant Garamond.

Module 6
Create sanity schema for expertise which covers category(Individual, Business), cover image, excerpts/short description and block content

Module 7
- create an expertise route and service 
- implement response data on the expertise
- pagination functioality is also required with page limit set as 16
- implement the filter functionality
- integrate the single expertise page.
- the cover image on the left, the rest on the right.
- the cover image is sticky, as the content scrolls up/down
- another section showing related expertise limit to 4.

Module 8
- lawyer sanity schema praticee area should be renamed to Expertise
- the multi select should be reefeerenced to expertise schema creaated
- create an expertise route and service 
- implement response data on the our people page
- pagination functioality is also required with page limit set as 16.

Module 9
- create a form folder in the component folder.
- make the subscription form at the right end of the footer a form component
- validate with yup and react hooks form, and integrate the subscribe route.


Module 10;
- Create global office schema covering the following values: category (Headquarters, Regional), continent, city, country and full address on the contact us page
- create a service and route for the global offices on the contact us page
- implement the response data.
- Also create the Faqs schema;question and answer.
- create a service and route for faqs componenet on the contact us page
- implement the response data on faqs componenet on the contact us page


Module 11
- Free consultation should be a button:
- when clicked, triggers a request for call modal
- information are full name, last name, mobile number, time to call, preferred time zone.
- yup validation with react hooks form, also api route and service which include email delivery service.


Module 12
- fonts needed to be implemented across the project
- heading :Playfair Display
- body:  DM Sans
- update the global styles with the style below
- root {
  /* Families */
  --font-heading:  'Playfair Display', Georgia, serif;
  --font-body:     'DM Sans', system-ui, sans-serif;

  /* Sizes */
  --fs-display:    48px;
  --fs-h1:         36px;
  --fs-h2:         28px;
  --fs-h3:         22px;
  --fs-lead:       18px;
  --fs-body:       16px;
  --fs-small:      14px;
  --fs-label:      12px;

  /* Line heights */
  --lh-display:    1.1;
  --lh-heading:    1.2;
  --lh-subhead:    1.3;
  --lh-lead:       1.65;
  --lh-body:       1.7;
  --lh-ui:         1.5;

  /* Letter spacing */
  --tracking-tight:   -0.02em;
  --tracking-snug:    -0.015em;
  --tracking-normal:   0em;
  --tracking-wide:     0.02em;
  --tracking-wider:    0.05em;
  --tracking-widest:   0.07em;
}
- update the whole project text styles

module 13
- create legal process schema.
- parameters are: title, description, image
- Also integrate it on the legal process section on the homepage.
- Also implement it on the about us page too.
- Both pages have same cards but different styling. so maintain each pages styles and structure.