Act as a Senior Full-Stack Developer and UX Copywriter. We need to refactor our website codebase and update our copy based on a recent design and integrity review. Please execute the following updates across the project files:
1. Copy & Content Updates:
Donation Claim: Immediately search for and remove the line: "NativeWay donates 2% of revenue to local preservation funds."
Typography Consistency: Scan all typography strings for inconsistent dash signs (hyphens -, en-dashes –, em-dashes —). Unify them to a single standard or remove them entirely to maintain a clean, professional look.
About Us Rewrite (CRITICAL): Discard the current fabricated "born out of a bad experience" narrative. Rewrite the "About Us" section to be 100% authentic and transparent. The new narrative must highlight that NativeWay is built by an ambitious, 3-person entrepreneurial team driven by strong principles, integrity, and honesty. Emphasize that we are building a high-quality, premium travel ecosystem (balancing iconic landmarks with authentic local spots) based on our true values. Keep the tone premium, confident, and genuine.
2. UI/UX & Layout Updates (Button Placement):
Locate the "Get Early Access" button component.
Remove this button from the footer and the bottom of all secondary pages.
Ensure the "Get Early Access" button ONLY appears in two places: the main navigation bar (Navbar) and the primary Hero section of the Homepage.
3. Functional Update (Dynamic Waitlist Counter):
Replace the static waitlist number on the website with a dynamic state function.
Write a script (using our current frontend stack) that tracks the exact number of times the "Get Early Access" button is clicked.
If we have a backend/database endpoint for early access signups, write the logic to fetch and display the real signup count dynamically. If not, write the frontend logic to simulate this dynamically based on button clicks for now, ready to be hooked up to our database.
Please output the updated code blocks for the button logic, the dynamic counter script, and the newly written "About Us" copy.