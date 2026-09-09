---
layout: default
title: "Manuel Núñez's involvement in previous Scientific Events"
permalink: /conferences/manuel-nunezs-involvement-in-previous-scientific-events/
---

<h1>Manuel Núñez's involvement in previous Scientific Events</h1>

{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% assign yearly_events = site.data.committees.years | sort: "year" | reverse %}

{% for block in yearly_events %}
  {% if block.year < current_year %}

    <h2>{{ block.year }}</h2>

    <ul>
    {% for event in block.events %}
      <li>
        {% if event.url %}
          <a href="{{ event.url }}">{{ event.name }}</a>
        {% else %}
          {{ event.name }}
        {% endif %}
        {% if event.role %} ({{ event.role }}){% endif %}
      </li>
    {% endfor %}
    </ul>

  {% endif %}
{% endfor %}

{% include previous-events-legacy.html %}