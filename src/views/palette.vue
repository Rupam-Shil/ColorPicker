<template>
  <div class="palette">
    <h1>Colour Palette Generator</h1>
    <p>
      Press [<button class="generator-button">Space</button>] to generate a new
      palette
    </p>

    <div class="colours">
      <div class="colour">
        <button class="lock-toggle" ref="LT">
          <img src="../assets/lock-open.svg" />
        </button>

        <input type="text" class="colour-input" ref="CI" value="#000000" />

        <button class="copy-hex">Copy</button>
      </div>
      <div class="colour">
        <button class="lock-toggle">
          <img src="../assets/lock-open.svg" />
        </button>

        <input type="text" class="colour-input" ref="CI" value="#000000" />

        <button class="copy-hex">Copy</button>
      </div>
      <div class="colour">
        <button class="lock-toggle">
          <img src="../assets/lock-open.svg" />
        </button>

        <input type="text" class="colour-input" ref="CI" value="#000000" />

        <button class="copy-hex">Copy</button>
      </div>
      <div class="colour">
        <button class="lock-toggle">
          <img src="../assets/lock-open.svg" />
        </button>

        <input type="text" class="colour-input" ref="CI" value="#000000" />

        <button class="copy-hex">Copy</button>
      </div>
      <div class="colour">
        <button class="lock-toggle">
          <img src="../assets/lock-open.svg" />
        </button>

        <input type="text" class="colour-input" ref="CI" value="#000000" />

        <button class="copy-hex">Copy</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const CI = ref("");

onMounted(() => {
  class Colour {
    constructor(hex, element) {
      this.hex = hex;
      this.element = element;
      this.locked = false;
    }

    setHex(hex) {
      this.hex = hex;
      this.element.style.backgroundColor = hex;
      this.element.querySelector(".colour-input").value = hex;
    }

    setLocked(locked) {
      this.locked = locked;

      if (locked) {
        this.element.querySelector(".lock-toggle").classList.add("is-locked");
        this.element.querySelector("img").src = "../assets/lock-closed.svg";
      } else {
        this.element
          .querySelector(".lock-toggle")
          .classList.remove("is-locked");
        this.element.querySelector("img").src = "../assets/lock-open.svg";
      }
    }

    toggleLocked() {
      this.setLocked(!this.locked);
    }

    generateHex() {
      if (this.locked) {
        return;
      }

      const chars = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
      }
      this.setHex(color);
    }

    copyToClipboard() {
      const input = this.element.querySelector(".colour-input");
      input.select();
      document.execCommand("copy");
      input.blur();

      this.element.classList.add("copied");
      setTimeout(() => {
        this.element.classList.remove("copied");
      }, 1000);
    }
  }

  const colour_elements = document.querySelectorAll(".colours .colour");

  const colours = [];

  for (let i = 0; i < colour_elements.length; i++) {
    const colour_element = colour_elements[i];

    const input = colour_element.querySelector(".colour-input");
    const lock_toggle = colour_element.querySelector(".lock-toggle");
    const copy_btn = colour_element.querySelector(".copy-hex");

    const hex = input.value;

    const colour = new Colour(hex, colour_element);

    input.addEventListener("input", (e) => colour.setHex(e.target.value));
    lock_toggle.addEventListener("click", () => colour.toggleLocked());
    copy_btn.addEventListener("click", () => colour.copyToClipboard());

    colour.generateHex();
    colours.push(colour);
  }

  document.querySelector(".generator-button").addEventListener("click", () => {
    for (let i = 0; i < colours.length; i++) {
      colours[i].generateHex();
    }
  });

  document.addEventListener("keypress", (e) => {
    if (e.code.toLowerCase() === "space") {
      document.querySelector(".generator-button").click();
    }
  });
});
</script>

<style lang="scss" scoped>
* {
  background-color: #23292f;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}

body {
  background-color: #eee;
  overflow-y: hidden;
}

h1 {
  color: #aaa;
  padding-left: 25px;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

p {
  padding-left: 25px;
  color: #d81e5d;
  font-size: inherit;
  font-weight: 700;
  background: linear-gradient(to bottom right, #d81e5d, #8a4fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  font-size: 30px;
}

.generator-button {
  color: #d81e5d;
  font-size: inherit;
  font-weight: 700;
  background: linear-gradient(to bottom right, #d81e5d, #8a4fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.4s ease-out;
}

.generator-button:hover {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

h4 {
  color: #aaa;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.colours {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0px 0px;
  height: 100vh;
  transform: skewY(-13deg);
}

.colour {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #1e2f42;
  color: #fff;
  border-radius: 1rem;
  transition: 0.4s ease-out;
  border: 2px solid transparent;
  align-items: center;
  justify-content: center;
}

.colour.copied {
  border: 2px solid white;
}

button,
input {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  color: inherit;
}

button {
  user-select: none;
  cursor: pointer;
}

.lock-toggle {
  opacity: 0.5;
  transition: 0.4s linear;
}

.lock-toggle.is-locked {
  opacity: 1;
}

.colour-input {
  text-align: center;
}

.copy-hex {
  border: white;
  border-radius: 15px;
}
</style>
