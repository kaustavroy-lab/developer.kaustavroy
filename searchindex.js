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
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/contact", "Contact Kaustav Roy", "Contact  \"A customer is the most important visitor on our premises, he is not dependent on us We are dependent on him He is not an interruption in our work He is the purpose of it He is not an outsider in our business He is part of it We are not doing him a favor by serving him He is doing us a favor by giving us an opportunity to do so.\"-Mahatma Gandhi   ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do,");
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/404", "Contact Kaustav Roy", "Contact   ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do,");
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/Master_Frame", "Editor & Developer Kaustav Roy", " ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do,");
   return this;
}
