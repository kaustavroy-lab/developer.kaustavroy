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
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/index.html", "Kaustav Roy", "Profile  I'm a Freelancer Video Editor & Web Developer  About Me  I am a freelancer video editor & web developer  Also I am a Folly, SFX & VFX Maker with good Knowledge  I love spending time on little details  Also I like working in a team  I am passionate about my work Because I love what I do, I have a steady source of motivation that drives me to do my best  This passion led me to challenge myself daily and learn new skills that helped me to do better work  Details  Name - Kaustav Roy Age - 150 years ￼ Location  - Tarakeswar, Hooghly, West Bengal    ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best . This passion led me to challenge myself daily and learn new skills that helped me to do better work.");
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/experience.html", "Kaustav Roy Experience", "Experiences  Educations  \"The only source of knowledge is ecperience.\" -Albert Einstein  Mohanbati Primary School January 2006 - December 2009  Nachipur M N A C VIDYAMANDIR January 2010 - March 2015  Tarakeswar Mahavidyalaya June 2015 - June 2017  Tarakeswar Degree College June 2017 - December 2020    Careers  Dristikon Online  January 2016 - Present Chief Editor & Web Developer https //dristikononline.in/    Third Eye Creation  October 2019 - Present Chief Editor & Web Developer https //thethirdeyecreation.com   Expertised in   Non Linear Editing ￼￼￼￼￼   Pre & Post Wedding Photo And Video Editing ￼￼￼￼￼   VFX & SFX ￼￼￼￼￼   Folly Making ￼￼￼￼￼   Application Designing & Development ￼￼￼   Web Development ￼￼￼￼   Event Management ￼￼￼￼   ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best . This passion led me to challenge myself daily and learn new skills that helped me to do better work.");
   this[database_length++] = new SearchPage("https://developer.dristikononline.in/contact.html", "Contact Kaustav Roy", "Contact  \"A customer is the most important visitor on our premises, he is not dependent on us We are dependent on him He is not an interruption in our work He is the purpose of it He is not an outsider in our business He is part of it We are not doing him a favor by serving him He is doing us a favor by giving us an opportunity to do so.\"-Mahatma Gandhi   ", "I am a creative video editor & web developer . Also I am a Folly Maker with good Knowledge . I love spending time on little details . Also I like working in a team. I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best . This passion led me to challenge myself daily and learn new skills that helped me to do better work.");
   return this;
}
