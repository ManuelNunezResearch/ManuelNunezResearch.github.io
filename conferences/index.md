---
layout: default
title: Committees, Conferences, Workshops and Summer Schools
permalink: /conferences/
---

{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% assign all_years = site.data.committees.years | sort: "year" | reverse %}

<h1>Committees, Conferences, Workshops and Summer Schools</h1>


{% if site.data.committees.permanent %}
<ul>
{% for item in site.data.committees.permanent %}
  <li>{{ item.text }}</li>
{% endfor %}
</ul>
{% endif %}

<h2>Current events</h2>

{% assign current_block = nil %}
{% for block in all_years %}
  {% if block.year == current_year %}
    {% assign current_block = block %}
  {% endif %}
{% endfor %}

{% if current_block and current_block.events and current_block.events.size > 0 %}
<p>During {{ current_year }} I am involved in the following events:</p>
<ul>
{% for event in current_block.events %}
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
{% else %}
<p>No events currently listed for {{ current_year }}.</p>
{% endif %}

<h2>Previous events</h2>

{% assign has_previous = false %}
{% for block in all_years %}
  {% if block.year < current_year %}
    {% assign has_previous = true %}
    <h3>{{ block.year }}</h3>
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

{% if has_previous == false %}
<p>No previous yearly events listed yet.</p>
{% endif %}

<p>
Earlier activities can be found in these
<a href="/conferences/manuel-nunezs-involvement-in-previous-scientific-events/">
previous scientific events
</a>.
</p>