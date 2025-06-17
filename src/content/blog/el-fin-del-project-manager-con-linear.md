---
title: El fin del Project Manager con Linear
createdAt: 2025-06-17T11:01
updatedAt: 2025-06-17T11:01
tags:
  - Publicacion
lang: es
---

> 📚
> One of the unique aspects to Linear is that we expect the project team to be the PM.  
> <footer>— Karri Saarinen, CEO Linear </footer>

Este texto es una adaptación de un documento que escribí para promover un cambio en la gestión en mi antiguo trabajo como *Product Manager*. Creo que puede ser útil para organizaciones de producto, que muchas veces, adolescen de los males de la burocratización ritual de *Scrum* o los procesos innecesarios de cascada.

## Contenido

## Dejarle a Linear TODO el trabajo de Project Management, incluyendo el Standup

Así es. Linear es una herramienta poderosísima que no todos explotan al 100%. Si ya decidieron usarla ¿Por qué no hacer que dé todo de sí? Considera esto:

>🦧
>
>Si todo el trabajo de descubrimiento y entregas está bien capturado en Linear, porque todos contribuimos a mantenerlo actualizado, entonces no necesitamos un PM (en sentido de *Project Manager* o de *Product Owner*).  
> 
>Cualquiera podría saber, en cualquier momento, qué se hizo ayer, qué se está haciendo hoy y qué se piensa hacer mañana (por las prioridades de tareas). Linear permite crear vistas de tareas filtradas. Por ejemplo, una vista **Proyectos activos** que muestra los proyectos que tuvieron movimientos las últimas 24 horas; o una vista de *tareas* llamada **Standup**, con una lógica muy similar.  
> 
>Si los obstáculos e información importante se capturan como  
[Project Updates](https://linear.app/docs/project-updates) en el momento en que aparecen, también podemos saber qué bloqueos hay.  
>  
>Si los requerimientos y especificaciones se definen allí mismo, podemos tener contexto de por qué y cómo se hicieron las cosas.  
>
> Si las discusiones relevantes de tareas se hacen allí, podemos tener contexto detallado del trabajo de implementación o diseño  

### Hay incontables ventajas de hacer esto

#### Optimizar el tiempo tanto asincrónico como sincrónico

- 🙅 Pasar una hora escuchando cosas de proyectos que posiblemente no atenderás nunca
- 🙆 Tener todo el contexto que necesitas en una herramienta usable, genial, y pasar una hora aprendiendo, conviviendo o jugando con tus colegas de trabajo

#### Empoderamiento por autogestión

- Una empresa ágil debe enfocarse en *hacer el trabajo*. Es potencialmente capaz de organizarse sin un *manager* de proyectos
- Un equipo ágil suele ser suficientemente pequeño para mantener una alineación muy alta con muy poco mantenimiento. La gestión ritual es excesiva y burocrática.
- Si quieres medir nuestra productividad, crea un *Dashboard* que muestre cuántos despliegues exitosos a producción o cuántas actividades de *descubrimiento* hicimos esta semana

#### Auténtico Continuous Delivery

- Los *StandUps*, *Sprints*, *Retrospectives* y demás son una herencia de Scrum, la versión más burocrática del [manifiesto ágil](https://agilemanifesto.org/iso/es/manifesto.html)
- Construir *momentum* significa que tendremos juntas de alineación, presentaciones de producto y retrospectivas *cuando sea necesario*. Idealmente una, dos o tres veces por semana, porque hacemos todo continuamente

Eliminación de ceremonias burocráticas = Más tiempo de calidad para juntarnos a hacer *hacking*, *learning* o *tinkering*.

### Para eso, debemos dejar de «usar mal» Linear

Cuando recién adoptamos Linear en el equipo, lo hicimos a nivel de toda la empresa (20 personas). Pero más de un año después había algunos datos que no ayudaban a defenderla como herramienta.

- Había más proyectos activos que personas en ellos
- Poco avance por proyecto y poca participación, la mayoría de los miembros de un proyecto no hacían mucho para poder completarlo
- Proyectos abandonados: Con el cambio de prioridades, muchos proyectos eran dejados sin cerrar y sin actualizar

Las razones detrás de esto eran muchas, pero la más importante en este contexto era que **el equipo no sabía como utilizar Linear correctamente**. Pero ¿qué significa eso exactamente?

### Releer el Método Linear

Linear es un gran producto, **hecho por un gran equipo de producto**. Un equipo que usa Linear y que publicó cómo lo hace:

[Linear App Method](https://linear.app/method)

La historia del producto es ilustrativa en sí misma, pero una de las claves de su éxito es **que tienen enfoque extremo**.

[*How Linear Builds Product?* En Lenny's Newsletter](https://www.lennysnewsletter.com/p/how-linear-builds-product)

Esto puede verse también en entrevistas con el CEO:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4muxFVZ4XfM?si=IqH729j_Lrm3zHlL&amp;controls=0" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Abandonar el Backlog de funcionalidades

Otro de nuestros problemas fue haber creado backlogs con un montón de features e ideas de clientes que llevaban más de un año congelados.

A partir de esta nueva lógica, los backlogs deberían ser iniciativas alineadas con la visión y objetivos a largo plazo de la empresa. Todo lo relacionado con *fixes* y sugerencias de *features* debería pasar por *Triage* (ver más abajo) o por el proceso de [*discovery*](https://www.interaction-design.org/literature/topics/continuous-discovery).

## Cómo usar mejor Linear

### Volvernos expertos en la herramienta

A diferencia de Jira, Linear es una herramienta que da gusto usar.

Es tan buena que, por ejemplo, el CEO de [Descript](https://www.descript.com/) escribió una guía para que toda su empresa lo use como un *Work Operating System*:

[*Descript’s internal guide for using Linear as your work operating system.* En el Blog de Linear](https://linear.app/blog/descript-internal-guide-for-using-linear)

Todos los miembros del equipo deberían conocer los conceptos de la herramienta y usarla con fluidez. Todos deberían liderar exitosamente (al menos cada 6 meses) un proyecto con 3 o más personas en él, escribiendo ellos mismos los artefactos relevantes para ello.

### Explotar el Triage como herramienta de retroalimentación directa

Triage es una funcionalidad del producto creada para *gestionar el trabajo no planeado*, que puede venir de diferentes lugares:

[*Triage*, documentación de Linear](https://linear.app/docs/triage)

Podemos aprovechar esto para manejar adecuadamente trabajo extraño, las solicitudes de *bugs* que están fuera del *scope*, o el *feedback* de un usuario sobre productos fuera del enfoque actual, sin perder el *momentum*.

### Explotar la comunicación con Slack

Linear permite de varias maneras enviar mensajes a Slack o sincronizar hilos completos con *issues* específicos.

[Integración de Slack, documentación de Linear](https://linear.app/docs/slack)

Usar esto inteligentemente podría ser radical: lo primero que se me ocurre es que con esto podríamos tener un *Continuous Standup* automatizado.

### Explotar los docs y multimedia

Actualmente, algunas cosas de la documentación estarían bien soportadas en Linear, sobre todo los requerimientos, especificaciones. Los documentos son encontrables vía el buscador general. Linear se lleva bien con Figma, Loom, Youtube, Markdown, y con imágenes. Podríamos ser más creativos para comunicar nuestras ideas.

Esto no significa que deberíamos enviar Looms de 10 minutos para decir algo que podríamos escribir en 3 oraciones. Pero bien usado, el contenido multimedia es *mágico*.

## Pero, entonces ¿Dónde voy a tener contexto si lo necesito?

Simple: documentos, enfoque y alineación radical.

### 1. Documentación poderosa

La buena documentación, así como buenos hábitos para leerla y escribirla, multiplicarán el conocimiento colectivo de los proyectos y optimizarán tanto los flujos de información como los tiempos de desarrollo.

#### Product Vision Boards

Adoptar una herramienta como los **Product Vision Boards** permite mapear la visión y los *milestones* de cada producto. Es más visual, más flexible y menos aburrido que el texto. Ahí encontrarás las respuestas más importantes al qué, el por qué y el ¿qué podría salir mal? del producto. Por ahora están en un tablero abierto en Figma.

[*Product Vision Boards*, Roman Pichler](https://www.romanpichler.com/blog/the-product-vision-board/)

#### Changelogs

Me confieso culpable de haber sido descuidado con mis *changelogs* de producto. Los *changelogs* son el artefacto más poderoso de todos los que tiene el producto. Son la contraparte de los *Product Vision Boards*, muestran lo que realmente se hizo, en contraste con los que se imaginó en el board inicial.

No debería haber un proyecto activo sin una actualización en su *changelog* de producto. Sobre todo, escribe *Changelogs* con amor:

[*Startups, write Changelogs*, blog de Linear](https://linear.app/blog/startups-write-changelogs)

¡Usa el [formato *Keep A Changelog*](https://keepachangelog.com/en/1.1.0/)!

#### Iniciativas extremadamente enfocadas

Las iniciativas deberían documentarse en Linear, representar la visión más general de los proyectos que contienen y cuál es su vínculo con los objetivos de negocio y la visión del producto.

No debería haber dudas de por qué estamos haciendo algo.

[*Initiatives*, documentación de Linear](https://linear.app/docs/initiatives)

#### Pensar en voz alta (Wiki Pública)

Deberíamos hacer público todo nuestro trabajo de pensar e investigar soluciones a problemas. Todo lo que pueda ser público. Esto es un *must* en la actualidad, es la mejor forma de hacer marketing, construir la marca, traer confianza, impulsar el orgullo entre los miembros del equipo, en fin.

Algunos ejemplos inspiradores de Startups que hacen esto son:

- [The GitLab Handbook](https://handbook.gitlab.com/)
- [Elicit's Blog](https://blog.elicit.com/)
- [Linear Blog](https://linear.app/blog)
- [Thoughtbot Handbook](https://thoughtbot.com/playbook)
- Y en esta publicación hay muchísimos ejemplos más: [The Handbook of Handbooks for Decentralised Organising](https://hackmd.io/@yHk1snI9T9SNpiFu2o17oA/Skh_dXNbE?type=view)

### 2. Enfoque y alineación extremos

#### Enfoque semanal

Que haya demasiados proyectos o tareas iniciados no solo significa que hay más cosas qué terminar que manos disponibles. También significa que hay muchas cosas pasando y que solo una, dos o tres personas lo saben. Significa que el equipo nada en una colección de ideas huérfanas y que no concentramos correctamente la fuerza colectiva.

Idealmente, cada persona debería tener solo un enfoque semanal principal, al que dedique el 80% de su tiempo, dejando el resto para asistir, opinar, aprender o recibir trabajo inesperado.

#### Juntas de alineación

En teoría, la utilidad de un *standup* es mantener el equipo alineado en el día a día, pero si eso pasa asincrónicamente, se vuelve un requisito burocrático. Solo hay una excepción.

Imagina que te encanta trabajar de 10pm a 12am porque eres un búho, te encuentras con que algo no está nada claro y es "demasiado largo" o complicado de explicar por Linear. En ese caso, deberías ir a tu calendario, buscar a las personas que te pueden ayudar con información y ponerles una "junta de alineación" de 30 minutos. Asigna con confianza el tiempo de 10:30 a 11:00 si no hay otra cosa en su agenda. Al día siguiente hablas con las personas relevantes sobre el asunto, actualizan la documentación o el *issue* y listo. El resto del equipo mantiene su *momentum*.

## Entonces, ¿los *standups* debería existir?

En mi opinión, no. Hay mejores cosas qué hacer en nuestro tiempo sincrónico.

- Micro-cursos para compartir lo que sabes
- 1:1's para mejorar o tener guía personal
- Sesiones de escucha de Spotify
- Un torneo de [OverCooked](https://store.steampowered.com/app/448510/Overcooked/?l=spanish)
- Una sesión de cocina juntos
- Un *mentoring*
- Una lectura en voz alta

¿Qué se te ocurre a ti?

