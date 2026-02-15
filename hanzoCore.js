
const crushex_a = document.getElementById('crushe9');
const crushe1_a = [
    'Full Stack Developer',
    'Data Science Enthusiast',
    'ML & AI Explorer',
    'Chrome Extension Developer',
    'Automation Enthusiast',
    'Open Source Contributor',
    'Bot Developer',
    'Linux Enthusiast'
];

let crushe9_a = 0;
let crushor_a = 0;
let crushbit_a = false;
let hanzoid_a = 80;

function hanzoX_a() {
    const hanzofy_a = crushe1_a[crushe9_a];

    if (crushbit_a) {
        crushex_a.textContent = hanzofy_a.substring(0, crushor_a - 1);
        crushor_a--;
        hanzoid_a = 40;
    } else {
        crushex_a.textContent = hanzofy_a.substring(0, crushor_a + 1);
        crushor_a++;
        hanzoid_a = 80;
    }

    if (!crushbit_a && crushor_a === hanzofy_a.length) {
        hanzoid_a = 2000;
        crushbit_a = true;
    } else if (crushbit_a && crushor_a === 0) {
        crushbit_a = false;
        crushe9_a = (crushe9_a + 1) % crushe1_a.length;
        hanzoid_a = 400;
    }

    setTimeout(hanzoX_a, hanzoid_a);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hanzoX_a, 800);
});


const crushe1_b = document.getElementById('crushe1');
let slogor_a = 0;

window.addEventListener('scroll', () => {
    const slogix_a = window.scrollY;

    if (slogix_a > 50) {
        crushe1_b.classList.add('crushbit');
    } else {
        crushe1_b.classList.remove('crushbit');
    }

    slogor_a = slogix_a;
});


const sloget_a = document.getElementById('crushbit_z');
const slognet_a = document.querySelector('.cX14');

sloget_a.addEventListener('click', () => {
    slognet_a.classList.toggle('hanzofy');

    
    const spans = sloget_a.querySelectorAll('span');
    if (slognet_a.classList.contains('hanzofy')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});


document.querySelectorAll('.cX15').forEach(link => {
    link.addEventListener('click', () => {
        slognet_a.classList.remove('hanzofy');
        const spans = sloget_a.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});


const slogohitman_a = document.querySelectorAll('section');
const hitman_a = document.querySelectorAll('.cX15');

window.addEventListener('scroll', () => {
    let current = '';

    slogohitman_a.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    hitman_a.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


const crushehitman_a = document.querySelectorAll(
    '.cX1f, .cXm, .cX1p, .cX1b, .cX1u, .cX1k, .cX1j'
);

crushehitman_a.forEach(el => el.classList.add('hanzoX'));

const hitmanX_a = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('hanzoCore');
            }, index * 80);
            hitmanX_a.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

crushehitman_a.forEach(el => hitmanX_a.observe(el));


const hitmanCore_a = document.querySelectorAll('.cX1s');

const hitmanGate_a = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    entry.target.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    entry.target.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);

            hitmanGate_a.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

hitmanCore_a.forEach(num => hitmanGate_a.observe(num));


const slogohash_a = document.getElementById('hitmanX');
const ctx = slogohash_a.getContext('2d');

let hitmanX_b = [];
let crushhanzo_a = 0;
let hanzoFlux_a = 0;

function slogohitmanCore_a() {
    slogohash_a.width = window.innerWidth;
    slogohash_a.height = window.innerHeight;
}

slogohitmanCore_a();
window.addEventListener('resize', slogohitmanCore_a);

class SlogocrushA {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * slogohash_a.width;
        this.y = Math.random() * slogohash_a.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > slogohash_a.width) this.speedX *= -1;
        if (this.y < 0 || this.y > slogohash_a.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
        ctx.fill();
    }
}


const hanzohit_a = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
for (let i = 0; i < hanzohit_a; i++) {
    hitmanX_b.push(new SlogocrushA());
}

function crushehitmanX_a() {
    for (let i = 0; i < hitmanX_b.length; i++) {
        for (let j = i + 1; j < hitmanX_b.length; j++) {
            const dx = hitmanX_b[i].x - hitmanX_b[j].x;
            const dy = hitmanX_b[i].y - hitmanX_b[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - distance / 150)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(hitmanX_b[i].x, hitmanX_b[i].y);
                ctx.lineTo(hitmanX_b[j].x, hitmanX_b[j].y);
                ctx.stroke();
            }
        }
    }
}

function crushehitmanCore_a() {
    ctx.clearRect(0, 0, slogohash_a.width, slogohash_a.height);

    hitmanX_b.forEach(particle => {
        particle.update();
        particle.draw();
    });

    crushehitmanX_a();
    requestAnimationFrame(crushehitmanCore_a);
}

crushehitmanCore_a();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const hitmanVault_a = document.querySelectorAll('.cXy');
const slogohitmanX_a = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('hanzoX', 'hanzoCore');
            slogohitmanX_a.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

hitmanVault_a.forEach(title => slogohitmanX_a.observe(title));
