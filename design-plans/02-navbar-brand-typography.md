# Align Navbar Brand Logo Typography Scale

Written against: HEAD

## Evidence chain

- Surface: `src/components/Navbar.tsx`
- Problem: The brand mark text "BAFtech" in the navigation bar is rendered at `text-[24px] md:text-[28px]`, which is 4px smaller than the design contract.
- Design evidence: [`Responsive landing page design/src/App.tsx:51`](file:///Users/apple/Documents/baftech%20landing%20page/Responsive%20landing%20page%20design/src/App.tsx#L51) specifies `text-[28px] md:text-[32px]`.
- Owner: `src/components/Navbar.tsx`
- Scope and affected surfaces: `src/components/Navbar.tsx`
- Uncertainty: none

## Design decision

Update the text sizing utility classes for the "BAFtech" brand logo in `src/components/Navbar.tsx` from `text-[24px] md:text-[28px]` to `text-[28px] md:text-[32px]`. This matches the Figma typography scale and ensures brand recognition at the top-level navigation.

## Reuse

- Tailwind text size arbitrary values: `text-[28px]`, `md:text-[32px]`
- Montserrat font family token: `font-montserrat`
- Exemplar: [`Responsive landing page design/src/App.tsx:51-54`](file:///Users/apple/Documents/baftech%20landing%20page/Responsive%20landing%20page%20design/src/App.tsx#L51-L54)

## Changes

1. `src/components/Navbar.tsx`
   - Change: Update `span` typography classes on line 44 from `text-[24px] md:text-[28px]` to `text-[28px] md:text-[32px]`.
   - Preserve: Font family `'Montserrat Alternates'`, font weight `600`, glowing icon companion badge, and hover transition.
   - Verify: The brand logo renders at 28px on mobile viewports and 32px on desktop viewports.

## Scope

- Inherit: `src/components/Navbar.tsx`
- Verify: Navigation bar alignment and responsive breakpoint transitions.
- Exclude: Footer brand logo typography and body headers.

## Validation

- Product: Primary navigation bar brand presentation.
- Interface: View `/` navigation header at mobile (375px) and desktop (1280px+).
- System: Inspect computed font size of `span` element to confirm `28px` / `32px`.
- Repository: `npm run build` → Compiled successfully with 0 errors.

## Stop conditions

- Stop if text size change disrupts the desktop navigation pill flex alignment or overflows the mobile header row.

## Design documentation

- After acceptance and validation: Record `Brand logo typography scale: 28px (mobile) / 32px (desktop)` in design system guide.
