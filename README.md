# Guru Prasanna — Personal Portfolio Website

![Guru Prasanna Portfolio](public/images/profile.jpg)

A modern, responsive, and aesthetically crafted personal portfolio website for **Guru Prasanna**, a B.Tech student specializing in Artificial Intelligence and Machine Learning at Sreenivasa Institute of Technology and Management Studies (Class of 2027), focusing on Web Development and Software Engineering.

**Live GitHub Repository:** [https://github.com/Guruyadav118/personalportfolio](https://github.com/Guruyadav118/personalportfolio)  
**LinkedIn:** [https://linkedin.com/in/guru-prasanna-b34898295](https://linkedin.com/in/guru-prasanna-b34898295)  
**Email:** [guruprasanna754@gmail.com](mailto:guruprasanna754@gmail.com)

---

## 🚀 Tech Stack

- **Frontend Library:** React.js 19
- **Build Tool & Bundler:** Vite 6
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React & Custom SVG Social Icons
- **Effects:** Canvas Confetti

---

## ✨ Key Features

- **🌓 Dynamic Dark / Light Mode:** Sleek default dark theme with black, navy, and purple accents; smooth theme toggle with localStorage persistence.
- **⚡ Hero Section:** Dynamic cycling text (*Web Developer*, *AI & ML Student*, *Software Development Enthusiast*), floating technology badges, and authentic profile image.
- **🧑‍💻 About Me:** Overview cards detailing graduation year, career interests, and internship readiness.
- **🛠️ Technical Skills:** Categorized breakdown covering Programming Languages, Frontend Development, Backend Development, Databases, and Tools without inflated proficiency metrics.
- **🎓 Academic Timeline:** Interactive vertical timeline documenting B.Tech at SITAMS (2027), Bhavana Junior College (2023), and ZPHS School (2020).
- **💼 Internship Experience:** Full Stack Web Development Intern at Slash Mark IT Solutions (May 2026 – June 2026).
- **📂 Project Showcase:**
  - *Food Delivery Website* (HTML, CSS, JS)
  - *Personal Portfolio Website* (React, CSS, JS)
  - *Marriage Invitation Website* (HTML, CSS, JS)
  - *CoffeeDate Website* (React, JS, CSS)
  - Interactive project detail modal with architecture highlights.
- **📜 Certifications Gallery:** Modular placeholder cards with certificate viewer modal.
- **✉️ Validated Contact Form:** Client-side validation, direct email client fallback, and 1-click clipboard email copy.
- **📄 Downloadable Resume:** Direct download integration via `/public/Guru_Prasanna_Resume.pdf`.

---

## 📦 Project Structure

```text
guru/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── food-delivery.jpg
│   │   ├── portfolio.jpg
│   │   ├── marriage-invite.jpg
│   │   └── coffeedate.jpg
│   ├── favicon.svg
│   └── Guru_Prasanna_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ResumeModal.jsx
│   │   └── SocialIcons.jsx
│   ├── data/
│   │   └── portfolioData.js     <-- Centralized editable portfolio data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Guruyadav118/personalportfolio.git
   cd personalportfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📝 Updating Your Content
All personal details, skills, projects, and contact info can be updated anytime in [`src/data/portfolioData.js`](src/data/portfolioData.js).
