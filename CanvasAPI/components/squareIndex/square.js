import { context } from "../canvas.js";
import * as ParticleSphere from "../particleSphere/particleSphere.js";
import * as Utils from "../utils/utils.js";

export class Square{
    constructor(x, y, squareEdge)
    {
        this.x = x;
        this.y = y;
        
        this.isColored = false;
        this.defaultColor = "rgb(128, 128, 128)"; // Default boja je siva
        this.color = this.defaultColor;

        this.squareEdge = squareEdge;

        this.shouldChangeColor = false; // Kad se sve kocke oboje, onda kreću da menjaju boju
    }

    update()
    {
        this.draw();

        if(!this.shouldChangeColor)
        {
            this.checkForParticleCollision();
            this.checkIfShouldChangeColor();
        }
        else
            this.changeColor();
    }

    draw()
    {
        this.determineColor();
        context.fillRect(this.x, this.y, this.squareEdge, this.squareEdge);
    }

    checkForParticleCollision()
    {
        ParticleSphere.particles.forEach(particle => { 
            if(this.shouldAbsorbParticle(particle))
                this.absorbParticle(particle);
        });
    }

    shouldAbsorbParticle(particle)
    {
        return !this.isColored && this.isColliding(this.x, this.y, this.squareEdge, particle.x, particle.y);
    }

    isColliding(squareX, squareY, edge, particleX, particleY)
    {
        if(particleX > squareX && particleX < squareX + edge && particleY > squareY && particleY < squareY + edge)
            return true;
        return false;
    }

    absorbParticle(particle)
    {
        this.color = particle.color; // Kocka preuzme boju partikle sa kojom se sudari
        ParticleSphere.removeParticle(particle);
        this.isColored = true; // Da obezbedim da ne menja dalje boju
    }

    determineColor()
    {
        if(this.isColored)
            context.fillStyle = this.color;
        else
            context.fillStyle = this.defaultColor;
    }

    checkIfShouldChangeColor()
    {
        if(!this.shouldChangeColor && ParticleSphere.particles.length == 0) // Nema više partikli -> sve kocke su obojene
            this.shouldChangeColor = true;
    }

    changeColor()
    {
        let rgb = Utils.getRGB(this.color);
        rgb[0] += 0.5; // red, da bude toplija
        rgb[2] -= 0.5; // blue, da bude manje ladnija
        this.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

        if(rgb[0] >= 255){ // Kad se zagrejalo na max vraćam ga u originalno stanje
            this.shouldChangeColor = false;
            this.color = this.defaultColor;
            this.isColored = false;
            ParticleSphere.addParticle();
        }
    }
}
