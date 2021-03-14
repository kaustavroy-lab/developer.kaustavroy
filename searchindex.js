// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/index", "Editor & Developer Kaustav Roy", " ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do,");
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/experience", "Kaustav Roy Experience", " ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do,");
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/contact", "Contact Kaustav Roy", " ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do,");
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/404", "Contact Kaustav Roy", "Back To Home   ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do,");
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/Master_Frame", "Editor & Developer Kaustav Roy", " ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do,");
   return this;
}
