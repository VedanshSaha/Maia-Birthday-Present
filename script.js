// TypedJS
const typed = new Typed("#typed", {
  strings: ["Happy Birthday Maia 💜", "You're the sweetest 🌸", "This site is all for you 🍰","Hope you have a great year 🎀", "I miss you 🥀"],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true
});

// Swiper
const swiper = new Swiper('.mySwiper', {
  effect: "slide",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  }
});

// Sweet Message Generator
const messages = [
  "I think about you all day",
  "I love your smile",
  "You make me wanna wait 2 years",
  "I love your personality",
  "I love talking to you",
  "Listening to you is never boring",
  "Even politics seem interesting if you're talking about it",
  "Seeing you is awesome, wish we had met sooner",
  "You are really really prettyyyyyy",
  "I'd rate ur kisses 10/10",
  "I'm glad we met"
];

function showRandomMessage() {
  const box = document.getElementById("messageBox");
  const random = messages[Math.floor(Math.random() * messages.length)];
  box.innerText = random;
}

// AOS
AOS.init();

// Rellax
new Rellax('.rellax', {
  speed: -2,
  center: true
});

// tsParticles
tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 30 },
    color: { value: ["#ff69b4", "#ffb6c1", "#ff1493"] },
    shape: {
      type: "char",
      character: {
        value: ["❤️","💖","💕","💗"],
        font: "Verdana",
        style: "",
        weight: "400"
      }
    },
    opacity: { value: 0.8 },
    size: { value: 16 },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      outModes: { default: "out" }
    }
  }
});

