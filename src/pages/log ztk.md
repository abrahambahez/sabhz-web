---
title: "Log de ideas sobre zettelkasten"
createdAt: 2023-01-23T17:58:39

---
## Fundamentos ontológicos de la gestión del conocimiento

Parte importante del marco se basa en sostener un *antirrealismo* del proceso, esto significa que la teoría producida en las notas permanentes *no es real*, *es construida* a partir de uno o más marcos epistemológicos que regulan la evaluación entre lo verdadero y lo falso. Su máxima aspiración, por lo tanto, producir *representaciones adecuadas* del mundo.

Aceptar este principio tiene ventajas que promueven la flexibilidad epistémica, la crítica constructiva.

### Epistemología constructivista que sea consistente con la **hipótesis de la realidad**

Las notas permanentes no son sino una **teoría** individual del mundo

Las notas de referencia son constructos de la **evidencia empírica** que interactúa con la teoría
    
## App mentality vs Plain text mentality
Las ventajas del texto plano, aún en su versión *non-linkable* están en su ligereza y facilidad para **buscar** en sus contenidos (no son búsquedas tan eficientes como en una base de datos, pero pueden ser muy poderosas). No quiero llenar mi bóveda de obsidian con archivos que contienen queries de búsqueda solamente, me gustaría que la aplicación me permitiera gestionarlos fuera de las notas (si quisiera documentar las búsquedas o los filtros lo haría en lenguaje natural y sin una sintaxis específica -o con múltiples-, sino sólo la lógica)

## Análisis cualitativo del grafo del zettelkasten
El análisis cualitativo del grafo de zettelkasten se enfoca en **identificar estructuras heterárquicas** de una [[comunidad de nodos]], con lo cual visibiliza la [[ontología informal]] del grafo

En el [[zettelkasten de Luhman]] original, la limitación física de la nota exigía que existiera en una ubicación específica cada vez, con lo cual un sistema analógico representa físicamente una [[jerarquía]] específica. En los sistemas digitales, la transclusión elimina virtualmente esa limitación.

## 2021-09-26
Relaciones de los enlaces entre las notas

Si tú enlazas a una nota es porque:

- porque necesitas su contenido para construir el de la nota actual
    - un concepto *x* me ayudará a construir una proposición *p*

## 2021-09-26
Relaciones de los enlaces entre las referencias y las notas

Las referencias que citan notas usan los conceptos para su argumentación ==esto debería evitarse creando la relación inversa==

Las notas citan las referencias para **fortalecerse** teórica o empíricamente

## 2022-01-22
Sintaxis [[OKR]] en texto plano.

La sintaxis para escribir [[okr]] en texto plano debería respetar las siguientes convenciones:

1. Cada elemento debe escribirse sólo en una línea de texto
2. El *objetivo* debe ser *padre* de los *resultados clave*
    - En el caso de *markdown*, debería ponerse en un encabezado h1-h6 y, menos recomendable por no estar soportado en todas las subsintaxis de markdown, en una lista indentada.
3. Los objetivos deben poder distinguirse de otras líneas de texto en una búsqueda dentro del contenido de los archivos
    - En mi caso, siempre deben comenzar con `O: `, es decir, la letra O mayúscula, dos puntos y espacio
4. Los resultados clave *siempre deben* especificar una fecha usando el mismo formato, con el fin de ser localizables. En el caso de markdown

## 2022-03-08 
Las referencias como interfaz conversacional
En el contexto de mis notas, cuando escribo `@` estoy iniciando una conversación con alguien más (puede ser bibliográfica pero también de otro tipo de evidencia como una entrevista), en este sentido lo importante es identificar al interlocutor.

En esta idea **el medio de interlocución es menos importante** que el locutor, esto es consistente con muchos sistemas de citación (que piden autor -apellidos, principalmente- y año de publicación -como referencia a la versión del *mensaje* publicado-).

### Referencias con un [[interlocutor]] no publicadas
Una entrevista que yo realice a alguien puede tener la forma `@entrevistadoYYYY-MM-DD`, esa forma puede ser compartida por, por ejemplo, notas de una clase o cualquier situación en la que el interlocutor principal es una persona y el medio de interlocución no será referenciable como publicación.

