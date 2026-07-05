"use client";

import React, { useEffect, useRef } from "react";

export const HeroShaderBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.warn("WebGL not supported in this browser.");
      return;
    }

    // Set dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      const dpr = window.devicePixelRatio || 1;
      mouseRef.current.targetX = e.clientX * dpr;
      // Invert Y coordinate for WebGL
      mouseRef.current.targetY = (window.innerHeight - e.clientY) * dpr;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Vertex shader
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader (cinematic gold/ruby morphing waves with mouse glow)
    const fsSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      float noise(in vec2 p) {
        return sin(p.x) * cos(p.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;

        // Influence of mouse position
        vec2 m = (u_mouse - 0.5 * u_resolution.xy) / u_resolution.y;
        float distToMouse = length(p - m);

        // Morphing speed and scale
        float t = u_time * 0.12;
        
        float wave = 0.0;
        for (int i = 1; i < 5; i++) {
          float f = float(i);
          p.x += sin(p.y + t + f * 8.0) * 0.25;
          p.y += cos(p.x + t + f * 4.0) * 0.25;
          wave += abs(noise(p * f + t)) / f;
        }

        // Color Palette
        vec3 color_obsidian = vec3(0.012, 0.012, 0.012); // Obsidian Black (#030303)
        vec3 color_ruby = vec3(0.686, 0.062, 0.156);     // Ruby Red (#B01027)
        vec3 color_gold = vec3(0.768, 0.635, 0.211);     // Gold (#C4A236)

        // Wave blend mixes
        float ruby_mix = smoothstep(0.1, 0.8, wave);
        float gold_mix = smoothstep(0.25, 0.9, wave * 0.8);

        // Mouse glow
        float glow = smoothstep(0.35, 0.0, distToMouse) * 0.22;

        vec3 finalColor = mix(color_obsidian, color_ruby, ruby_mix);
        finalColor = mix(finalColor, color_gold, gold_mix);
        finalColor += color_gold * glow;

        // Vignette effect
        float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
        vignette = clamp(pow(16.0 * vignette, 0.4), 0.0, 1.0);
        finalColor *= vignette;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Shader compilation utility
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    // Link program
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Buffer setups
    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resolutionLoc = gl.getUniformLocation(program, "u_resolution");
    const mouseLoc = gl.getUniformLocation(program, "u_mouse");

    let animationFrameId: number;
    const startTime = Date.now();

    // Mouse coordinates easing interpolations
    let curX = 0;
    let curY = 0;

    const render = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      // Mouse easing interpolation
      curX += (mouseRef.current.targetX - curX) * 0.08;
      curY += (mouseRef.current.targetY - curY) * 0.08;

      gl.clear(gl.COLOR_BUFFER_BIT);

      // Bind uniforms
      gl.uniform1f(timeLoc, elapsed);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform2f(mouseLoc, curX, curY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 block"
    />
  );
};
export default HeroShaderBg;
