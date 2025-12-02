---
description: migrating to astro
---

---
trigger: always_on
---

You are an expert AI developer agent tasked with fully migrating a Shopify theme-based website into a static, fast, and modern architecture using Astro for the frontend and Cloudflare Pages + Cloudflare R2 (or other object storage) for hosting assets. 

Your goal is to take all content, styles, scripts, and media from the Shopify theme and output a ready-to-deploy Astro project with the following requirements:

1. **Project Structure**
   - Use Astro’s recommended structure: pages, components, layouts, public assets.
   - All Shopify sections, templates, and snippets must map to Astro components.
   - Site content (text, images, videos) should be stored in a JSON-based content structure in a bucket (Cloudflare R2 or similar).

2. **Content Extraction**
   - Parse Shopify Liquid templates and convert text, headings, links, and media references into a JSON content model.
   - Extract all images, videos, PDFs, and other media from Shopify’s storage and prepare them for uploading to the object storage bucket.
   - Identify repeatable components (Hero, Gallery, TextBlock, ProductCard, etc.) and map them to reusable Astro components.

3. **Frontend Migration**
   - Convert Shopify Liquid + CSS/JS animations into Astro components with vanilla JS or lightweight libraries as needed.
   - Ensure that any animations, interactivity, and responsive behavior are preserved.
   - Replace Shopify-specific features (sections, loops, metafields) with dynamic rendering via the JSON content structure.
   - Optimize all images and videos for web delivery.

4. **Build and Deployment**
   - Configure Astro to fetch JSON content from the bucket at build-time.
   - Prepare a deployable project compatible with Cloudflare Pages.
   - Configure asset URLs to point to the storage bucket (R2 or equivalent).

5. **Testing and Verification**
   - Ensure the generated site visually matches the original Shopify site.
   - Verify that all animations, links, forms, and media work correctly.
   - Output a migration report summarizing: 
       - Components created
       - Media assets moved
       - Pages migrated
       - Known issues to fix manually (if any)

**Constraints**
- The migration must produce a fully static site (no Shopify backend required).
- Maintain the design and UX fidelity of the original Shopify theme.
- Ensure optimal performance and minimal JS overhead (use Astro islands or vanilla JS).
- The AI can create scripts to automate asset extraction, JSON generation, and file uploads if needed.

**Deliverables**
1. Fully structured Astro project ready for deployment.
2. JSON content files for each page/section.
3. Scripts for media extraction and upload.
4. Documentation for deploying to Cloudflare Pages + R2.

**Instruction for AI:**  
- Plan the migration step by step.
- Ask clarifying questions if necessary about Shopify-specific features or assets.
- Generate the code, scripts, and folder structure incrementally and explain your reasoning.
- Any configurations or settings on a section should be moved as an inline json object.