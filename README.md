# GENERATIVE AI MISUSE

> **Think critically. Create responsibly.**

An educational, retro-inspired website exploring how the misuse of Generative AI affects the creative field.

The project presents Generative AI not as something that must simply be accepted or rejected, but as a powerful tool that should be used with **critical thinking, responsibility, transparency, and respect for human creativity**.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Rationale](#rationale)
- [Mission Statement](#mission-statement)
- [Vision](#vision)
- [Objectives](#objectives)
- [Key Topics](#key-topics)
- [Website Structure](#website-structure)
- [Main Features](#main-features)
- [Software and Technologies](#software-and-technologies)
- [Design System](#design-system)
- [JavaScript Functionality](#javascript-functionality)
- [External Articles](#external-articles)
- [Educational Purpose](#educational-purpose)
- [Future Improvements](#future-improvements)
- [Credits](#credits)

---

## Project Overview

**Generative AI Misuse** is a static educational website focused on the effects of improperly or irresponsibly used Generative AI, particularly within creative work.

The website discusses how AI can improve the speed of creative production while also raising concerns involving:

- originality and creative identity;
- misinformation and fabricated media;
- deepfakes;
- privacy;
- overdependence on AI;
- the impact of generated content on artists and other creative professionals.

The project uses a **retro pixel-art visual language** to make the topic approachable while maintaining a strong editorial and educational identity.

---

## Rationale

Generative AI has become part of many creative workflows. It can produce text, images, concepts, designs, audio, and other forms of content very quickly.

Its usefulness, however, also creates an important question:

> **When does using AI as a tool become misusing AI as a replacement for human creativity and responsibility?**

The rationale behind this website is to create a simple educational space where visitors can examine that question.

Instead of treating AI as purely good or purely harmful, the project presents a balanced perspective:

**AI can be useful, but the way it is used matters.**

The website therefore encourages users to think about the consequences of generated content before creating, publishing, or sharing it.

---

## Mission Statement

Our mission is to **promote responsible, critical, and transparent use of Generative AI** by helping people understand its effects on creativity, information, privacy, and human work.

We aim to encourage users to:

- question what they see and read;
- recognize possible signs of AI-generated content;
- value original human creativity;
- understand the risks of careless AI use;
- use AI as an assistive tool rather than blindly depending on it.

---

## Vision

To create a digital space where people can understand Generative AI without fear or hype, and where technology is used to **support human creativity rather than erase it**.

---

## Objectives

1. Explain common uses of Generative AI in creative work.
2. Present the positive and negative effects of AI-assisted creation.
3. Raise awareness about AI misuse and its possible consequences.
4. Encourage critical evaluation of AI-generated content.
5. Promote responsible and transparent AI use.
6. Provide accessible educational content through a simple interactive website.

---

## Key Topics

### 1. Usage of Generative AI

The website introduces Generative AI as a technology capable of creating different forms of content, including written material, images, artwork, concepts, designs, and other creative outputs.

It also examines what happens when AI is used as a shortcut without considering originality, attribution, or responsibility.

### 2. Impact on the Creative Field

The project highlights three major areas:

#### Speed

AI can dramatically reduce the time needed to create drafts, concepts, images, and written material.

#### Originality

Repeated use of generated patterns can make creative work feel generic, derivative, or disconnected from a creator's individual voice.

#### Livelihood

Overreliance on generated content may affect opportunities for artists, writers, designers, musicians, and other creative professionals.

Each topic can link to an **external online article** for deeper reading.

### 3. Dangers of AI

The website discusses several risks:

- **Misinformation** — generated content can be used to create convincing but inaccurate material.
- **Deepfakes** — generated media can imitate people or events.
- **Privacy** — sensitive information may be exposed when personal or confidential data is entered into AI systems.
- **Overdependence** — excessive reliance on AI may reduce opportunities to practice independent thinking, research, and creative skills.

### 4. Detection of AI-Generated Work

The website encourages visitors to look for multiple unusual patterns rather than relying on one clue.

Examples include:

- unnatural hands or fingers;
- inconsistent details;
- impossible anatomy;
- strange text or objects;
- unusual reflections or lighting;
- overly smooth or dreamlike visual qualities.

These are **warning signs, not absolute proof** that content was generated by AI.

---

## Website Structure

### Home

Introduces the topic with the main message:

> **GENERATIVE AI MISUSE**

and the supporting message:

> **How the misuse of Generative AI affects the creative field**

The hero section includes a video background, translucent overlay, large pixel typography, decorative elements, and a call-to-action button.

### AI Usage

Explains how Generative AI can be used as a creative tool and introduces the difference between assistance and misuse.

### Impact on the Creative Field

Contains three interactive cards:

- Speed
- Originality
- Livelihood

Clicking a card can open a related online article in a **new browser tab**.

### Dangers of AI

Presents key risks associated with irresponsible AI use.

### Detection

Provides practical visual clues that may help users question whether a piece of content was generated or manipulated.

### Quick Check

Contains a small interactive JavaScript quiz that gives immediate feedback after the user selects an answer.

### About Us

Combines the project's message and purpose, the statement **"Use AI. Don't let it use you."**, a short description of the project, and information about the people behind the website.

---

## Main Features

### Functional Navigation Bar

The navigation bar contains links to the major sections of the site. It remains visible while scrolling, highlights the section currently being viewed, and changes into a hamburger menu on smaller screens.

### Video Background

The home section supports a full-screen background video. The video is placed underneath a translucent sage-green overlay so the motion remains visible without reducing text readability.

### Scroll-Based Active Navigation

JavaScript uses an `IntersectionObserver` to detect which section is currently visible and update the active navigation link.

### Scroll Reveal Animation

Selected elements begin slightly transparent and displaced vertically, then animate into view as they enter the viewport.

### Interactive Cards

The Impact cards are styled as clickable links.

```html
<a
    href="https://example.com/article"
    class="info-card"
    target="_blank"
    rel="noopener noreferrer"
>
    ...
</a>
```

### External Article Tabs

Online articles open in a new browser tab through `target="_blank"`. The `rel="noopener noreferrer"` attribute is included as a security best practice.

### Interactive Quiz

The Quick Check section uses JavaScript to determine whether the selected answer is correct and display feedback immediately.

### Responsive Design

CSS media queries adapt the website for desktop, tablet, and mobile displays.

---

## Software and Technologies

This project intentionally uses simple web technologies so the structure and functionality remain easy to understand and maintain.

### HTML5

Used for page structure, semantic sections, navigation, links, images, video, article content, and accessibility attributes.

### CSS3

Used for layout, grid and flexbox positioning, responsive design, colors, borders, shadows, hover effects, animations, typography, and video overlays.

### JavaScript

Used for mobile navigation, active navigation highlighting, scroll reveal animations, and interactive quiz functionality.

### Google Fonts

The design uses **Pixelify Sans** to reinforce the retro/pixel aesthetic.

```css
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=swap');
```

### Development Tools

The project can be edited using any text editor or IDE. **Visual Studio Code** with **Live Server** is recommended for development, but it is not required.

---

## Design System

The website follows a consistent retro editorial style.

### Primary Colors

```css
--green: #a9b987;
--green-dark: #879f6e;
--green-deep: #637a50;
--cream: #ead7b8;
--cream-dark: #ddc49e;
--brown: #633b18;
--brown-dark: #452710;
--black: #171a16;
--white: #fff8e9;
```

### Visual Language

The visual system combines pixel-inspired typography, muted sage greens, warm cream tones, dark brown borders, offset shadows, rounded retro cards, editorial spacing, and subtle motion.

### Typography

Large headings use strong pixel-style typography. Supporting text uses the same type family at reduced sizes. Text shadows are intentionally subtle and generally use a small offset rather than a large blurry shadow.

---

## JavaScript Functionality

The project's JavaScript remains intentionally simple.

### Mobile Navbar

The menu button toggles the navigation on smaller screens.

```javascript
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
```

### Close Mobile Navigation

Clicking a navigation link closes the mobile menu.

### Active Section Detection

An `IntersectionObserver` watches the page sections and updates the active navigation item.

### Scroll Reveal

Selected elements receive the `reveal` class and become visible when they enter the viewport.

### Quiz

The quiz checks the button's `data-answer` value and displays feedback.

```html
<button data-answer="correct">
    The hands contain impossible anatomy.
</button>
```

The functionality is lightweight and does not require a backend.

---

## External Articles

The Impact on the Creative Field cards are designed to link to online articles rather than local article pages.

Replace the placeholder URL:

```html
href="https://YOUR-ARTICLE-LINK-HERE.com"
```

with the actual source.

Recommended article subjects include:

- Generative AI and creative productivity;
- AI and originality;
- AI and artists' livelihoods;
- copyright and creative work;
- misinformation and deepfakes;
- responsible AI use.

Whenever possible, use credible sources and provide appropriate attribution.

---

## Educational Purpose

This project is intended as an educational website rather than a commercial AI product.

Its central message is:

> **Use AI. Don't let it use you.**

The website encourages a balanced view of technology.

AI can assist people with ideas, productivity, and creative workflows. At the same time, users should remain responsible for verifying information, respecting creators, protecting personal information, and making thoughtful decisions about how generated content is used.

The project therefore focuses on **AI literacy**, not fear of technology.

---

## Future Improvements

Possible future enhancements include:

- a dedicated sources/references page;
- article previews or modal windows;
- more interactive AI-detection examples;
- a larger quiz or knowledge check;
- accessibility improvements and keyboard-state styling;
- optimized media assets for faster loading;
- a dark-mode alternative;
- a contact or feedback section;
- additional educational content about copyright, attribution, and AI ethics;
- a content management system if the project later becomes a larger publication.

---

## Credits
- Mr. Kian Clarel R. Bunagan - BSCpE 2 USLT (Lead Software Consultant) 

### Development

Built with:

- HTML5
- CSS3
- JavaScript
- Google Fonts / Pixelify Sans

### Images and Media

Replace placeholder assets with the appropriate images and video used by the project team.

When using third-party materials, follow the source's licensing, attribution, and usage requirements.

---

## Final Message

Technology should expand human creativity, not make creativity disposable.

**Question the output. Verify the source. Protect the creator. Use AI responsibly.**

> **GENERATIVE AI MISUSE**  
> *Think critically. Create responsibly.*
