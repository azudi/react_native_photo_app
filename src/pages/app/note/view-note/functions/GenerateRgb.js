 export function getRandomColor() {
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    let a = Math.random();
    return [`rgb(${r}, ${g}, ${b})`, `rgba(${r}, ${g}, ${b}, ${a*0.2})`];
  }
