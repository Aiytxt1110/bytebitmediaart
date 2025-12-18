'use client'

import React, { useMemo, useState } from 'react'

interface ArticleContentProps {
  content: string // Markdown string
  className?: string
  translations?: {
    en?: string
    la?: string
    zh?: string
  }
  defaultLanguage?: 'en' | 'la' | 'zh'
}

// Enhanced Markdown parser with image and video support
const parseMarkdown = (markdown: string): string => {
  let html = markdown

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
  
  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')
  
  // Images: ![alt text](url "optional title") - MUST come before links
  html = html.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/gim, (match, alt, url, title) => {
    return `<figure class="image-wrapper">
      <img src="${url}" alt="${alt || ''}" title="${title || ''}" loading="lazy" />
      ${title ? `<figcaption>${title}</figcaption>` : ''}
    </figure>`
  })
  
  // YouTube videos: [youtube](video_id) or direct YouTube URL
  html = html.replace(/\[youtube\]\(([^)]+)\)/gim, (match, videoId) => {
    const id = videoId.includes('youtube.com') || videoId.includes('youtu.be') 
      ? videoId.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1] || videoId
      : videoId
    
    return `<div class="video-wrapper">
      <iframe 
        src="https://www.youtube.com/embed/${id}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>`
  })
  
  // Vimeo videos: [vimeo](video_id)
  html = html.replace(/\[vimeo\]\(([^)]+)\)/gim, (match, videoId) => {
    const id = videoId.includes('vimeo.com') 
      ? videoId.match(/vimeo\.com\/(\d+)/)?.[1] || videoId
      : videoId
    
    return `<div class="video-wrapper">
      <iframe 
        src="https://player.vimeo.com/video/${id}" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>`
  })
  
  // Direct video files: [video](url.mp4)
  html = html.replace(/\[video\]\(([^)]+)\)/gim, (match, url) => {
    return `<div class="video-wrapper">
      <video controls preload="metadata">
        <source src="${url}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>`
  })
  
  // Links (must come AFTER images and videos)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  
  // Lists
  const lines = html.split('\n')
  let inList = false
  const processedLines: string[] = []
  
  lines.forEach(line => {
    if (line.trim().startsWith('- ')) {
      if (!inList) {
        processedLines.push('<ul>')
        inList = true
      }
      processedLines.push(`<li>${line.trim().substring(2)}</li>`)
    } else {
      if (inList) {
        processedLines.push('</ul>')
        inList = false
      }
      processedLines.push(line)
    }
  })
  
  if (inList) {
    processedLines.push('</ul>')
  }
  
  html = processedLines.join('\n')

  // Paragraphs
  html = html.split('\n\n').map(para => {
    const trimmed = para.trim()
    if (!trimmed) return ''
    if (trimmed.startsWith('<h') || 
        trimmed.startsWith('<ul') || 
        trimmed.startsWith('<ol') ||
        trimmed.startsWith('<li') ||
        trimmed.startsWith('<figure') ||
        trimmed.startsWith('<div class="video')) {
      return trimmed
    }
    return `<p>${trimmed.replace(/\n/g, ' ')}</p>`
  }).join('\n')

  return html
}

