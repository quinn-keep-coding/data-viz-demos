## what's front-matter?

Front matter is a block of structured data that is placed at the beginning of a file, typically used in static site generators, markdown files, and other text documents to define metadata or configuration settings. It is often used to specify variables, configuration options, or other metadata that might be needed by the software processing the file.

The front matter is usually enclosed in delimiters (such as ---, +++, or <!-- -->) and is written in a structured data format like YAML, JSON, TOML, or even in a language like JavaScript. 

the front matter will be transfer as data by **gray-matter**.

### YAML
```yaml
---
title: Example Page
date: 2024-04-01
author: Jon Schlinkert
---
```

### JSON
```json
{
  "title": "Example Page",
  "date": "2024-04-01",
  "author": "Jon Schlinkert"
}
```

### TOML
```toml
title = "Example Page"
date = 2024-04-01
author = "Jon Schlinkert"
```

### JavaScript
```javascript
/* 
title: Example Page
date: 2024-04-01
author: Jon Schlinkert
*/
```
