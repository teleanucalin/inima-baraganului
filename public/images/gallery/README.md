# Image Gallery Structure

This directory contains categorized images for the Inima Bărăganului website.

## Directory Organization

### `/farm-life`
Photos depicting daily life on the farm:
- Farmers working in the fields
- Equipment and machinery
- Daily activities
- Seasonal work

### `/harvest`
Harvest season photography:
- Wheat and grain harvesting
- Combine harvesters in action
- Crop collection
- Post-harvest activities

### `/team`
People and community:
- Member portraits
- Team photos
- Group activities
- Community events

### `/products`
Close-up shots of agricultural products:
- Wheat grains
- Sunflowers
- Oilseeds
- Legumes
- Forage crops

### `/seasons`
Landscape and seasonal variations:
- Spring planting
- Summer fields
- Autumn harvest
- Winter landscapes
- Bărăgan plains panoramas

## Image Guidelines

### Technical Requirements
- **Format**: JPG or WebP (preferred for performance)
- **Resolution**: Minimum 1920x1080px for hero images
- **Aspect Ratio**: 16:9 for hero carousel, 4:3 for cards
- **File Size**: Compress to under 500KB per image
- **Naming**: Use descriptive kebab-case names (e.g., `wheat-harvest-sunset.jpg`)

### Content Guidelines
- **Authenticity**: Use real farm photos, avoid stock images
- **Lighting**: Golden hour (sunrise/sunset) preferred
- **Composition**: Rule of thirds, show scale of Bărăgan plains
- **People**: Show farmers in action, authentic moments
- **Branding**: Natural, earthy aesthetic matching color palette

## Usage in Code

To use these images in the carousel or components:

```typescript
// Update heroSlides in lib/data.ts
export const heroSlides = [
  {
    image: "/images/gallery/harvest/wheat-field-sunset.jpg",
    title: "Your title here",
    subtitle: "Your subtitle",
    alt: "Descriptive alt text"
  },
  // ... more slides
]
```

## Recommended Images to Add

1. **Hero Carousel (4 images minimum)**:
   - Wide Bărăgan landscape at golden hour
   - Harvest scene with combine harvester
   - Team of farmers working together
   - Close-up of wheat with sunset background

2. **About Page**:
   - Portrait of Ing. Ceaușescu Ramona-Virginia
   - Group photo of all 5 founding members
   - Historical photos from 2021

3. **Members Page**:
   - Individual member farm photos
   - Equipment and facilities
   - Each member's specialty crops

4. **Blog/News** (future):
   - Seasonal updates
   - Event photos
   - Agricultural activities

## Photo Credits

Always maintain proper attribution for photographers if images are not taken in-house.
