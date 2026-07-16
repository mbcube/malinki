import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// ─── Reusable sub-schemas ─────────────────────────────────────────────────────

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

// ─── Page-level singletons (one file per locale: fr.md / en.md) ───────────────

const generalCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/general" }),
  schema: z.object({
    page_title: z.string(),
    not_found_title: z.string(),
    not_found_button: z.string(),
    not_found_subtext: z.string(),
    hero_video_view_reel: z.string(),
    hero_video_heading: z.string(),
    hero_video_subtitle: z.string(),
    hero_video_scroll_indicator_text: z.string(),
  }),
});

const headerCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/header" }),
  schema: z.object({
    contact_button: z.string(),
    menu_projects: z.string(),
    menu_services: z.string(),
    menu_team: z.string(),
    menu_studio: z.string(),
    menu_blog: z.string(),
  }),
});

const sectionsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/sections" }),
  schema: z.object({
    about_text_heading: z.string(),
    about_text_body: z.string(),
    cta_heading_line1: z.string(),
    cta_heading_line2: z.string(),
    cta_button_text: z.string(),
    cta2_heading: z.string(),
    cta2_button_text: z.string(),
    services_heading: z.string(),
    services_description: z.string(),
    service_1: z.string(),
    service_2: z.string(),
    service_3: z.string(),
    service_4: z.string(),
    team_heading_left: z.string(),
    team_heading_right: z.string(),
    team_mobile_heading: z.string(),
    team_tagline: z.string(),
    team_member_1_name_line_1: z.string(),
    team_member_1_name_line_2: z.string(),
    team_member_1_role: z.string(),
    team_member_2_name: z.string(),
    team_member_2_role: z.string(),
    team_member_3_name: z.string(),
    team_member_3_role: z.string(),
    team_member_4_name: z.string(),
    team_member_4_role: z.string(),
    team_member_5_name: z.string(),
    team_member_5_role: z.string(),
    team_member_6_name: z.string(),
    team_member_6_role: z.string(),
    logos_heading: z.string(),
    footer_copyright: z.string(),
    footer_ig_agency: z.string(),
    footer_ig_studio: z.string(),
  }),
});

const productionPublicitaireCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/production-publicitaire" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cta_text: z.string(),
    testimonial_text: z.string(),
    testimonial_author: z.string(),
    testimonial_role: z.string(),
    headline_line1: z.string(),
    headline_line2: z.string(),
    paragraph1: z.string(),
    paragraph2: z.string(),
    button_text: z.string(),
    productions_title: z.string(),
    behind_scenes_title: z.string(),
    clients_title: z.string(),
    prods_title: z.string(),
    prods_subtitle_1: z.string(),
    prods_text_1: z.string(),
    prods_subtitle_2: z.string(),
    prods_text_2: z.string(),
    prods_subtitle_3: z.string(),
    prods_text_3: z.string(),
    prods_button_text: z.string(),
    contact_cta_title: z.string(),
    contact_cta_text: z.string(),
    contact_cta_button_text: z.string(),
    main_image_alt: z.string(),
    sidebar_image_alt: z.string(),
    testimonial_image_alt: z.string(),
    row_image_1_alt: z.string(),
    row_image_2_alt: z.string(),
    row_image_3_alt: z.string(),
    feature_image_alt: z.string(),
    bts_image_1_alt: z.string(),
    bts_image_2_alt: z.string(),
    bts_image_3_alt: z.string(),
    bts_image_4_alt: z.string(),
    clients_image_alt: z.string(),
    prods_image_alt: z.string(),
  }),
});

const contenuDeMarqueCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/contenu-de-marque" }),
  schema: z.object({
    title: z.string(),
    description_1: z.string(),
    description_2: z.string(),
    cta_text: z.string(),
    bts_title: z.string(),
    bts_description: z.string(),
    bts_button_text: z.string(),
    testimonial_text: z.string(),
    testimonial_author: z.string(),
    testimonial_role: z.string(),
    testimonial_text_2: z.string(),
    testimonial_author_2: z.string(),
    testimonial_role_2: z.string(),
    productions_title: z.string(),
    prods_title: z.string(),
    prods_subtitle_1: z.string(),
    prods_text_1: z.string(),
    prods_subtitle_2: z.string(),
    prods_text_2: z.string(),
    prods_subtitle_3: z.string(),
    prods_text_3: z.string(),
    prods_subtitle_4: z.string(),
    prods_text_4: z.string(),
    prods_button_text: z.string(),
    contact_cta_text: z.string(),
    contact_cta_button_text: z.string(),
    main_image_alt: z.string(),
    sidebar_image_alt: z.string(),
    testimonial_image_alt: z.string(),
    testimonial_image_alt_2: z.string(),
    row_image_1_alt: z.string(),
    row_image_2_alt: z.string(),
    row_image_3_alt: z.string(),
    row_image_4_alt: z.string(),
    row_image_5_alt: z.string(),
    row_image_6_alt: z.string(),
    row_image_7_alt: z.string(),
    feature_image_alt: z.string(),
    clients_image_alt: z.string(),
  }),
});

const contenuVerticalCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/contenu-vertical" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    gifs_alt_1: z.string(),
    gifs_alt_2: z.string(),
    gifs_alt_3: z.string(),
    gifs_alt_4: z.string(),
    cta_text: z.string(),
    testimonial_text: z.string(),
    testimonial_author: z.string(),
    testimonial_role: z.string(),
    testimonial_image_alt: z.string(),
    main_image_alt: z.string(),
    vertical_image_alt: z.string(),
    tiktoks_title: z.string(),
    tiktoks_description: z.string(),
    tiktoks_button_text: z.string(),
    productions_title: z.string(),
    behind_scenes_title: z.string(),
    bts_image_1_alt: z.string(),
    bts_image_2_alt: z.string(),
    bts_image_3_alt: z.string(),
    bts_image_4_alt: z.string(),
    bts_image_5_alt: z.string(),
    bts_image_6_alt: z.string(),
    bts_image_7_alt: z.string(),
    bts_image_8_alt: z.string(),
    contact_cta_title: z.string(),
    contact_cta_text: z.string(),
    contact_cta_button_text: z.string(),
    clients_image_alt: z.string(),
  }),
});

const blogPageCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog-page" }),
  schema: z.object({
    hero_title: z.string(),
    hero_subtitle: z.string(),
    empty_state_title: z.string(),
    empty_state_text: z.string(),
    cta_text: z.string(),
    back_to_blog: z.string(),
    not_found: z.string(),
  }),
});

const videoClipsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/video-clips" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cta_text: z.string(),
    gallery_title: z.string(),
    gif_1_alt: z.string(),
    gif_2_alt: z.string(),
    gif_3_alt: z.string(),
    gif_4_alt: z.string(),
    gif_5_alt: z.string(),
    gif_6_alt: z.string(),
    gif_7_alt: z.string(),
    contact_cta_text: z.string(),
    contact_cta_button_text: z.string(),
  }),
});

const studioCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/studio" }),
  schema: z.object({
    title: z.string(),
    hero_title_line1: z.string(),
    hero_title_line2: z.string(),
    hero_intro_text: z.string(),
    nav_le_studio: z.string(),
    nav_galerie_photo: z.string(),
    nav_nos_equipements: z.string(),
    nav_les_tarifs: z.string(),
    plan_access_line1: z.string(),
    plan_access_line2: z.string(),
    plan_access_size: z.string(),
    plan_specs_title: z.string(),
    plan_specs: z.array(z.string()),
    plan_inclusions_title: z.string(),
    plan_inclusions: z.array(z.string()),
    plan_cta_line1: z.string(),
    plan_cta_line2: z.string(),
    plan_cta_button: z.string(),
    equipment_available_title_line1: z.string(),
    equipment_available_title_line2: z.string(),
    equipment_rental_title_line1: z.string(),
    equipment_rental_title_line2: z.string(),
    equipment_available: z.array(z.string()),
    equipment_rental: z.array(z.string()),
    equipment_view_full_list: z.string(),
    equipment_filter_dept: z.string(),
    equipment_drawer_title: z.string(),
    equipment_col_name: z.string(),
    equipment_col_qty: z.string(),
    equipment_col_dept: z.string(),
    equipment_col_price: z.string(),
    equipment_col_description: z.string(),
    equipment_price_tbd: z.string(),
    equipment_price_note: z.string(),
    pricing_title: z.string(),
    pricing_subtitle: z.string(),
    pricing_plan_4h_title: z.string(),
    pricing_plan_4h_price: z.string(),
    pricing_plan_8h_title: z.string(),
    pricing_plan_8h_price: z.string(),
    pricing_plan_creative_title: z.string(),
    pricing_plan_creative_desc: z.string(),
    pricing_book_now: z.string(),
    pricing_contact_us: z.string(),
    faq_title: z.string(),
    faq_cat_studio: z.string(),
    faq_cat_reservations: z.string(),
    faq_cat_installations: z.string(),
    faq_cat_services: z.string(),
    faq_q1_question: z.string(),
    faq_q1_answer: z.array(z.string()),
    faq_q2_question: z.string(),
    faq_q2_answer: z.array(z.string()),
    faq_q3_question: z.string(),
    faq_q3_answer: z.array(z.string()),
    faq_q4_question: z.string(),
    faq_q4_answer: z.array(z.string()),
    faq_q5_question: z.string(),
    faq_q5_answer: z.array(z.string()),
    faq_q6_question: z.string(),
    faq_q6_answer: z.array(z.string()),
    faq_q7_question: z.string(),
    faq_q7_answer: z.array(z.string()),
    faq_q8_question: z.string(),
    faq_q8_answer: z.array(z.string()),
    faq_q9_question: z.string(),
    faq_q9_answer: z.array(z.string()),
    faq_q10_question: z.string(),
    faq_q10_answer: z.array(z.string()),
    faq_q11_question: z.string(),
    faq_q11_answer: z.array(z.string()),
    map_title: z.string(),
    map_address: z.string(),
    map_cta: z.string(),
  }),
});

const contactCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/contact" }),
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    subheading: z.string(),
    form_title: z.string(),
    name_label: z.string(),
    name_placeholder: z.string(),
    email_label: z.string(),
    email_placeholder: z.string(),
    phone_label: z.string(),
    phone_placeholder: z.string(),
    message_label: z.string(),
    message_placeholder: z.string(),
    submit_button: z.string(),
    submitting_button: z.string(),
    success_message: z.string(),
    error_message: z.string(),
    email_title: z.string(),
    phone_title: z.string(),
    agence_title: z.string(),
    studio_title: z.string(),
    cta_title: z.string(),
    cta_text: z.string(),
  }),
});

const projectLabelsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/project-labels" }),
  schema: z.object({
    behind_the_scenes: z.string(),
    additional_videos: z.string(),
    photo_gallery: z.string(),
    back_to_projects: z.string(),
    not_found: z.string(),
    main_video: z.string(),
    client: z.string(),
    agency: z.string(),
  }),
});

const seoCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/seo" }),
  schema: z.object({
    home_title: z.string(),
    home_description: z.string(),
    production_publicitaire_title: z.string(),
    production_publicitaire_description: z.string(),
    contenu_de_marque_title: z.string(),
    contenu_de_marque_description: z.string(),
    contenu_vertical_title: z.string(),
    contenu_vertical_description: z.string(),
    video_clips_title: z.string(),
    video_clips_description: z.string(),
    contact_title: z.string(),
    contact_description: z.string(),
    project_title_suffix: z.string(),
    blog_title: z.string(),
    blog_description: z.string(),
  }),
});

// ─── Projects (folder collection: src/content/projects/<slug>/{fr,en}.md) ────

const projectVideoSchema = z.object({
  url: z.string(),
  type: z.enum(["mp4", "youtube", "vimeo"]),
  isPortrait: z.boolean().optional(),
});

const projectDetailSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const projectsCollection = defineCollection({
  loader: glob({
    // Files live at src/content/projects/<locale>/<slug>.md
    pattern: "*/*.md",
    base: "./src/content/projects",
    // Prevent the `slug` frontmatter field from overriding the file-path-based ID.
    // Without this, both fr/<slug>.md and en/<slug>.md for a project get the same ID
    // (the slug value), causing one to overwrite the other in the content store.
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    clientName: z.string().optional(),
    agencyName: z.string().optional(),
    shortDescription: z.string(),
    mainVideo: projectVideoSchema.optional(),
    mainImageUrl: z.string().optional(),
    details: z.array(projectDetailSchema).optional(),
    additionalVideos: z.array(projectVideoSchema).optional(),
    behindTheScenes: z
      .object({
        portrait: z.array(z.string()).optional(),
        landscape: z.array(z.string()).optional(),
      })
      .optional(),
    galleryImages: z.array(z.string()).optional(),
    publishedAt: z.union([z.string(), z.date()]).transform(v => typeof v === 'string' ? v : v.toISOString().split('T')[0]).optional(),
  }),
});

// ─── Blog (folder collection: src/content/blog/<locale>/<slug>.md) ──────────

const blogCollection = defineCollection({
  loader: glob({
    // Files live at src/content/blog/<locale>/<slug>.md
    pattern: "*/*.md",
    base: "./src/content/blog",
    // Prevent the `slug` frontmatter field from overriding the file-path-based ID.
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    author: z.string().optional(),
    publishedAt: z.union([z.string(), z.date()]).transform(v => typeof v === 'string' ? v : v.toISOString().split('T')[0]).optional(),
  }),
});

// ─── Projects Grid (single JSON file, tagText kept as {fr,en} object) ─────────

const gridItemSchema = z.object({
  tagText: z.object({ fr: z.string(), en: z.string() }),
  videoUrl: z.string().optional(),
  imageFile: z.string(),
  altText: z.string(),
  clientName: z.string(),
  agencyName: z.string(),
  width: z.number(),
  height: z.number(),
  containerClasses: z.string().optional(),
  projectSlug: z.string().optional(),
});

const projectsGridCollection = defineCollection({
  loader: file("src/content/projects-grid.json"),
  schema: z.object({
    id: z.string(),
    projects: z.array(gridItemSchema),
  }),
});

// ─── Equipment (single JSON file, no i18n — column headers come from studio collection) ──

const equipmentCollection = defineCollection({
  loader: file("src/content/equipment.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    qty: z.union([z.number(), z.string()]),
    dept: z.string(),
    price: z.string(),
    description: z.string(),
  }),
});

// ─── Exports ─────────────────────────────────────────────────────────────────

export const collections = {
  general: generalCollection,
  header: headerCollection,
  sections: sectionsCollection,
  "production-publicitaire": productionPublicitaireCollection,
  "contenu-de-marque": contenuDeMarqueCollection,
  "contenu-vertical": contenuVerticalCollection,
  "video-clips": videoClipsCollection,
  studio: studioCollection,
  contact: contactCollection,
  "project-labels": projectLabelsCollection,
  seo: seoCollection,
  projects: projectsCollection,
  "projects-grid": projectsGridCollection,
  equipment: equipmentCollection,
  "blog-page": blogPageCollection,
  blog: blogCollection,
};
