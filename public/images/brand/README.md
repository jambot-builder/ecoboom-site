# Brand assets

Drop the EcoBoom logo files here. The site code looks for these exact paths:

| File                              | Used where                       |
| --------------------------------- | -------------------------------- |
| `ecoboom-wordmark.png`            | Light backgrounds (nav, footer)  |
| `ecoboom-wordmark-onDark.png`     | Dark backgrounds (ink sections)  |
| `ecoboom-mark.png`                | Standalone target icon (favicon) |

Prefer SVG if you have it - change the file extension in
`src/components/Logo.tsx` to match. PNG at 2x or 3x resolution also works fine
for the wordmark.

For the dark-background version, bake the white stroke around the black "boom"
letters into the file itself rather than trying to apply it in CSS. That way
the spacing stays clean.
