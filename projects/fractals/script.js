const canv = document.querySelector("#canvas");
const ctx = canv.getContext("2d");

canv.width = window.innerWidth;
canv.height = window.innerHeight;

const centerX = canv.width / 2;
const centerY = canv.height / 2;

class Hex {
  constructor(x, y, size = 50) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotation = Math.PI / 2;
  }

  update() {
    this.rotation += 0.01;
  }

  draw(ctx) {
    ctx.save();

    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();

    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;

      const pointX = Math.cos(angle) * this.size;
      const pointY = Math.sin(angle) * this.size;

      if (i === 0) {
        ctx.moveTo(pointX, pointY);
      } else {
        ctx.lineTo(pointX, pointY);
      }
    }

    ctx.closePath();

    const gradient = ctx.createLinearGradient(
      -this.size,
      -this.size,
      this.size,
      this.size,
    );

    gradient.addColorStop(0, "#f6efff");
    gradient.addColorStop(1, "#000");

    ctx.fillStyle = gradient;
    
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#6900ff"


    ctx.strokeStyle = "#6900ff";
    ctx.lineWidth = 14;
    ctx.stroke();

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 9;
    ctx.stroke();

    ctx.restore();
  }
}
const hex = new Hex(centerX, centerY - 60, 100);
const hex2 = new Hex(centerX + 60, centerY + 50, 100);
const hex3 = new Hex(centerX - 60, centerY + 50, 100);

function animate() {
  ctx.clearRect(0, 0, canv.width, canv.height);

  hex.update();
  hex.draw(ctx);

  hex2.update();
  hex2.draw(ctx);

  hex3.update();
  hex3.draw(ctx);


  requestAnimationFrame(animate);
}

animate();
