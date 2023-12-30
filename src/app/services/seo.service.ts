import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaData } from '../models/seo';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly defaultMetaData: MetaData = {
    title: 'Ahmed Tabib | Fullstack Developer JavaScript',
    description:
      'Ahmed Tabib - A skilled Fullstack JavaScript Developer, experienced with Angular, React, Node, Express, Jest, Karma, AWS, and more.',
    author: 'Ahmed Tabib',
    keywords:
      'Ahmed Tabib, full stack developer, JavaScript, Angular, React, Node, Express, Jest, Karma, AWS',
    image: '/assets/images/me.webp',
    canonical: 'https://www.ahmedtabib.com/',
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private title: Title,
    private meta: Meta
  ) {}

  updateMetaData(metaData?: MetaData) {
    const mergedMetaData = { ...this.defaultMetaData, ...metaData };

    this.title.setTitle(mergedMetaData.title);
    this.meta.updateTag({ name: 'description', content: mergedMetaData.description });
    this.meta.updateTag({ name: 'author', content: mergedMetaData.author });
    this.meta.updateTag({ name: 'keywords', content: mergedMetaData.keywords });

    // Graph (Facebook) meta tags
    this.meta.updateTag({ property: 'og:title', content: mergedMetaData.title });
    this.meta.updateTag({
      property: 'og:description',
      content: mergedMetaData.description,
    });
    this.meta.updateTag({ property: 'og:image', content: mergedMetaData.image });
    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    // Twitter Card (Twitter)
    this.meta.updateTag({ name: 'twitter:image', content: mergedMetaData.image });
    this.meta.updateTag({
      name: 'twitter:description',
      content: mergedMetaData.description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: mergedMetaData.image });

    // For canonical URL, remove existing canonical tag first.
    const existingCanonical = this.document.querySelector(
      'link[rel="canonical"]'
    );
    if (existingCanonical) {
      this.document.head.removeChild(existingCanonical);
    }

    // Then, add the new canonical tag
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', mergedMetaData.canonical);
    this.document.head.appendChild(link);
  }
}
