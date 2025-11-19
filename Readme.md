# Lab 11: Accessible Custom Components & Widgets
---
### Name- Saizal Saini <br> Student Number- 041168394
---
## 1. What is the keyboard interaction missing?

The original accordion only supported **Tab** focus and mouse clicks. It did **not** include the keyboard interactions required by the **WAI-ARIA Accordion Authoring Practices**, such as:

- **Enter** - toggle (expand/collapse) the selected accordion section  
- **Space** - toggle the selected accordion section  
- **Arrow Down** - move focus to the next accordion header  
- **Arrow Up** - move focus to the previous accordion header  
- **Home** - move focus to the first accordion header  
- **End**  - move focus to the last accordion header  

Without these, keyboard-only users are unable to properly navigate and operate the accordion.

---

## 2. What ARIA is missing?

The original accordion code did not include the required ARIA roles and relationships. Specifically:

### Missing on Header Buttons:
- `aria-expanded` — indicates expanded/collapsed state  
- `aria-controls` — identifies which panel is controlled  
- Unique IDs for linking to panels  

### Missing on Content Panels:
- `role="region"` — identifies the panel as a readable section  
- `aria-labelledby` — links the panel to its header button  
- Unique `id` — required for `aria-controls`

Because these attributes were missing, screen readers could not understand:
- which header controls which panel  
- whether a section is expanded or collapsed  
- the structure and purpose of each accordion region  

---

##  References

- **WAI-ARIA Authoring Practices – Accordion Pattern**  
  https://www.w3.org/WAI/ARIA/apg/patterns/accordion/

- **Simple Accordion Example from W3C**  
  https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/

---

## THANKS