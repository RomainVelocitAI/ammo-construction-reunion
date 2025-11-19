# Charte Typographique AMMO

## Polices installées

Les 4 polices de la charte typographique AMMO sont maintenant intégrées au projet via Next.js Google Fonts :

### 1. BIG SHOULDERS INLINE (Gros titres)
- **Usage** : Titres principaux (H1)
- **Variable CSS** : `--font-heading`
- **Classe utilitaire** : `font-heading`
- **Poids disponibles** : 400, 700

```tsx
<h1 className="font-heading text-6xl">TITRE PRINCIPAL</h1>
```

### 2. Sofia Sans Extra Condensed (Sous-titres)
- **Usage** : Sous-titres, titres secondaires (H2, H3)
- **Variable CSS** : `--font-subheading`
- **Classe utilitaire** : `font-subheading`
- **Poids disponibles** : 400, 600
- **Styles** : normal, italic

```tsx
<h2 className="font-subheading text-3xl italic">Sous-titre élégant</h2>
```

### 3. Bellota Text (Corps de texte)
- **Usage** : Paragraphes, descriptions, contenu principal
- **Variable CSS** : `--font-body`
- **Classe utilitaire** : `font-body`
- **Poids disponibles** : 300, 400, 700
- **Styles** : normal, italic

```tsx
<p className="font-body text-base">Texte du corps de page...</p>
```

### 4. Rajdhani (Notes et détails)
- **Usage** : Annotations, légendes, détails techniques
- **Variable CSS** : `--font-notes`
- **Classe utilitaire** : `font-notes`
- **Poids disponibles** : 300, 400, 500, 600, 700

```tsx
<span className="font-notes text-sm">Note importante</span>
```

## Configuration automatique

Les polices sont automatiquement appliquées :
- **Body** : Utilise Bellota Text par défaut
- **Headings (H1-H6)** : Utilisent BIG SHOULDERS INLINE par défaut

## Exemples d'utilisation

### Page de service
```tsx
export default function ServicePage() {
  return (
    <div>
      <h1 className="font-heading text-6xl text-ammo-gold">
        CONSTRUCTION VILLA
      </h1>

      <h2 className="font-subheading text-3xl italic mt-4">
        Expertise et savoir-faire réunionnais
      </h2>

      <p className="font-body text-lg mt-6">
        Expert en maîtrise d'œuvre à La Réunion, nous coordonnons
        et pilotons l'intégralité de votre projet de construction...
      </p>

      <div className="font-notes text-sm text-ammo-anthracite mt-4">
        Respect des normes RE2020 - Garantie décennale
      </div>
    </div>
  );
}
```

### Call-to-action
```tsx
<button className="font-subheading text-xl bg-ammo-gold text-ammo-noir">
  Demandez un devis gratuit
</button>
```

## Hiérarchie visuelle recommandée

1. **Gros titre** (font-heading) : Taille 48-72px, couleur or (#D6B363)
2. **Sous-titre** (font-subheading) : Taille 24-36px, italic, couleur anthracite
3. **Corps** (font-body) : Taille 16-18px, couleur noir
4. **Notes** (font-notes) : Taille 12-14px, couleur ciment/anthracite

## Variables CSS disponibles

```css
--font-heading: var(--font-heading)
--font-subheading: var(--font-subheading)
--font-body: var(--font-body)
--font-notes: var(--font-notes)
```

## Migration des composants existants

Pour mettre à jour les composants existants :

1. Remplacer les classes de police génériques par les classes AMMO
2. Utiliser `font-heading` pour les h1-h2
3. Utiliser `font-subheading` pour les h3-h4
4. Le corps de texte utilise automatiquement `font-body`
5. Utiliser `font-notes` pour les petits textes et annotations
