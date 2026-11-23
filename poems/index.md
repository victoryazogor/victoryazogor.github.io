---
layout: default
title: Poems
permalink: /poems/
---
<section class="wrap listing-head"><p class="eyebrow">THE WRITING ROOM / 01</p><h1>Poems &<br><em>other feelings.</em></h1><p class="listing-intro">Words gathered from memory, tenderness, questions and the ordinary business of being human.</p></section>
<section class="wrap poem-list">
{% assign poems = site.poems | sort: "date" | reverse %}
{% for poem in poems %}
<a class="poem-card" href="{{ poem.url | relative_url }}"><div><small>{{ poem.date | date: "%d %B %Y" }} · {{ poem.category | default: "POETRY" }}</small><h2>{{ poem.title }}</h2>{% if poem.excerpt %}<p>{{ poem.excerpt }}</p>{% endif %}</div><span>↗</span></a>
{% else %}
<div class="empty-state"><h2>The page is waiting for its first poem.</h2><p>Publish a new poem by adding a Markdown file to <code>_poems/</code> in your GitHub repository. See README.md for the simple steps.</p></div>
{% endfor %}
</section>
