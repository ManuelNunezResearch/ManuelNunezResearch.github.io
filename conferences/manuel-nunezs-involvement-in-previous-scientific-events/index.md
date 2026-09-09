\---

layout: default

title: Manuel Núñez’s involvement in previous Scientific Events

permalink: /conferences/manuel-nunezs-involvement-in-previous-scientific-events/

\---



<h1>Manuel Núñez’s involvement in previous Scientific Events</h1>



{% assign current\_year = site.time | date: "%Y" | plus: 0 %}

{% assign yearly\_events = site.data.committees.years | sort: "year" | reverse %}



{% for block in yearly\_events %}

&#x20; {% if block.year < current\_year %}



&#x20;   <h2>{{ block.year }}</h2>



&#x20;   <ul>

&#x20;   {% for event in block.events %}

&#x20;     <li>

&#x20;       {% if event.url %}

&#x20;         <a href="{{ event.url }}">{{ event.name }}</a>

&#x20;       {% else %}

&#x20;         {{ event.name }}

&#x20;       {% endif %}

&#x20;       {% if event.role %} ({{ event.role }}){% endif %}

&#x20;     </li>

&#x20;   {% endfor %}

&#x20;   </ul>



&#x20; {% endif %}

{% endfor %}



{% include previous-events-legacy.html %}

