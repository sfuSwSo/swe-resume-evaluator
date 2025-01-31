<h4 align="center">
    <br><img src="static/logo.png" alt="ArminC AutoExec"></a>
</h4>

<h4 align="center">SFU Open-source Development Club<br>Fall 2023 Project<br><br>Resume Evaluator Software Service using Naive Bayes Classifiers
    <div>
    <br>
        <a href=".">
          <img src="https://github.com/sfuosdev/swe-resume-evaluator/actions/workflows/node.js.yml/badge.svg"/>
        </a>
    <div>
</h4>

<p align="center">
  <a href="#credits">Credits</a> •
  <a href="#storybook">Storybook</a> •
  <a href="#testing">Testing</a> •
  <a href="#development-setup">Development Setup</a> •
  <a href="#production-setup">Production Setup</a>
</p>

<p align="center">
<b><a href="https://osdev.ca/project/resume-evaluator/">Live demo</a></b>
</p>

<br><br>
The SWE Resume Evaluator is a Software-as-a-Service (SaaS) web application that automatically classifies and assesses users' resumes to determine their suitability for software engineering roles, such as SWE, ML, and QA engineers.

Naive Bayes classifier is used for natural language processing.

### Credits
**`Project Lead` Jusung Park [@Pentaminum](https://github.com/Pentaminum)**  
**`Project Lead` Jiin Kim [@jiin-kim109](https://github.com/jiin-kim109)**  

**`Developer` Kathy Cho [@heyj0jo](https://github.com/heyj0jo)**  
**`Developer` Seunghwan Kim [@SHKim331](https://github.com/SHKim331)**  
**`Developer` Tommy (Kanggeon) Oh [@TommyOh0428](https://github.com/TommyOh0428)**  
**`Developer` Daniel Pham [@dp357](https://github.com/dp357)**  

**`Designer` Gripen Chan [@GripenANM](https://github.com/GripenANM)**  

### Storybook
A Storybook server is provided to allow browsing the components used in this project.  
```
npm run storybook
```

### Testing
Run Jest and React-Testing-Library tests on React code.
```
npm run test
```

Run server-side API testing code.
```
cd server
npm run test
```
