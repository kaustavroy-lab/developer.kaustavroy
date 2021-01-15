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
   this[database_length++] = new SearchPage("index.html", "Kaustav Roy", "Profile  I'm a Creative Video Editor & Web Developer  About Me  I am a creative video editor & web developer  Also I am a Folly Maker with good Knowledge  I love spending time on little details  Also I like working in a team I am passionate about my work Because I love what I do, I have a steady source of motivation that drives me to do my best  This passion led me to challenge myself daily and learn new skills that helped me to do better work  Details  Name - Kaustav Roy Age - 150 years ￼ Location  - Tarakeswar, Hooghly, West Bengal    ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best . This passion led me to challenge myself daily and learn new skills that helped me to do better work.");
   this[database_length++] = new SearchPage("experience.html", "Kaustav Roy", "Experiences  Educations  \"The only source of knowledge is ecperience.\" -Albert Einstein  Mohanbati Primary School January 2006 - December 2009  Nachipur M N A C VIDYAMANDIR January 2010 - March 2015  Tarakeswar Mahavidyalaya June 2015 - June 2017  Tarakeswar Degree College June 2017 - December 2020    Careers  Dristikon Online  January 2016 - Present Chief Editor & Web Developer https //dristikononline.in/    Third Eye Creation  October 2019 - Present Chief Editor & Web Developer https //thethirdeyecreation.com     ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best . This passion led me to challenge myself daily and learn new skills that helped me to do better work.");
   this[database_length++] = new SearchPage("contact.html", "Kaustav Roy", "Contact  I am a creative video editor & web developer  Also I am a Folly Maker with good Knowledge  I love spending time on little details  Also I like working in a team I am passionate about my work Because I love what I do, I have a steady source of motivation that drives me to do my best  This passion led me to challenge myself daily and learn new skills that helped me to do better work   ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best . This passion led me to challenge myself daily and learn new skills that helped me to do better work.");
   return this;
}
