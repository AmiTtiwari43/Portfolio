"use client";
import React, { useEffect, useRef } from "react";

/**
 * InteractiveCursor Component
 * Adapted from user provided "liquid spring" logic.
 */

export default function InteractiveCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- Provided Logic Structures ---
    
    // Configuration E
    const E = {
      debug: true,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };

    let pos = { x: 0, y: 0 };
    let lines: Line[] = [];
    let animationFrameId: number;
    // @ts-ignore
    let f: Oscillator;

    // Node Class
    function Node(this: any) {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }

    // Oscillator Class (n)
    function Oscillator(this: any, e: any) {
      this.init(e || {});
    }
    Oscillator.prototype = {
      init: function (e: any) {
        this.phase = e.phase || 0;
        this.offset = e.offset || 0;
        this.frequency = e.frequency || 0.001;
        this.amplitude = e.amplitude || 1;
      },
      update: function () {
        this.phase += this.frequency;
        return this.offset + Math.sin(this.phase) * this.amplitude;
      },
    };

    // Line Class
    function Line(this: any, e: any) {
      this.init(e || {});
    }
    Line.prototype = {
      init: function (e: any) {
        this.spring = e.spring + 0.1 * Math.random() - 0.02;
        this.friction = E.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        for (var t, n = 0; n < E.size; n++) {
          // @ts-ignore
          t = new Node();
          t.x = pos.x;
          t.y = pos.y;
          this.nodes.push(t);
        }
      },
      update: function () {
        var e = this.spring,
            t = this.nodes[0];
        
        t.vx += (pos.x - t.x) * e;
        t.vy += (pos.y - t.y) * e;
        
        for (var n, i = 0, a = this.nodes.length; i < a; i++) {
            t = this.nodes[i];
            if (i > 0) {
              n = this.nodes[i - 1];
              t.vx += (n.x - t.x) * e;
              t.vy += (n.y - t.y) * e;
              t.vx += n.vx * E.dampening;
              t.vy += n.vy * E.dampening;
            }
            t.vx *= this.friction;
            t.vy *= this.friction;
            t.x += t.vx;
            t.y += t.vy;
            e *= E.tension;
        }
      },
      draw: function () {
        var e,
            t,
            n = this.nodes[0].x,
            i = this.nodes[0].y;
            
        ctx!.beginPath();
        ctx!.moveTo(n, i);
        
        var a;
        for (a = 1; a < this.nodes.length - 2; a++) {
            e = this.nodes[a];
            t = this.nodes[a + 1];
            n = 0.5 * (e.x + t.x);
            i = 0.5 * (e.y + t.y);
            ctx!.quadraticCurveTo(e.x, e.y, n, i);
        }
        
        e = this.nodes[a];
        t = this.nodes[a + 1];
        ctx!.quadraticCurveTo(e.x, e.y, t.x, t.y);
        ctx!.stroke();
        ctx!.closePath();
      },
    };

    const initLines = () => {
      lines = [];
      for (let i = 0; i < E.trails; i++) {
        // @ts-ignore
        lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
      }
    };

    // Events
    const onMouseMove = (e: MouseEvent | TouchEvent) => {
        if ('touches' in e) {
            pos.x = e.touches[0].pageX;
            pos.y = e.touches[0].pageY;
        } else {
            const mouseEvent = e as MouseEvent;
            pos.x = mouseEvent.clientX;
            pos.y = mouseEvent.clientY;
        }
        
        // Lazy init on first move if desired, but we init on load.
    };

    const resizeCanvas = () => {
        canvas.width = window.innerWidth - 20; // Match code logic
        canvas.height = window.innerHeight;
    };

    const render = () => {
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear completely
        
        ctx.globalCompositeOperation = 'lighter';
        
        // Original code used 20% lightness: 'hsla(' + Math.round(f.update()) + ',50%,20%,0.8)'
        // Adjusted to 60% for dark background visibility
        ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',50%,60%,0.8)'; 
        ctx.lineWidth = 3;
        
        for (var i = 0; i < E.trails; i++) {
            var line = lines[i];
            // @ts-ignore
            line.update();
            // @ts-ignore
            line.draw();
        }
        
        animationFrameId = requestAnimationFrame(render);
    };

    // Initialization
    // @ts-ignore
    f = new Oscillator({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
    });
    
    // Initial setup
    resizeCanvas();
    initLines();
    render();

    // Bindings
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchstart", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);

    return () => {
        window.removeEventListener("resize", resizeCanvas);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("touchstart", onMouseMove);
        document.removeEventListener("touchmove", onMouseMove);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            pointerEvents: 'none', 
            zIndex: 60 
        }}
    />
  );
}
