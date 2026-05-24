---
permalink: /
title: "Kartheek Medathati"
heading: "Building physical AI for semi-structured environments"
share_image: "og-banner.jpg"
excerpt: "Founder of Handybot, building physical AI for semi-structured environments. Research background in biologically inspired vision and perception for embodied & AR systems."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm the founder of [Handybot](https://handybot.ai). We are building robots for the places automation skipped: the cluttered, unscripted spaces between the controlled factory floor and the open world, where the environment was built for people and a machine has to perceive, reason, and act on its own. I believe this is the next industrial shift, and that the teams who solve perception and autonomy in the messy real world, not the lab, will define the next decade of robotics.

I have spent my career teaching machines to see. Before Handybot, I built perception systems at Amazon Prime Video and at Meta Reality Labs, working on the embodied and AR perception that moves machine vision out of the dataset and into the physical world. That work rests on a foundation in biological and computer vision: a PhD on biologically inspired vision at [INRIA Sophia Antipolis](https://www.inria.fr/), advised by [Dr. Pierre Kornprobst](https://team.inria.fr/biovision/pierre-kornprobst/) and [Dr. Guillaume Masson](http://www.int.univ-amu.fr/MASSON-Guillaume), and a B.Tech (Hons) and MS by Research from [IIIT-Hyderabad](https://www.iiit.ac.in/), where I was part of CVIT.

If you are building in robotics or physical AI, or you want to bring real-world autonomy into your operations, I want to hear from you. Email is the best way to reach me.

### News
{: .eyebrow}

<ul class="news-list">
{% for item in site.data.news %}
  <li>
    {% if item.date %}<strong>{{ item.date | date: "%b %-d, %Y" }}</strong> &middot; {% endif %}
    {% if item.url %}<a href="{{ item.url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}
    {% if item.source %} <em>({{ item.source }})</em>{% endif %}
    {% if item.blurb %}<br><small>{{ item.blurb }}</small>{% endif %}
  </li>
{% endfor %}
</ul>

### Writing
{: .eyebrow}

<ul class="news-list">
{% for item in site.data.writing %}
  <li>
    {% if item.date %}<strong>{{ item.date | date: "%b %-d, %Y" }}</strong> &middot; {% endif %}
    {% if item.url %}<a href="{{ item.url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}
    {% if item.source %} <em>({{ item.source }})</em>{% endif %}
    {% if item.blurb %}<br><small>{{ item.blurb }}</small>{% endif %}
  </li>
{% endfor %}
</ul>

### Selected work
{: .eyebrow}

- **[BotSeek](/open_source_robot_design_database/)** (2026): an open-source robot design database I created, so teams can build on shared CAD, subsystems, and reference designs instead of starting from scratch.

- **Bio-inspired computer vision: Towards a synergistic approach of artificial and biological vision.** N. V. K. Medathati, H. Neumann, G. S. Masson, and P. Kornprobst. *Computer Vision and Image Understanding*, 2016.

- **Recurrent network dynamics reconciles visual motion segmentation and integration.** N. V. Kartheek Medathati, James Rankin, Andrew I. Meso, P. Kornprobst, G. S. Masson. *Scientific Reports*, 2017.





