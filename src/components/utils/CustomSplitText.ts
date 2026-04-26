export class CustomSplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private _originals: Map<Element, string> = new Map();

  constructor(target: string | Element | Element[], vars?: { type?: string; linesClass?: string }) {
    const elements = this._getElements(target);
    const type = vars?.type || "chars,words,lines";
    const linesClass = vars?.linesClass || "";

    elements.forEach((el) => {
      this._originals.set(el, el.innerHTML);
      const text = el.textContent || "";
      el.innerHTML = "";
      const wordStrings = text.split(/\s+/).filter(Boolean);

      wordStrings.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.position = "relative";

        if (type.includes("chars")) {
          word.split("").forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.style.display = "inline-block";
            charSpan.style.position = "relative";
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
        } else {
          wordSpan.textContent = word;
        }

        this.words.push(wordSpan);
        el.appendChild(wordSpan);

        if (wordIndex < wordStrings.length - 1) {
          const space = document.createTextNode("\u00A0");
          el.appendChild(space);
        }
      });

      if (type.includes("lines") && linesClass) {
        const wrapper = document.createElement("div");
        wrapper.className = linesClass;
        wrapper.style.overflow = "hidden";
        while (el.firstChild) {
          wrapper.appendChild(el.firstChild);
        }
        el.appendChild(wrapper);
        this.lines.push(wrapper);
      }
    });
  }

  revert() {
    this._originals.forEach((html, el) => {
      el.innerHTML = html;
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }

  private _getElements(target: string | Element | Element[]): Element[] {
    if (typeof target === "string") {
      return Array.from(document.querySelectorAll(target));
    }
    if (Array.isArray(target)) {
      return target.flatMap((t) => this._getElements(t));
    }
    return [target];
  }
}
