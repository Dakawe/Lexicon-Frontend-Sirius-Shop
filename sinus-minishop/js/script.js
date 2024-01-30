const Q = (element, txt = null, i = document.querySelector(element)) => txt ? i.textContent = txt : i,
A = (element) => (document.querySelectorAll(element));

Q('.art-1 h3', 'Potato'), Q('.art-2 p', 'This shirt is on fire!'); 
Q('.art-3 button').style.backgroundColor = 'skyblue', Q('.art-3 button', 'SOLD'),
Q('nav a', 'Start'), Q('footer a:nth-child(4)', 'Mail Us'), Q('.art-3 figure').style.backgroundColor = 'skyblue',
Q('footer article:nth-child(2) p').innerHTML = '<p>Shirts for Dummies <br>Sinusvägen 38 <br>302 33, Halmstad</p>',
Q('nav a').classList.add('active'), Q('header img').classList.remove('logo'),
Q('nav a:nth-child(3)').insertAdjacentHTML('beforeend', '<a href="#">Latest</a>'),Q('main').insertAdjacentHTML
('beforeend', `<article class="art-4"><figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
<h2>Sinus Hoodie</h2><h3>Forrest</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.
</p><button>buy</button></article>')`),A('p').forEach((p) => p.style.color = 'navy'), 
A('button').forEach((p) => p.textContent = 'add to cart'); 
Q('header img').addEventListener("click", () => console.log('Found you!'))
Q('main').addEventListener("click", (e) => console.log('Hi, Im article '+e.target.closest('article').querySelector('h3').textContent));