### Referencias de palabra clave: sin interlocutor claro y no publicadas
Si una referencia es importante pero el locutor no tanto (porque no está disponible, porque viene de una situación de no-autoría o porque es irrelevante) y está en una situación «no publicada», puede definirse con el prefijo `@` más una palabra clave y un espacio. En regex (considerando caracteres en español): `^@[a-záéíóúñ]+\s`.

Si la palabra clave es lo importante (una bibliografía importante o un diario donde el interlocutor soy yo mismo sobre un tema en el tiempo), la palabra clave puede considerarse el sujeto de interlocución

Ejemplo actual:

```query
file:/^@[a-záéíóúñ]+\s/
```

## 2022-03-08 
Notas permanentes sobre entidades no conceptuales

Implican descripciones de lugares, poblaciones humanas (como grupos étnicos) y otros elementos a los que, en español, tienen nombres propios. Se distinguen por tener como título el nombre propio, comenzando con mayúscula. En regex-español: `^[A-ZÁÉÍÓÚÑ]`

Ejemplo actual:

```query
match-case:(file:/^[A-ZÁÉÍÓÚÑ]/) -path:/.+\//
```

## El zen de Obsidian

1. Beautiful is better than ugly.
2. Explicit is better than implicit.
3. Simple is better than complex.
4. Complex is better than complicated.
5. Flat is better than nested.

## 2022-03-19 
Pensar antes de vincular (thinking before linking)

Hay una relación entre los tipos de enlaces y los propósitos a los que sirven. Sólo hay dos tipos de enlaces: salientes y entrantes. Uno de los propósitos es *definir* el contenido de una nota.

Un enlace saliente con el propósito de definición crea una definición explícita.

Un enlace entrante con el propósito de definición crea una definición implícita.

Otro de los propósitos es instanciar.

Otro de los propósitos es fundamentar o brindar evidencia que soporte el contenido, los enlaces que cumplen esta función pueden llamarse **citas** (cfr. [[citacionalidad]]. En tanto tales, brindan autoridad al contenido (salientes) o importancia (entrantes).

## 2022-03-23 
Contra los MOC
Argumentos débiles:
- Actitud de gurú [cfr. @reagle2019]

Argumentos fuertes:

- Estructuran sistemas de *centralización* cognitiva, incluso aunque formen redes *descentralizadas*, pero no *distribuidas* [cfr. Brander](https://subconscious.substack.com/p/network-intersubjectives?s=r)

## A brutalist approach to the creative-constructivist method of knowledge management in Obsidian

First, resolve the brutalist approach as an epistemic, ethic and aesthetic way of work with digital notes.

After that, develop the constructivist method:

- The principles: 
    - separation of concerns (notes != tasks, books, agendas or whatever)
    - note (not published work) as outcome
    - prose elaboration first
    - there is no knowledge without critical thinking, there is no critical thinking without inter-epistemic dialog
        - logocentric limitations implies textual tactics of epistemic emergence
            - The way you write is the world you meant to live, because writing is the basic construction process
            - Echo chamber vault of notes
    - construction of the reference (literature as dialog, daily note as field evidence, reflexive > egocentric), multiple ways and levels of reading
    - construction of the 'fleeting': jotting (keywords)
    - construction of the atomic note (elaboration and prose)
    - construction of the linking (thinking before linking)
        - graph structuration as a multilevel tree folgezettel 

### Architectural principles: material is content, keep it raw

#### Truth to materials

1. Escribir con un subconjunto de marcado mínimo necesario con un uso semántico consistente
2. Escribir con la sintaxis de markdown visible (contenido >> marcado o estética)
3. El performance es una funcionalidad: <https://brutalist-web.design/#performance>
    - Minimizar plugins de la comunidad
    - Desactivar plugins siempre que sea posible
    - CSS snippets > temas

## Structural principles: structure is linking

[[ensayo sobre escritura colaborativa en obsidian]]