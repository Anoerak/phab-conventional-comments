const CONVENTIONAL_COMMENTS = {
  nitpick: { icon: "info-circle", color: "#FFCCCC"},
  typo: { icon: "keyboard-o", color: "#FFE6CC"},
  suggestion: { icon: "pencil", color: "#CCFFCC"},
  issue: { icon: "exclamation-triangle", stylePrefix: "IMPORTANT", color: "#FF9999"},
  question: { icon: "question-circle", color: "#CCFFFF"},
  thought: { icon: "comment", color: "#E6CCFF"},
  "follow-up": { icon: "share", color: "#FFFFCC"},
  praise: { icon: "thumbs-up", color: "#CCFF99"},
  note: { icon: "sticky-note", color: "#FFE699"},
};

console.log("Phabricator Conventional Comments loaded!");

// Are we on a Phabricator page?
try {
  document.querySelector(".phabricator-wordmark");

  // Add the UI to the main comment textarea
  try {
    const mainCommentForm = document.querySelector(".phui-comment-form-view");
    if (mainCommentForm instanceof Element) {
      addConventionalCommentUIToCommentToolbar(mainCommentForm);
    }
  } catch (error) {
    console.error("Error adding UI to main comment form:", error);
  }

  // Observe DOM changes to detect when the comment textarea is displayed
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          const commentContainer = node.querySelector(".differential-inline-comment-edit");
          if (commentContainer instanceof Element) {
            addConventionalCommentUIToCommentToolbar(commentContainer);
          }
        }
      });
    });
  });

  observer.observe(document, { childList: true, subtree: true });

  /**
   * Adds conventional comment UI to the comment toolbar.
   * @param {Element} commentContainerEl - The comment container element.
   */
  function addConventionalCommentUIToCommentToolbar(commentContainerEl) {
    try {
      const commentToolbar = commentContainerEl.querySelector(".remarkup-assist-bar");
      if (!(commentToolbar instanceof Element)) return;

      const label = createLabelElement();
      const select = createSelectElement();

      label.append(select);
      commentToolbar.append(createSeparatorElement(), label);

      select.addEventListener("change", () => {
        if (!select.value) return;

        const labelData = CONVENTIONAL_COMMENTS[select.value];
        const textAreaEl = commentContainerEl.querySelector("textarea.remarkup-assist-textarea");
        if (!(textAreaEl instanceof HTMLTextAreaElement)) return;

        const commentLabel = `${labelData.stylePrefix
          ? `{nav, ${labelData.icon ? ` icon=${labelData.icon},` : ""} name=${select.value}:, type > ${labelData.stylePrefix}:} `
          : `{nav, ${labelData.icon ? ` icon=${labelData.icon},` : ""} name=${select.value}:, type} `
        }`;

        const cursor = textAreaEl.selectionStart || 0;
        textAreaEl.value = `${textAreaEl.value.substring(0, cursor)}${commentLabel}${textAreaEl.value.substring(cursor)}`;
        select.value = "";
        textAreaEl.focus();
        textAreaEl.selectionStart = textAreaEl.selectionEnd = cursor + commentLabel.length;
      });
    } catch (error) {
      console.error("Error adding conventional comment UI:", error);
    }
  }

  /**
   * Creates and returns a label element.
   * @returns {HTMLLabelElement}
   */
  function createLabelElement() {
    const label = document.createElement("label");
    label.innerText = "Label:";
    label.style.display = "inline-flex";
    label.style.marginBlockStart = "6px";
    label.style.alignItems = "center";
    label.style.color = "#52596c";
    label.style.marginInlineStart = "4px";
    return label;
  }

  /**
   * Creates and returns a select element with options.
   * @returns {HTMLSelectElement}
   */
  function createSelectElement() {
    const select = document.createElement("select");
    select.style.width = "40px";
    select.style.minWidth = "40px";
    select.style.height = "100%";
    select.style.marginInlineStart = "4px";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.innerText = "-";
    select.append(defaultOption);

    Object.keys(CONVENTIONAL_COMMENTS).forEach((option) => {
      const el = document.createElement("option");
      el.value = option;
      el.innerText = option;
      select.append(el);
    });

    return select;
  }

  /**
   * Creates and returns a separator element.
   * @returns {HTMLSpanElement}
   */
  function createSeparatorElement() {
    const separator = document.createElement("span");
    separator.classList.add("remarkup-assist-separator");
    return separator;
  }
} catch (error) {
  console.info("Not a Phabricator page:", error);
}
