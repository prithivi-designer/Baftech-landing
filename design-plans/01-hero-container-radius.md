# Align Hero Artwork Container to Top-Only Arch Geometry

Written against: HEAD

## Evidence chain

- Surface: `src/components/OpenChatHero.tsx`
- Problem: The OpenChat hero image container applies 4-corner rounded borders (`rounded-[36px] md:rounded-[77px]`), creating rounded bottom corners rather than a bottom-anchored flat base.
- Design evidence: [`Responsive landing page design/src/App.tsx:17-18`](file:///Users/apple/Documents/baftech%20landing%20page/Responsive%20landing%20page%20design/src/App.tsx#L17-L18) explicitly specifies `borderRadius: "77px 77px 0 0"`.
- Owner: `src/components/OpenChatHero.tsx`
- Scope and affected surfaces: `src/components/OpenChatHero.tsx`
- Uncertainty: none

## Design decision

Replace four-corner border radius with top-only arch geometry (`rounded-t-[36px] md:rounded-t-[77px] rounded-b-none`) on the container element in `src/components/OpenChatHero.tsx`. This aligns the visual structure with the Figma design specification while preserving the responsive scaling across mobile and desktop breakpoints.

## Reuse

- Tailwind border-radius utilities: `rounded-t-[36px]`, `md:rounded-t-[77px]`, `rounded-b-none`
- Exemplar: [`Responsive landing page design/src/App.tsx:17-18`](file:///Users/apple/Documents/baftech%20landing%20page/Responsive%20landing%20page%20design/src/App.tsx#L17-L18)

## Changes

1. `src/components/OpenChatHero.tsx`
   - Change: Update container `className` on line 80 from `rounded-[36px] md:rounded-[77px]` to `rounded-t-[36px] md:rounded-t-[77px] rounded-b-none`.
   - Preserve: Internal desktop and mobile image tags, overlay gradient, floating indicator badges, and top glare reflection highlight.
   - Verify: The bottom edge of the OpenChat hero container is flat (`0px` border radius) while top left and right corners maintain the 77px curved arch on desktop and 36px on mobile.

## Scope

- Inherit: `src/components/OpenChatHero.tsx`
- Verify: `src/app/page.tsx`
- Exclude: Unrelated section card containers across About, What We Build, and Capabilities.

## Validation

- Product: OpenChat product hero visual showcase.
- Interface: View `/` at viewport widths > 768px (desktop) and < 768px (mobile).
- System: Verify border-radius conforms with Figma `borderRadius: "77px 77px 0 0"`.
- Repository: `npm run build` → Compiled successfully with 0 errors.

## Stop conditions

- Stop if changing the class causes layout overflow or breaks the absolute-positioned top glare line.

## Design documentation

- After acceptance and validation: Record `Hero container uses rounded-t-[77px] on desktop with flat base` in design documentation.
