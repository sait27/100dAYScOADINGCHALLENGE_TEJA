# WEEK 1-GITHUB BASICS

## DAY1-Understanding GitHub and Create a GitHub Account
Creating my GitHub account. My user Name is sait27

## DAY2-GitHub's GUI - Creating a Repository and Making Changes
I created a repository named 100daysofcodingchallenge_teja and created a readme.md file (markdown file).

## DAY3-Introduction to Git
- `clone` command: Used to create a copy of a remote repository on your local machine.
- `pull` Command: Fetches changes from a remote repository and integrates them into the current branch.

## DAY4-Commit and Push Changes to GitHub
- `git add`: Stages changes for commit.
- `commit` command: Records changes in the repository with a message.
- `push` command: Uploads local repository content to a remote repository.

## DAY5-Understanding Branches and Pull Requests
- `branch` command: Create a new branch and switches to it.
- `Pull` Request: A request to merge changes from one branch to another.

## DAY6-Introduction to GitHub Copilot

## DAY7-Collaborative Coding with Friends

## WEEK GOAL
Mastering Git, GitHub, and GitHub Copilot

# Week 2

## Day 8 Challenge: Introduction to HTML
HTML (HyperText Markup Language) defines the structure of a webpage. Tags are the building blocks of HTML. They define the structure of the webpage and instruct the browser on how to display the content.
- `<!DOCTYPE html>` declaration defines the HTML version to ensure the browser renders the content correctly.
### Elements:
- `<html>`: The root element of an HTML page.
- `<head>`: Contains meta-information about the HTML document.
- `<title>`: Sets the title of the HTML document (displayed in the browser tab).
- `<body>`: Contains the content of the HTML document.
### Text Formatting:
- `<h1>` to `<h6>`: Headings from largest to smallest.
- `<p>`: Paragraph.
- `<br>`: Line break.
- `<hr>`: Horizontal rule.
- `<b>`: Bold tag.
### Lists:
- `<ul>`: Unordered list.
- `<ol>`: Ordered list.
- `<li>`: List item.

## Day 9 Challenge: Working with Links, Images, Forms, and Tables in HTML
### Links:
Use the `<a>` tag to create clickable hyperlinks.
```<a href="https://www.your-restaurant.com">Visit Our Restaurant</a>```
### Images:
Embed images in an HTML page using the <img> tag. Use the src attribute to specify the image path and alt for accessibility text.
```<img src="menu-item.jpg" alt="Delicious Spaghetti Bolognese">```
### Forms:
Use the ```<form>``` tag, which can collect user input and send it to a server.
### Tables:
Tables are made using the `<table>` tag, with `<tr>` for rows, `<th>` for header cells, and `<td>` for data cells.<br>

## Day 10 Challenge: Semantics, Comments, Attributes, and Validation in HTML.
### Semantics:
HTML5 semantic elements enhance document structure:
- `<header>`: Defines a document or section header.
- `<footer>`: Specifies a footer.<br>
- `<nav>`: Used for navigation links.<br>
- `<article>`: For independent content.<br>
- `<section>`: A section of a document.
- `<aside>`: Content set aside, like a sidebar.
### Comments:
Comments help in documenting HTML code and are not displayed in the browser.
```<!-- This is a comment --> ```
### Attributes:
Attributes provide extra information about HTML elements:
- `class`: Classnames for an element.
- `id`: A unique id for an element.
- `style`: Inline CSS styling.

## Day11:Introduction to CSS - Understanding the Basics and Integration Methods
### CSS
CSS (Cascading Style Sheets) is a style sheet language used to describe the look and format of a document written in HTML. It's what makes the web look good.
### How to Add CSS
- `External CSS`:Link an external `.css` file within your HTML.
```<link rel="stylesheet" type="text/css" href="styles.css">```
- `Internal CSS`:Place CSS in a `<style>` tag within the `<head>` section of your HTML.
``` html
<style>
p {
  color: red;
}
</style> 
```
- `Inline CSS`:  Apply styles directly with the style attribute of HTML elements.
``` <p style="color: blue;">This is a paragraph.</p> ```

# Day 12: CSS Selectors and the Box Model

## CSS Selectors
Selectors allow you to target specific HTML elements to style.

### Examples:
1. **Type Selector:**
   ```css
   p {
     color: green;
   }
   ```
   This makes all paragraph text green.

2. **Class Selector:**
   ```css
   .menu-item {
     font-weight: bold;
   }
   ```
   Elements with `class="menu-item"` will be bold.

3. **ID Selector:**
   ```css
   #header {
     background-color: #f2f2f2;
   }
   ```
   The element with `id="header"` gets a light grey background.

## The Box Model

### Examples:
1. **Margin:**
   ```css
   .content {
     margin: 20px;
   }
   ```
   Adds 20px margin around `.content`.

2. **Border:**
   ```css
   .box {
     border: 2px solid black;
   }
   ```
   `.box` will have a 2px solid black border.

# Week3

## Introduction to JavaScript
    JavaScript is a vital programming language for web development, enabling dynamic interactions on web pages. It works alongside HTML and CSS to make websites interactive and user-friendly.
### Variables, Data Types, and Operators
    variables are named containers for data.In js,there are three ways to delare

```javascript
var oldSchool = "I can be redeclared or updated";
let modernVariable = "I can be updated but not redeclared within the same scope";
const constantValue = "I cannot be updated or redeclared";
```    

**Data Types** categorize the kinds of data we can work with. JavaScript has several:

- **Primitive Types:** These include `undefined` , `null`, `boolean`, `number`, `string`, `symbol`, and `bigint`.
- **Non-Primitive Types:** Essentially, objects (including arrays and functions).

### Basic Output with console.log()
The `console.log()` function is a basic output method that writes a message to the console.

### Real-Life Example
JavaScript powers interactive elements on websites, like greeting pop-ups and responsive buttons, making the web experience richer.