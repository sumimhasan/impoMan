# impoman

**impoman** (Import Manager) is a simple Node.js CLI tool to automatically manage and inject `require` dependencies in your JavaScript files based on a declarative `dependency.json` configuration. It helps reduce manual import statements and speeds up your workflow.

---

## Features

- Automatically inject missing `require()` statements at the top of your files
- Supports local modules with customizable path aliases
- Easy-to-edit JSON configuration (`dependency.json`) per project
- Lightweight and modular — written in plain Node.js with no heavy dependencies

---

## Installation

Clone this repo or install globally (coming soon):

```bash
git clone https://github.com/yourusername/impoman.git
cd impoman
