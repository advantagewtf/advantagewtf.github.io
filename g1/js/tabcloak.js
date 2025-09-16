document.title=prompt('Welcome to the Tab Cloak setup!\n\nEnter the title you want to set for this tab::');var icon=document.querySelector
(`link[rel='icon']`);if (!icon) {icon = document.createElement('link');icon.rel='icon';};switch(prompt
('What icon would you like to use?\n\n[1] Google Search\n[2] Google Drive\n[3] Custom URL\n\nPlease only enter a number!%27)){case%271%27:icon.setAttribute
(%27href%27,%27https://www.google.com/favicon.ico%27);break;case%272%27:icon.setAttribute
("href","https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");break;case3":icon.setAttribute(%27href%27,prompt
("Please enter the URL for the icon you want:"));} document.head.appendChild(icon);