const languageLabels = {
  en: { name: 'English', flag: '🇬🇧' },
  la: { name: 'ລາວ', flag: '🇱🇦' },
  zh: { name: '中文', flag: '🇨🇳' }
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ 
  content, 
  className = '',
  translations,
  defaultLanguage = 'en'
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'la' | 'zh'>(defaultLanguage)
  
  const availableLanguages = useMemo(() => {
    const languages: ('en' | 'la' | 'zh')[] = [defaultLanguage]
    if (translations?.en && defaultLanguage !== 'en') languages.push('en')
    if (translations?.la && defaultLanguage !== 'la') languages.push('la')
    if (translations?.zh && defaultLanguage !== 'zh') languages.push('zh')
    return languages
  }, [translations, defaultLanguage])

  const currentContent = useMemo(() => {
    if (currentLanguage === defaultLanguage) return content
    return translations?.[currentLanguage] || content
  }, [currentLanguage, content, translations, defaultLanguage])

  const htmlContent = useMemo(() => parseMarkdown(currentContent), [currentContent])

  const hasTranslations = availableLanguages.length > 1

  return (
    <div className={`article-content-wrapper ${className}`}>
      {hasTranslations && (
        <div className="language-selector">
          <div className="language-buttons">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang)}
                className={`language-button ${currentLanguage === lang ? 'active' : ''}`}
              >
                <span className="flag">{languageLabels[lang].flag}</span>
                <span className="label">{languageLabels[lang].name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="article-content">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      
      <style jsx>{`
        .article-content-wrapper {
          position: relative;
        }

        .language-selector {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #e5e7eb;
        }

        :global(.dark) .language-selector {
          border-bottom-color: #374151;
        }

        .language-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 9999px;
          background-color: white;
          color: #4b5563;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .language-button:hover {
          border-color: #9333ea;
          background-color: #faf5ff;
          color: #9333ea;
          transform: translateY(-2px);
        }

        .language-button.active {
          border-color: #9333ea;
          background: linear-gradient(135deg, #9333ea 0%, #c084fc 100%);
          color: white;
          box-shadow: 0 4px 6px -1px rgba(147, 51, 234, 0.3);
        }

        .language-button .flag {
          font-size: 1.25rem;
          line-height: 1;
        }

        :global(.dark) .language-button {
          background-color: #1e293b;
          border-color: #374151;
          color: #9ca3af;
        }

        :global(.dark) .language-button:hover {
          border-color: #c084fc;
          background-color: #2d1b4e;
          color: #c084fc;
        }

        :global(.dark) .language-button.active {
          background: linear-gradient(135deg, #9333ea 0%, #c084fc 100%);
          color: white;
        }

        .article-content :global(h1) {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #111827;
        }
        
        .article-content :global(h2) {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.875rem;
          color: #111827;
        }
        
        .article-content :global(h3) {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }
        
        .article-content :global(p) {
          color: #4b5563;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        
        .article-content :global(strong) {
          color: #111827;
          font-weight: 600;
        }
        
        .article-content :global(em) {
          color: #4b5563;
          font-style: italic;
        }
        
        .article-content :global(a) {
          color: #9333ea;
          text-decoration: none;
          font-weight: 500;
        }
        
        .article-content :global(a:hover) {
          text-decoration: underline;
        }
        
        .article-content :global(ul) {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin: 1rem 0;
        }
        
        .article-content :global(ol) {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin: 1rem 0;
        }
        
        .article-content :global(li) {
          color: #4b5563;
          line-height: 1.75;
          margin-bottom: 0.5rem;
        }
        
        .article-content :global(blockquote) {
          border-left: 4px solid #9333ea;
          padding-left: 1rem;
          font-style: italic;
          color: #6b7280;
          margin: 1.5rem 0;
        }
        
        .article-content :global(code) {
          color: #9333ea;
          background-color: #f3f4f6;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          font-family: monospace;
        }
        
        .article-content :global(pre) {
          background-color: #111827;
          color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .article-content :global(.image-wrapper) {
          margin: 2rem 0;
          text-align: center;
        }
        
        .article-content :global(.image-wrapper img) {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .article-content :global(figcaption) {
          margin-top: 0.75rem;
          font-size: 0.875rem;
          color: #6b7280;
          font-style: italic;
        }
        
        .article-content :global(.video-wrapper) {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          margin: 2rem 0;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .article-content :global(.video-wrapper iframe),
        .article-content :global(.video-wrapper video) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0.75rem;
        }
        
        .article-content :global(.video-wrapper video) {
          object-fit: cover;
        }
        
        :global(.dark) .article-content :global(h1),
        :global(.dark) .article-content :global(h2),
        :global(.dark) .article-content :global(h3) {
          color: #ffffff;
        }
        
        :global(.dark) .article-content :global(p),
        :global(.dark) .article-content :global(li) {
          color: #9ca3af;
        }
        
        :global(.dark) .article-content :global(strong) {
          color: #ffffff;
        }
        
        :global(.dark) .article-content :global(em) {
          color: #9ca3af;
        }
        
        :global(.dark) .article-content :global(a) {
          color: #c084fc;
        }
        
        :global(.dark) .article-content :global(code) {
          color: #c084fc;
          background-color: #1e293b;
        }
        
        :global(.dark) .article-content :global(pre) {
          background-color: #0f172a;
        }
        
        :global(.dark) .article-content :global(blockquote) {
          color: #9ca3af;
        }
        
        :global(.dark) .article-content :global(figcaption) {
          color: #9ca3af;
        }
        
        @media (min-width: 768px) {
          .article-content :global(h1) {
            font-size: 2.5rem;
          }
          
          .article-content :global(h2) {
            font-size: 2rem;
          }
          
          .article-content :global(h3) {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  )
}