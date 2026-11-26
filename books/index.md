---
layout: default
title: Books & Projects
permalink: /books/
---
<section class="wrap listing-head">
  <p class="eyebrow">BOOKS / LITERARY PROJECTS</p>
  <h1>Stories that<br><em>stay with us.</em></h1>
  <p>A growing shelf of books, screenplays and projects.</p>
</section>
<section class="wrap book-list">
{% for book in site.data.books %}
  <article class="book-card">
    <img src="{{ '/assets/images/' | append: book.cover | relative_url }}" alt="Cover of {{ book.title }}">
    <div>
      <small>{{ book.subtitle }}</small>
      <h2>{{ book.title }}</h2>
      <p>{{ book.description }}</p>
      <a class="book-btn" href="{{ book.link }}">{{ book.button | default: "Read more" }} ↗</a>
    </div>
  </article>
{% endfor %}
</section>
