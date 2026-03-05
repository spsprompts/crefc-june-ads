# CREFC June Ads - Master Specifications & Design Psychology

## 1. The "Evergreen" Template Matrix (Social Media Ratios)

To future-proof your overarching project, you must build master compositions in these 4 standard ratios. Every component (headers, footers, sidebars) should be designed to snap into these parameters.

### Standard Ratios & Resolutions:

- **16:9 (Landscape View)** - 1920x1080
  - _Usage:_ YouTube, LinkedIn Video (Desktop), Website Headers, Broadcast-style drops.
- **9:16 (Vertical / Full Screen View)** - 1080x1920
  - _Usage:_ Instagram Reels, TikTok, YouTube Shorts, Facebook Stories, Snapchat.
  - _Safe Zones:_ Keep the top 250px and bottom 350px free of critical text (to avoid clipping behind platform UI elements like handles, descriptions, and share buttons).
- **1:1 (Square View)** - 1080x1080
  - _Usage:_ Instagram Grid, Facebook Feed, LinkedIn Feed.
- **4:5 (Portrait Feed View)** - 1080x1350
  - _Usage:_ Instagram & Facebook Feed (Takes up maximum vertical screen real estate without moving to Stories/Reels format. Highly recommended over 1:1 for engagement).

---

## 2. Advanced Workflow Tactics (PSD to AE)

Since you are exporting PNGs from PSDs to reconstruct in motion:

1.  **Component Modularity:** Slicing is great, but ensure you export pieces with **Alpha Channels** tailored to their anchor points. If you have a sidebar that animates in from the left, its anchor should be pre-planned.
2.  **Master Properties & Essential Graphics:** In After Effects, build out your "Evergreen" master templates. Expose the colors, text fields, and image replacement layers to the Essential Graphics panel.
3.  **MOGRT Generation:** Export these master compositions as `.mogrt` (Motion Graphics Templates). This allows you (or an editor) to quickly drop them into Premiere Pro, swap the text, change a hex code, and hit render without ever opening AE again.

---

## 3. Psychological & Behavioral Nudging for CTAs

To maximize conversions for the CREFC customer, leverage these cognitive biases and UX principles in your motion design:

### A. The Von Restorff (Isolation) Effect

- **Concept:** People remember things that stand out from their environment.
- **Application:** If your CREFC templates use a corporate blue and white palette, the CTA button or end-card geometry must use an entirely isolated, vibrant complementary color (like a striking amber or energized teal) that appears _nowhere else_ in the video.

### B. Deictic Gaze & Implicit Directional Cues

- **Concept:** Human eyes follow where other human eyes are looking, or where lines converge.
- **Application:** If you use photography of a speaker or attendee, frame them so they are looking _toward_ the CTA. If using abstract motion graphics, use kinetic typography and flowing background lines that subtlety "point" toward the button or URL.

### C. The Zeigarnik Effect (Open Loops)

- **Concept:** The brain remembers uncompleted or interrupted tasks better than completed ones. It craves closure.
- **Application:** Design your motion to feel intentionally _almost_ complete. Use progress bars that load to 90%, or text that poses a critical industry question but requires clicking the link for the answer. Create a visual "itch" the user has to scratch.

### D. Cognitive Ease

- **Concept:** Things that are easier to process are perceived as more trustworthy.
- **Application:** Keep CTA copy mercilessly short. Under 3 words. "Register Now." "View Agenda." Avoid "Click here to see the new June Agenda." Use easing (bezier curves) in your animations—linear motion feels cheap and creates cognitive friction; fluid motion feels expensive and trustworthy.

### E. Hick’s Law

- **Concept:** The time it takes to make a decision increases with the number and complexity of choices.
- **Application:** Only one CTA per video. Never put "Visit our website AND follow us on Twitter." Pick the single most important action (e.g., Register) and design the entire visual hierarchy around that singular goal.
