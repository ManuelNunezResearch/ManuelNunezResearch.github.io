---
layout: default
title: Publications
permalink: /publications-preview/
---

<h1>Publications</h1>

{% assign types = "journal,conference,chapter" | split: "," %}

{% for type in types %}

  {% case type %}
    {% when "journal" %}
      <h2>Journal Publications</h2>
    {% when "conference" %}
      <h2>Publications in refereed conferences and workshops</h2>
    {% when "chapter" %}
      <h2>Chapters</h2>
  {% endcase %}

  {% assign pubs = site.data.publications | where: "type", type %}
  {% assign previous_year = 0 %}

  {% for pub in pubs %}

    {% if pub.year != previous_year %}
      <h4>{{ pub.year }}</h4>
      {% assign previous_year = pub.year %}
    {% endif %}

    <ul>
      <li>
        {{ pub.authors_html }}

        {% if pub.url != "" %}
          <a href="{{ pub.url }}">{{ pub.title }}</a>
        {% elsif pub.pdf != "" %}
          <a href="{{ pub.pdf }}">{{ pub.title }}</a>
        {% else %}
          {{ pub.title }}
        {% endif %}.

        {{ pub.details_html }}

        {% if pub.url != "" and pub.pdf != "" %}
          <a href="{{ pub.pdf }}">[PDF]</a>
        {% endif %}
      </li>
    </ul>

  {% endfor %}

{% endfor %}