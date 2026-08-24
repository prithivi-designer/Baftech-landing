# Align OpenChat Flagship Primary Action Label

Written against: HEAD

## Evidence chain

- Surface: `src/components/OpenChatHero.tsx`
- Problem: The primary call-to-action button in the OpenChat hero section is labeled "Explore Capabilities", which diverges from the documented product CTA contract.
- Design evidence: [`BAFtech - Website Content.txt:34`](file:///Users/apple/Documents/baftech%20landing%20page/BAFtech%20-%20Website%20Content.txt#L34) specifies the action contract as `Explore OpenChat`.
- Owner: `src/components/OpenChatHero.tsx`
- Scope and affected surfaces: `src/components/OpenChatHero.tsx`
- Uncertainty: none

## Design decision

Update the primary pill CTA text in `src/components/OpenChatHero.tsx` from `Explore Capabilities` to `Explore OpenChat`. This maintains consistent product-level terminology aligned with the brand content contract while retaining the anchor destination `#capabilities` to guide the user into the interactive feature showcase.

## Reuse

- Button styling: `bg-white text-black text-[16px] px-8 py-3.5 rounded-full font-medium shadow-glow`
- Exemplar: [`BAFtech - Website Content.txt:34`](file:///Users/apple/Documents/baftech%20landing%20page/BAFtech%20-%20Website%20Content.txt#L34)

## Changes

1. `src/components/OpenChatHero.tsx`
   - Change: Replace `<span>Explore Capabilities</span>` on line 67 with `<span>Explore OpenChat</span>`.
   - Preserve: Pill button styling, smooth hover glow, `ArrowRight` icon, and `#capabilities` navigation target.
   - Verify: Button label reads "Explore OpenChat".

## Scope

- Inherit: `src/components/OpenChatHero.tsx`
- Verify: Hero section action hierarchy.
- Exclude: Secondary "Privacy Architecture" ghost button and Navbar CTA button.

## Validation

- Product: OpenChat hero section call to action.
- Interface: View `/` section `#openchat`.
- System: Confirm CTA copy matches `BAFtech - Website Content.txt:34`.
- Repository: `npm run build` → Compiled successfully with 0 errors.

## Stop conditions

- Stop if changing the text causes unwanted button wrapping on narrow mobile viewports.

## Design documentation

- After acceptance and validation: Record `OpenChat flagship hero primary CTA label: "Explore OpenChat"` in product content guidelines.