// Floating Heart Background (basic particle simulation)
const heartContainer = document.getElementById("floating-hearts");
for (let i = 0; i < 20; i++) {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${5 + Math.random() * 10}s`;
  heartContainer.appendChild(heart);
}

// Popup logic
function openPopup(key) {
  const popup = document.getElementById("popup");
  const body = document.getElementById("popupBody");
  
  const content = {
  memory1: `<h3>A lot happened</h3><p>I like kissing you, You kiss really well <br> I don't know what I'm yapping about, but I genuinely miss your touch</p>`,
  memory2: `<h3>I didn't know You liked me</h3><p>I liked you since the first day, I never knew you liked me back <br> The whole day when we were in the museum and near the tram <br> I was trying to find ways to get close to you and talk <br> Silly me, I should've approached you earlier</p>`,
  memory3: `<h3>The last day of ETEAM</h3><p>I was confused about what I felt <br> I knew we weren't supposed to meet after that <br> but I genuinely felt that I can't lose you <br> I really wanted you to be there in my life, <br>That's why I had to find you and talk to you lol.</p>`,

  poem1:`<h3>Wish you were here </h3>
            Some nights feel heavier than others.<br>
Not for any reason, just because you're not around.<br>
And I replay those hours<br>
Like they might somehow bring you back.<br><br>

It's strange how fast I got used to you.<br>
The way you spoke,<br>
The way you looked when you weren’t saying anything.<br><br>

We didn’t say too much,<br>
But everything felt clear.<br>
Now I’m here,<br>
And you're somewhere else,<br>
And I don’t really know what to do with that.<br><br>

I don’t want to make this bigger than it is.<br>
But I miss you.<br>
In a quiet, kind of everyday way.<br>
The kind that stays.<br><br>

I don’t need forever.<br>
I just wish you were here.<br>
Right now.<br>
That would be enough.<br>
`,
poem2:`<h3>When we talk</h3>
I don’t know how to explain it<br>
But talking to you feels different.<br>
Even when it’s just texts,<br>
Even when it’s 2 AM and we both should be asleep.<br><br>

I catch myself smiling at my screen,<br>
Or waiting for that little typing bubble to come back.<br>
It’s dumb, maybe<br>
But it makes the day feel lighter.<br><br>

I like how you say things<br>
Not just what you say.<br>
Even your silences feel better than most people’s words.<br><br>

Calls with you don’t feel like calls.<br>
They feel like time slowing down.<br>
Like I can breathe a bit easier,<br>
Even if you’re miles away.<br><br>

I don’t know what this is exactly<br>
But I like it.<br>
I like you.<br>
And I’m glad we’re still talking.`,
poem3:`<h3><Three Weeks in/h3>
It hasn’t been long<br>
But it’s been enough<br>
To make me notice<br>
How much I look forward to you.<br><br>

Three weeks isn’t a lot<br>
But it feels like we’ve made space<br>
Somehow<br>
Between all the days and time zones.<br><br>

I don’t know where this leads<br>
And I’m not trying to figure it all out<br>
But I like this<br>
Whatever this is<br>
And I want to see more of it.<br><br>

You're easy to talk to<br>
Easy to miss<br>
Even easier to imagine seeing again.<br><br>

So maybe this is just the start<br>
Maybe it's nothing<br>
Maybe it's something<br>
But I’m here<br>
And I’m curious<br>
And I’m in<br>
If you are.

`,
poem4:`<h3>Hey Maia, Happy Birthday</h3>
Hey Maia<br>
Happy birthday<br>
Eighteen already<br>
That’s kind of crazy<br><br>

Thanks for inviting me<br>
I really wish I could’ve been there<br>
Would’ve been cool to see you<br>
Not just through a screen for once<br><br>

I can picture it<br>
You looking great<br>
People around<br>
Music playing<br>
You probably pretending you don’t like the attention<br>
But secretly loving it a little<br><br>

I hope today’s been fun<br>
The kind of fun that feels easy<br>
Nothing forced<br>
Just good vibes and good people<br><br>

Even though I couldn’t be there<br>
I’m glad I get to say this at all<br>
You’ve made these past few weeks<br>
Way better than I expected<br><br>

So yeah<br>
Have the best time<br>
Eat cake<br>
Dance if you feel like it<br>
And tell me all about it later<br><br>

Happy birthday again<br>
I’m really glad we’re in each other’s lives

`,
  letter1: `<h3>Um just confession letters ig</h3> <p> When I first looked at you, I knew I liked you Come on, you can't blame me... <br>not my fault you're so pretty So I did what I do best <br> make a plan I knew you were friends with Vamika, so I BEGGED her to somehow make us talk
I was really glad when I finally got the chance to talk to you in the garden <br>
I tried to be chill and friendly and not weird (I hope it worked) <br>
And I think I might’ve pulled it off<br>
But maybe it wasn’t just me, who knows<br>
Maybe you liked me a little too and that’s how this even worked in the first place<br>

Now that we’ve talked more,
Texted at random hours <br>
Sent each other dumb, real and funny stuff
Had those calls where neither of us wanted to hang up <br>
I don’t know... it just feels nice
Simple...
Comfortable...
Kind of rare... <br>

You make my day better, legit
Even just hearing from you for a second changes my mood <br>

I know it’s only been three weeks<br>
But I really like how this feels<br>
I’m not trying to rush anything<br>
I just want you to know I’m glad this is happening<br>
That we met ..... <br>
That you trusted me, even a little<br>

I know we’re doing this long-distance thing now<br>
Which isn’t easy<br>
But I’m willing to try<br>
Because talking to you, seeing your name pop up, hearing your voice <br>
It all just feels worth it<br>

And yeah,<br>
I want it to last long <br>
I'm willing to wait for a future in which we can be together <br>
I know two years is a lot of time <br>
But if you think carefully, it's not so much <br>
I am sure we can wait 700 days more for each other <br>
I Like you... A lot !
</p>`,
  letter2: `<h3>Okay so this is kinda cheesy but whatever</h3><p> Maia I don’t know how to say this without sounding like I’m in a movie But <br> I really really like you Like it’s kind of insane how much I like you for someone I’ve only known for three weeks<br>
You somehow made texting feel exciting again<br>
Like suddenly I’m checking my phone way too much<br>
Smiling at random times<br>
Looking insane to everyone around me and not even caring<br>

You're genuinely so pretty it’s not fair<br>
Like yeah okay<br>
Be good at math, have a good sense of humor AND be pretty??<br>
Save some qualities for MEEEE 😭😭, please 🥺 <br>

Also, can we talk about how easy it is to talk to you<br>
Even when we’re not saying anything serious<br>
Even when only you are saying stuff<br>
It still feels like the highlight of my day<br>
I LOVE TALKING TO YOU <br>

I know this is long-distance and maybe it sounds crazy to say this now<br>
But I’m not really scared of where this goes<br>
Because I’m just happy I get to talk to you at all<br>
And if this turns into something more<br>
I'm looking forward to it ☺️</p>`,
};

  body.innerHTML = content[key] || "<p>(You can add content for this popup in script.js)</p>";
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Magical Floating Elements: 💖🍉🥒🍯🍓
const heartContainers = document.getElementById("floating-hearts");

const floatingItems = ["💖", "🍉", "🥒", "🍯", "🍓"];

function createFloatingItem() {
  const item = document.createElement("div");
  item.classList.add("floating-heart");

  // Pick a random symbol
  const emoji = floatingItems[Math.floor(Math.random() * floatingItems.length)];
  item.innerText = emoji;

  // Style
  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = (Math.random() * 1 + 1.2) + "rem";
  item.style.animationDuration = (7 + Math.random() * 4) + "s";
  item.style.opacity = 0.5 + Math.random() * 0.4;

  heartContainers.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 12000);
}

// Create new floating item every 500ms
setInterval(createFloatingItem, 500);

let isPlaying = false;
const audio = document.getElementById("bg-music");

function startExperience() {
  // Play music
  audio.play().then(() => {
    isPlaying = true;
  }).catch(() => {
    alert("Click anywhere to enable sound.");
  });

  // Hide overlay
  const overlay = document.getElementById("start-overlay");
  overlay.style.animation = "fadeOutOverlay 1s ease forwards";
  setTimeout(() => overlay.style.display = "none", 1000);
}

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play().catch(() => {});
  }
  isPlaying = !isPlaying;
}


// Smooth entrance
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ❤️ Cursor Heart Trail
document.addEventListener('mousemove', function(e) {
  const heart = document.createElement('div');
  heart.textContent = '💗';
  heart.className = 'cursor-heart';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});
