/* ========================================
   Maja Guseva Portfolio — script.js
   ======================================== */

(function () {
  'use strict';

  // --- Scroll fade-in animations ---
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => fadeObserver.observe(el));

  // --- Navbar scroll effect ---
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // --- Mobile hamburger menu ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navSocials = document.querySelector('.nav__socials');

  function toggleMenu() {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    if (navSocials) navSocials.classList.toggle('open');
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    if (navSocials) navSocials.classList.remove('open');
  }

  hamburger.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // --- Active nav link highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav__link');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinkEls.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -60% 0px' }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // --- Project modal ---
  const projectData = {
    'choice-predictor': {
      title: 'Choice Predictor',
      tags: ['Streamlit', 'scikit-learn', 'XGBoost'],
      image: 'https://github.com/m-guseva/choice-predictor/blob/main/Layout.jpg?raw=true',
      desc: `<p>Building an interactive web application where a user makes binary choices (1 or 0) and an ML algorithm learns from these decisions to predict the user's next selection with real-time feedback on prediction accuracy.</p>
<p>The project stems from academic research where participants made repeated binary choices between "heads" and "tails." Users select from three algorithms — XGBoost (default), Logistic Regression, or Random Forest — then make 18 initial choices to establish a training set. The system performs parameter optimization and begins adaptive predictions.</p>
<p>The application uses "lagged" features — prior choices function as predictors for subsequent ones. It employs walk-forward validation: train on historical data, predict the next value, compare against the actual choice, then incorporate it into the training set. A line chart visualizes accuracy trends over time.</p>`,
      links: [
        { label: 'Live Demo', url: 'https://choicepredictor.streamlit.app/' },
        { label: 'GitHub', url: 'https://github.com/m-guseva' }
      ]
    },
    'value-vision': {
      title: 'Value Vision Training Game',
      tags: ['Python', 'Streamlit'],
      image: 'https://github.com/m-guseva/value_vision_trainer/blob/main/interface.png?raw=true',
      desc: `<p>"Learning how to draw is learning how to see." Artists struggle with perceiving tonal values correctly, which determines an object's shape and dimension. This visual bias correction typically requires years of practice or mentorship — self-taught artists particularly lack consistent feedback mechanisms.</p>
<p>The application gamifies tonal value training using a flashcard-like approach. Users view image sections and match tonal values using a slider. Points increase based on estimate accuracy, providing immediate feedback within a game format.</p>
<p>The program employs a custom algorithm that identifies homogeneous tonal value areas in images (detailed separately in the Image Homogeneity project). Future plans include modules for hue matching, proportion, perspective, and edge recognition.</p>`,
      links: [
        { label: 'Live Demo', url: 'https://value-vision-trainer.streamlit.app/' },
        { label: 'GitHub', url: 'https://github.com/m-guseva/value_vision_trainer' }
      ]
    },
    'beat81': {
      title: 'Beat81 Workout Dashboard',
      tags: ['Streamlit', 'Python', 'pandas', 'matplotlib'],
      image: 'https://github.com/m-guseva/B81-Dashboard/assets/63409978/3068baeb-cf1e-4826-90aa-8fe4f3524bb2',
      desc: `<p>BEAT81 is a fitness company but doesn't provide any nice statistics on the points that one collects during workouts. This dashboard fills that gap using Python data tools.</p>
<p>The dashboard displays sweat and recovery points tracked across individual workouts and workout types over time. It identifies seasonal and cyclical patterns by analyzing autocorrelations within the dataset.</p>`,
      links: [
        { label: 'GitHub', url: 'https://github.com/m-guseva/B81-Dashboard' }
      ]
    },
    'finance': {
      title: 'Personal Finance Management',
      tags: ['Python', 'Pandas', 'Excel'],
      image: 'https://github.com/m-guseva/personal/assets/63409978/9cfb6290-dde0-4803-9efa-1582d5099c05',
      desc: `<p>A Python-based financial tracking system using pandas to manage personal income and expenses, built because the banks lacked adequate tools for expense analysis.</p>
<p>The system downloads CSV files from two separate banks and processes them through a multi-stage pipeline: data cleaning (column standardization, decimal conversion, concatenation), rule-based categorization by matching the "Auftraggeber" (payer) column, and manual assignment for unmatched entries.</p>
<p>The output is an Excel workbook containing an overview sheet with average expenses per category by month, plus individual sheets for raw transaction data per month. The script handles German CSV formatting (decimal separators, character encoding) and has been in use reliably for about two years.</p>`,
      links: [
        { label: 'GitHub', url: 'https://github.com/m-guseva' }
      ]
    },
    'group-allocation': {
      title: 'Group Allocation Algorithm',
      tags: ['Python'],
      image: 'https://github.com/m-guseva/personal/assets/63409978/380d2cc3-089c-4c6b-b6c6-b57cdeb0f6e8',
      desc: `<p>A solution for assigning participants into equal-sized groups while maintaining demographic balance — a challenge that arises when recruiting participants sequentially rather than having a complete roster beforehand.</p>
<p>The algorithm needed to allocate 90 participants across three equal groups such that sex ratios and average ages remained consistent. It employs stratified sampling based on minimization techniques used in clinical trials: record a new participant's attributes, compute imbalance measures across all groups, and assign to the group with the lowest total imbalance, randomly resolving ties.</p>
<p>The repository includes a simulation script for testing with different population parameters. The algorithm was successfully used during an fMRI study at Charité.</p>`,
      links: [
        { label: 'GitHub', url: 'https://github.com/m-guseva/balanced-group-assignment' }
      ]
    },
    'disinformation': {
      title: 'Russian Disinformation Analysis',
      tags: ['Python', 'NetworkX'],
      image: 'https://github.com/m-guseva/m-guseva.github.io/blob/master/images/Graph.png?raw=true',
      desc: `<p>A collaboration with Correlaid (a data4good organization) and CORRECTIV (investigative journalists) to examine a substantial Telegram dataset spanning January 2022 to April 2023, focusing on Russian disinformation and propaganda narratives on the invasion of Ukraine as they were forwarded through German-speaking channels.</p>
<p>The team employed NetworkX to construct a network graph from the dataset — creating a bipartite graph structure and applying graph projection to produce a final network containing 6,687 nodes and 77,098 edges. The analysis examined the temporal evolution of connectivity metrics including degree and betweenness centrality, identifying influential chat hubs that amplified Russian disinformation.</p>
<p>A separate team employed NLP methods to assess message similarity across communications. The results were published by CORRECTIV.</p>`,
      links: [
        { label: 'Publication', url: 'https://correctiv.org/faktencheck/hintergrund/2024/04/10/telegram-analyse-desinformation-russland-vernetzt-sich-um-alina-lipp-in-deutschland-mit-propaganda-fakes-zum-ukraine-krieg/' },
        { label: 'Report (EN)', url: 'https://correctiv.org/wp-content/uploads/2024/04/Correlaid-Report-English_Neues-aus-Russland_Telegram-Network-Analysis-Python.pdf' }
      ]
    },
    'image-homogeneity': {
      title: 'Image Homogeneity Algorithm',
      tags: ['Python', 'PIL', 'NumPy'],
      image: 'https://github.com/m-guseva/personal/assets/63409978/1f5cb2ae-bf40-47f1-997f-62791853ef7a',
      desc: `<p>An algorithm that identifies homogeneous tonal regions within images, developed for the Value Vision training project. The tool selects areas where surrounding pixels maintain consistent brightness levels.</p>
<p>The algorithm works by: picking a random pixel within a safe zone (avoiding borders), gathering surrounding pixels within a radius, computing brightness values, and testing whether the difference between the target pixel and the average of its neighbors falls within an epsilon threshold. If so, a homogeneous area is found; otherwise, it restarts with a new pixel.</p>
<p>Images are converted to grayscale in luminance mode, where pixel values range from 0 (black) to 255 (white). Selected pixels become training exercises where users estimate tonal values via a 0–100 slider.</p>`,
      links: [
        { label: 'GitHub', url: 'https://github.com/m-guseva' }
      ]
    },
    'fmri': {
      title: 'fMRI Data Preprocessing',
      tags: ['MATLAB', 'SPM'],
      image: null,
      desc: `<p>A MATLAB-based preprocessing pipeline for functional magnetic resonance imaging (fMRI) data using the Statistical Parametric Mapping (SPM) toolbox, demonstrating a systematic approach to preparing raw neuroimaging data for analysis.</p>
<p>The pipeline implements: data conversion from DICOM to NIfTI format, merging 3D volumes into 4D files (230 volumes per run across 6 runs), distortion correction using Voxel Displacement Maps from fieldmap data, simultaneous unwarping and realignment to address magnetic field inhomogeneities, coregistration of functional and anatomical scans, tissue segmentation, and 6mm FWHM spatial smoothing.</p>
<p>The pipeline processes multiple subjects through an automated loop with error checking (verifying correct run counts and volume numbers). Configuration parameters are explicit and adjustable for different acquisition protocols.</p>`,
      links: [
        { label: 'GitHub', url: 'https://github.com/m-guseva' }
      ]
    }
  };

  const overlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalTags = document.getElementById('modal-tags');
  const modalImage = document.getElementById('modal-image');
  const modalDesc = document.getElementById('modal-desc');
  const modalLinks = document.getElementById('modal-links');
  const modalClose = document.getElementById('modal-close');

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalTags.innerHTML = data.tags.map(function (t) {
      return '<span class="tag">' + t + '</span>';
    }).join('');

    if (data.image) {
      modalImage.src = data.image;
      modalImage.alt = data.title;
      modalImage.style.display = 'block';
    } else {
      modalImage.src = '';
      modalImage.style.display = 'none';
    }

    modalDesc.innerHTML = data.desc;
    modalLinks.innerHTML = data.links.map(function (l) {
      return '<a href="' + l.url + '" class="modal__link" target="_blank" rel="noopener">' + l.label + '</a>';
    }).join('');

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-card[data-project]').forEach(function (card) {
    card.addEventListener('click', function () {
      openModal(card.getAttribute('data-project'));
    });
  });

  modalClose.addEventListener('click', closeModal);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // --- Skill tile tap-to-fill on mobile ---
  var activeSkillTile = null;

  document.querySelectorAll('.skill-tile').forEach(function (tile) {
    tile.addEventListener('click', function () {
      if (activeSkillTile === tile) {
        tile.classList.remove('tapped');
        activeSkillTile = null;
      } else {
        if (activeSkillTile) activeSkillTile.classList.remove('tapped');
        tile.classList.add('tapped');
        activeSkillTile = tile;
      }
    });
  });

  // --- Auto year in footer ---
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
