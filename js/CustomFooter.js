import { createTemplate } from "/js/createTemplate.js"

const template = createTemplate(`
<template>
<!-- Start of Footer -->
<footer>
  <div class="container">
    <div class="pb-5">
      <br><br>
      <p class="mb-0 copyright-text text-center content">©2022 Grayman.re. All rights reserved.</p>
    </div>
  </div>
</footer>
<!-- End of Footer -->
</template>
`)

export class CustomFooter extends HTMLElement {
  constructor() {
    super()
    const templateContent = template.content
    const shadowRoot = this.attachShadow({ mode: 'closed' })
    shadowRoot.appendChild(templateContent.cloneNode(true))
  }
}